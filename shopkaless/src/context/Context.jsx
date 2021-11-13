import React, { createContext, useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../config/firebase';
import CallApi from '../utils/CallApi';
export const ContextProvider = createContext();
function Context(props) {
    const history = useHistory('');
    // User
    const [user, setUser] = useState([]);
    // Products
    const [products, setProducts] = useState([]);
    // Load
    const [load, setLoad] = useState(true);
    
    const [clickBar, SetClickBar] = useState(true);
    const [clickToggle, setClickToggle] = useState(true);
    const [clickLogin, setClickLogin] = useState(true);
    const [clickYourCart, setClickYourCart] = useState(true);

    // Giỏ Hàng Tổng
    const [cart, setCart] = useState([])
    // Giỏ Hàng của User
    const [cartUser, SetCartUser] = useState([])

    // Trạng thái click bar
    const handleClickBar = () => {
        SetClickBar(!clickBar)
    }

    // Trạng thái ClickToggle Login or Register
    const handleClickToggle = () => {
        setClickToggle(!clickToggle)
    }

    // Trạng thái đóng mở Login
    const handleClickLogin = () => {
        setClickLogin(!clickLogin)
    }

    // Trạng thái đóng mở Your Cart
    const hanldeClickYourCart = () => {
        setClickYourCart(!clickYourCart)
    }
    // Xử lý tác vụ Đăng ký
    const handleRegister = (data) => {
        const { firstname, lastname, email, password } = data
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth.user) {
                    auth.user.updateProfile({
                        displayName: `${firstname} ${lastname}`,
                    }).then((s) => {
                        history.push("/")
                        handleClickLogin()
                        alert("Đăng Ký Thành Công")
                    })
                }
            })
            .catch((e) => {
                if (e.message === "The email address is already in use by another account.") {
                    alert("Email này đã được đăng ký ở một tài khoản khác")
                }
                else {
                    alert(e.message);
                }
            })
    }

    // Lắng nghe thay đổi 
    auth.onAuthStateChanged((authUser) => {
        if (authUser) {
            setUser(authUser)
        } else {
            setUser(false);
        }
    })
    // Xử lý tác vụ Đăng Nhập
    const handleLogin = async (data) => {
        const { email, password } = data
        await auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
                handleClickLogin()
                alert("Đăng Nhập Thành Công")
            })
            .catch((e) => {
                if (
                    e.message ===
                    "The password is invalid or the user does not have a password."
                ) {
                    alert("Bạn hãy check lại mật khẩu hoặc tài khoản ");
                } else if (
                    e.message ===
                    "There is no user record corresponding to this identifier. The user may have been deleted."
                ) {
                    history.push("/account/register");
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                } else {
                    alert(e.message);
                }

            })
    }
    // Xử lý tác vụ Đăng Xuất
    const handleLogout = (event) => {
        event.preventDefault();
        auth.signOut();
        alert("Đăng Xuất Thành Công")
        history.push("/");
    }

    // Xử lý tác vụ Call APi Get Data
    const getData = async () => {
        try {
            await CallApi("products", "GET", null)
                .then(res => setProducts(res.data))
            setLoad(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])

    // Fomat Slug
    const FormatSlug = (str) => {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    // Xử lý tác vụ Thêm Giỏ Hàng

    const addToCart = (product, count, size, idUser) => {
        if (user) {
            const cartItem = cart.slice();
            let statusInCart = false;
            if (statusInCart === false) {
                cartItem.forEach(item => {
                    if (item.id === product.id) {
                        // Nếu Cùng id cùng size tăng count lên
                        if (item.size === size) {
                            item.count += count;
                            item.size = size;
                            item.idUser = idUser
                            statusInCart = true
                        }
                    } else if (item.id === product.id) {
                        // Nếu cùng id không cùng size xét item mới 
                        if (item.size !== size) {
                            cartItem.push({ ...product, count: count, size: size, idUser: idUser })
                            statusInCart = true
                        }
                    }
                });
            }
            // Nếu trong cart chưa có item thì thêm vào Cart statusInCart == true
            if (!statusInCart) {
                cartItem.push({ ...product, count: count, size: size, idUser: idUser })
                setCart(cartItem);
                statusInCart = true;
            }



            hanldeClickYourCart()

        }
        else {
            handleClickLogin()
            alert("Làm phiền bạn đăng nhập ")
        }
        console.log("cart", cart);

    }

    // Tăng count
    const increment = (product) => {
        const cartItem = cart.slice();
        cartItem.forEach((item) => {
            if (item === product) {
                item.count += 1
            }
        })
        setCart(cartItem);
    }

    // Giảm Count
    const decrement = (product) => {
        const cartItem = cart.slice();
        cartItem.forEach(item => {
            if (item === product) {
                if (item.count === 1) {
                    item.count = 1
                } else {
                    item.count -= 1
                }
            }
        })
        setCart(cartItem)
    }
    // Xóa Product YourCart
    const removeProduct = (product) => {
        const cartItem = cart.slice();
        cartItem.forEach((item, index) => {
            if (item === product) {
                cartItem.splice(index, 1)
            }
        })
        setCart(cartItem)

    }
    // Xử lý Filter Các sản phẩm đã mua của User
    const handleCartUser = () => {
        const cartItem = cart.slice();
        const CartOfMe = cartItem.filter((item, index) => {
            return item.idUser === user.uid;
        })
        SetCartUser(CartOfMe)
    }
    useEffect(() => {
        handleCartUser()
    }, [cart, user])

    // Xử lý tính tổng tiền
    const [total, setTotal] = useState(0)
    const getTotal = () => {
        const sum = cartUser.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0)
        setTotal(sum)
    }
    useEffect(() => {
        getTotal()
    }, [getTotal])


     // Check thanh toán
     const handleCheckUser = () => {
        if (!user) {
            history.push("/account/login")
        } else {
            alert("Xin lỗi vì chức năng này chưa hoàn thiện")
        }
    }

    // Xử lý lưu vào local
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            const dataCart = JSON.parse(localStorage.getItem('dataCart'));
            if (dataCart) {
                setCart(dataCart)
            }
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            localStorage.setItem('dataCart', JSON.stringify(cart));

        }
    });


    return (
        <ContextProvider.Provider value={{
            user: user,
            clickBar: clickBar,
            handleClickBar: handleClickBar,
            clickToggle: clickToggle,
            handleClickToggle: handleClickToggle,
            clickLogin: clickLogin,
            handleClickLogin: handleClickLogin,
            clickYourCart: clickYourCart,
            hanldeClickYourCart: hanldeClickYourCart,
            handleLogin: handleLogin,
            handleRegister: handleRegister,
            handleLogout: handleLogout,
            load: load,
            products: products,
            FormatSlug: FormatSlug,
            addToCart: addToCart,
            increment: increment,
            decrement: decrement,
            removeProduct: removeProduct,
            cartUser:cartUser,
            total:total,
            handleCheckUser:handleCheckUser

        }}>
            {props.children}
        </ContextProvider.Provider>
    );
}

export default Context;
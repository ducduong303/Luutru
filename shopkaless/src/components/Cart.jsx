import React, { useContext } from 'react';
import Header from './Header';
import HeaderTitlte from './HeaderTitlte';
import { ContextProvider } from '../context/Context';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiTruck } from 'react-icons/fi';
import YourCart from './YourCart';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Cart(props) {
    const { cartUser, decrement, increment, removeProduct, total, handleCheckUser } = useContext(ContextProvider)
    return (
        <>
            <Header></Header>
            <YourCart></YourCart>
            <HeaderTitlte section="Your Cart" title={`${cartUser.length} product`}></HeaderTitlte>
            {
                cartUser.length === 0 ?
                    <div className="cart__empty">
                        <h2>  Your cart is empty</h2>
                        <Link to="/"><button>Go Home</button></Link>
                    </div>
                    :
                    <div className="cart">
                        <div className="container">
                            <div className="cart__inner">
                                <div className="cart__head">
                                    <div className="col_item col_1">Ảnh Sản Phẩm</div>
                                    <div className="col_item col_2">Tên sản phẩm</div>
                                    <div className="col_item col_3">Đơn giá</div>
                                    <div className="col_item col_4">Số lượng</div>
                                    <div className="col_item col_5">Thành tiền</div>
                                    <div className="col_item col_6">Xóa</div>
                                </div>
                                <div className="cart__body">
                                    {
                                        cartUser.map((item, index) => {
                                            return (
                                                <div className="cart__item" key={index}>
                                                    <div className="col_item col_1">
                                                        <img className="cart__item-img" src={item.url} alt="" />
                                                    </div>
                                                    <div className="col_item col_2">
                                                        <div className="cart__item-info">
                                                            <div className="title-product">
                                                                {item.title}
                                                            </div>
                                                            <div className="size-product">
                                                                Size: <strong>{item.size}</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col_item col_3">
                                                        <span className="cart__item-price">
                                                            {item.price}$
                                                        </span>
                                                    </div>
                                                    <div className="col_item col_4">
                                                        <div className="cart__item-quantity">
                                                            <button className="btn-quantity" onClick={() => decrement(item)}>-</button>
                                                            <button>{item.count}</button>
                                                            <button className="btn-quantity" onClick={() => increment(item)}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="col_item col_5">
                                                        <span>
                                                            {item.price * item.count}$
                                                        </span>
                                                    </div>
                                                    <div className="col_item col_6">
                                                        <p className="cart__item-remove" onClick={() => removeProduct(item)}><AiOutlineDelete size={20} /></p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="cart__check">
                                <div className="cart__check-inner">
                                    <div className="cart__check-item">
                                        <div className="cart__check-title">
                                            <h2>SUBTOTAL</h2>
                                            <p>{total} $</p>
                                        </div>
                                        <p><FiTruck size={18} /><b>Congratulations!</b>You have gotb <b>FREE Shipping</b></p>
                                        <p>Shipping & taxes calculated at checkout</p>
                                        <button className="cart__check-btn" onClick={handleCheckUser}>
                                            Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

            <Footer></Footer>
        </>
    );
}

export default Cart;
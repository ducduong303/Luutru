import React, { useContext } from 'react';
import { ContextProvider } from '../context/Context';
import time from "../assets/images/time.png";
import { AiOutlineDelete } from 'react-icons/ai';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
function YourCart(props) {
    
    const { clickYourCart, hanldeClickYourCart, cartUser, removeProduct, total,handleCheckUser } = useContext(ContextProvider)
    const ClassYourCart = clickYourCart ? "your-cart" : "your-cart active";
    const ClassOverlay = clickYourCart ? "your-cart__overlay" : "your-cart__overlay active"
    const ClassContent = clickYourCart ? "your-cart__content" : "your-cart__content active"
    return (
        <div className={ClassYourCart}>
            <div className="your-cart__inner">
                <div className={ClassOverlay} onClick={hanldeClickYourCart}> </div>
                <div className={ClassContent}>
                    <div className="your-cart__head">
                        <h3>SHOPPING CART</h3>
                        <img src={time} alt="" onClick={hanldeClickYourCart} />
                    </div>
                    <div className="your-cart__box">
                        <div className="your-cart__center">
                            {
                                cartUser.length === 0 ?
                                    <div className="your-cart__empty" style={{ color: "#000" }}>
                                        <RiShoppingBasketLine size={50} />
                                        <h4> Your cart is empty.</h4>
                                        <button onClick={hanldeClickYourCart}>Back To Shop</button>
                                    </div>
                                    :
                                    <>
                                        {
                                            cartUser.map((item, index) => {
                                                return (
                                                    <div key={index} className="your-cart__item">
                                                        <div className="your-cart__img">
                                                            <img src={item.url} alt="" />
                                                        </div>

                                                        <div className="your-cart__desc">
                                                            <p className="your-cart__title"><b>{item.title}</b></p>
                                                            <p className="your-cart__size"><b>Size: {item.size}</b></p>
                                                            <h3 className="your-cart__price">${item.price}.00 x {item.count}</h3>
                                                            <p className="your-cart__delete" onClick={() => removeProduct(item)}><AiOutlineDelete size={20} /></p>
                                                        </div>
                                                    </div>


                                                )
                                            })
                                        }
                                    </>
                            }
                        </div>

                    </div>
                    {
                        cartUser.length > 0 ? <div className="your-cart__bottom">
                            <div className="your-cart__bottom-box">
                                <div className="your-cart__bottom-head">
                                    <h3><b>Subtotal:</b></h3>
                                    <h3>{`$${total}.00`}</h3>
                                </div>
                                <Link to="/cart" className="your-cart__bottom-btn" onClick={hanldeClickYourCart}><button>View Cart</button></Link>
                                <Link to="#" className="your-cart__bottom-btn" onClick={handleCheckUser}><button>Check Out</button></Link>
                            </div>

                        </div> : null
                    }

                </div>
            </div>
        </div>
    );
}

export default YourCart;
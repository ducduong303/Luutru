import React, { useContext, useEffect } from 'react';
import logo from "../assets/images/logo.png"
import { BiUser } from 'react-icons/bi';
import { FiShoppingCart, FiLogOut } from 'react-icons/fi';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../context/Context';
function Header(props) {
    const { handleClickBar, clickBar, handleClickLogin, user, handleLogout, hanldeClickYourCart, cartUser } = useContext(ContextProvider)
    const Class = clickBar ? "header__nav" : "header__nav active"

    useEffect(() => {
        const listMenu = document.querySelector('.header')
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                listMenu.classList.add('active')
            } else {
                listMenu.classList.remove('active')
            }
        })
    }, [])
    return (
        <div className="header">
            <div className="container header__inner">
                <Link to="/"><img src={logo} alt="" className="header__logo" /></Link>
                <div className="header__right">
                    <ul className={Class}>
                        <li><Link activeClassName='is-active' to="/">Home</Link></li>
                        <li><Link to="/products">products</Link></li>
                        <li><Link to="/blog">blog</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                    <div className="header__bar" onClick={handleClickBar}>
                        <GoThreeBars size={27}></GoThreeBars>
                    </div>
                    {
                        user && user ? <div className="header__login">
                            <BiUser size={25} ></BiUser>
                            <div className="header__login-option">
                                <ul>
                                    <li><Link to="/profile"><h5>User: {user.displayName}</h5></Link></li>
                                    <li><h5 onClick={handleLogout}>LogOut <FiLogOut></FiLogOut></h5></li>
                                </ul>
                            </div>
                        </div>
                            :
                            <div className="header__login" onClick={handleClickLogin}>
                                <BiUser size={25} ></BiUser>
                            </div>
                    }
                    <div className="header__cart" onClick={hanldeClickYourCart}>
                        <FiShoppingCart size={25}></FiShoppingCart><b>({cartUser.length})</b>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
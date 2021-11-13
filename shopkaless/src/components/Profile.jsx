import React, { useContext } from 'react';
import Header from './Header';
import LoginAndRegister from './LoginAndRegister';
import YourCart from './YourCart';
import CustomTitle from './CustomTitle';
import { ContextProvider } from '../context/Context';
import Footer from './Footer';

function Profile(props) {
    const { user, cartUser } = useContext(ContextProvider)
    console.log("user", user);

    return (
        <>
            <Header></Header>
            <LoginAndRegister></LoginAndRegister>
            <YourCart></YourCart>
            <CustomTitle title="Trang cá nhân "
                desc=""></CustomTitle>
            <div className="container" >
                <div style={{padding:"20px 0"}}>
                    <h3>Tên người dùng : {user?.displayName}</h3>
                    <h3>Email : {user?.email}</h3>
                    <h3>Số sản phẩm trong giỏ hàng : {cartUser.length} sản phẩm</h3>
                </div>
            </div>
            <Footer></Footer>

        </>
    );
}

export default Profile;
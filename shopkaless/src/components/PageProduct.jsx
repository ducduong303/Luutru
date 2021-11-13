import React, { Component } from 'react';
import Header from './Header';
import LoginAndRegister from './LoginAndRegister';
import Products from './Products';
import Footer from './Footer';
import YourCart from './YourCart';

class PageProduct extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <LoginAndRegister></LoginAndRegister>
                <YourCart></YourCart>
                <Products></Products>
                <Footer></Footer>
            </>
        );
    }
}

export default PageProduct;
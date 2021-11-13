import React, { Component } from 'react';
import Blog from './Blog';
import SectionInta from './SectionInta';
import Header from './Header';
import LoginAndRegister from './LoginAndRegister';
import YourCart from './YourCart';
import Footer from './Footer';

class PageBlog extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Blog></Blog>
                <LoginAndRegister></LoginAndRegister>
                <YourCart></YourCart>
                <SectionInta></SectionInta>
                <Footer></Footer>
            </>
        );
    }
}

export default PageBlog;
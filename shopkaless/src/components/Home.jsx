import React, { useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import LoginAndRegister from './LoginAndRegister';
import CustomHeading from './CustomHeading';
import Products from './Products';
import Blog from './Blog';
import SectionInta from './SectionInta';
import Footer from './Footer';
import YourCart from './YourCart';
import { BsArrowUpShort } from 'react-icons/bs';
function Home(props) {
    useEffect(() => {
        const onTop = document.querySelector('.onTop')
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                onTop.classList.add('active')
            } else {
                onTop.classList.remove('active')
            }
        })
    }, [])
 
    return (
        <div className="home" id="home">
            <Header></Header>
            <Banner></Banner>
            <LoginAndRegister></LoginAndRegister>
            <YourCart></YourCart>
            <CustomHeading></CustomHeading>
            <Products></Products>
            <Blog></Blog>
            <SectionInta></SectionInta>
            <Footer></Footer>
            <a href="#home" className="onTop"><BsArrowUpShort size={25}/></a>
        </div>
    );
}

export default Home;
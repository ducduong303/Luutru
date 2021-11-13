

import React, { useEffect, useState, useContext } from 'react';

import Header from './Header';
import CallApi from '../utils/CallApi';
import Loading from './Loading';

import { BsChevronRight, BsChevronLeft, BsHeart, BsQuestionCircle } from 'react-icons/bs';
import { IoMdPaperPlane } from 'react-icons/io';
import { AiOutlineMail, AiOutlineSync } from 'react-icons/ai';
import { FiTruck, FiClock } from 'react-icons/fi';
import ReactImageMagnify from 'react-image-magnify';
import LoginAndRegister from './LoginAndRegister';
import HeaderTitlte from './HeaderTitlte';
import Footer from './Footer';
import ProductAsloLike from './ProductAsloLike';
import { ContextProvider } from '../context/Context';
import YourCart from './YourCart';


function ProductDetail(props) {
    const { addToCart, user } = useContext(ContextProvider)
    const [data, setData] = useState(null)
    const [indexImg, setIndexImg] = useState(0);
    const [size, setSize] = useState("M");
    const [indexSize, setIndexSize] = useState(0);
    const [count, setCount] = useState(1)

    useEffect(() => {
        let id = props.match.params.id
        CallApi(`products/${id}`, "GET", null)
            .then(res => {
                setData(res.data)
            })
    }, [props.match.params.id])

    const ClickNext = () => {
        if (indexImg === data.image.length - 1) {
            setIndexImg(0)
        } else {
            setIndexImg(prev => prev + 1)
        }
    }
    const ClickPrev = () => {
        if (indexImg === 0) {
            setIndexImg(data.image.length - 1)
        } else {
            setIndexImg(prev => prev - 1)
        }
    }
    const handleSize = (size, index) => {
        setSize(size);
        setIndexSize(index)
    }

    const datas = data &&
        <div className="row product__detail-box">
            <div className="col-lg-2  product__detail-thumbs">
                {
                    data.image.map((item, index) => {
                        return (
                            <img
                                className=" product__detail-thumb"
                                src={item} alt=""
                                key={index}
                                style={{ border: indexImg === index ? "1px solid #c99947" : "1px solid transparent", opacity: indexImg === index ? 1 : 0.5 }}
                                onClick={() => setIndexImg(index)}
                            />
                        )
                    })
                }
            </div>
            <div className="col-lg-10 product__detail-image">
                <button className="product__detail-image-btn product__detail-image-next" onClick={ClickNext} ><BsChevronRight size={25} /></button>
                <button className="product__detail-image-btn product__detail-image-prev" onClick={ClickPrev}><BsChevronLeft size={25} /></button>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: data.image[indexImg],
                    },
                    largeImage: {
                        src: data.image[indexImg],
                        width: 1200,
                        height: 1800,
                    },
                    enlargedImageContainerDimensions: {
                        width: '120%',
                        height: '100%'
                    }
                }} />
            </div>
        </div>

    const desc = data &&
        <div className="product__detail-content">
            <p>Amyra</p>
            <h1 className="product__detail-content-title">{data && data.title}</h1>
            <p className="product__detail-content-review"> <span>4 review </span> <span>In Stock</span> <span>SKU: AV01-D-32</span></p>
            <p className="product__detail-content-price">{data && `$${data.price}.00`}</p>
            <p className="product__detail-content-desc">{data && data.desc}</p>
            <div className="product__detail-content-size">
                <h4>SIZE: {size}</h4>
                {data && data.size.map((item, index) => {
                    return (
                        <button
                            key={index}
                            style={{ backgroundColor: indexSize === index ? "#333" : null, color: indexSize === index ? "#fff" : "#000" }}
                            onClick={() => handleSize(item, index)}>{item}</button>
                    )
                })}
            </div>
            <div className="product__detail-content-infolink">
                <a href="/"><BsHeart />Add to Wishlist</a>
                <a href="/"><IoMdPaperPlane /> Delivery & Returns</a>
                <a href="/"><AiOutlineMail /> Enquiry</a>
            </div>
            <div className="product__detail-content-action">
                <div className="product__detail-content-quantity">
                    <button onClick={count > 1 ? () => setCount(currentCount => currentCount - 1) : null}>-</button>
                    <span>{count}</span>
                    <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
                </div>
                <div className="product__detail-content-add">
                    <button onClick={() => addToCart(data, count, size, user.uid)}>ADD TO CART</button>
                </div>
            </div>
            <p className="product__detail-content-time"><FiTruck size={18} /> <b>Congratulations! </b>You have got <b>FREE Shipping</b> </p>
            <p className="product__detail-content-time"><FiClock size={18} /><b> Estimated delivery between</b> </p>
            <div className="product__detail-content-storeFeatures">
                <p><FiTruck size={18} />Free Shipping & Return</p>
                <p><AiOutlineSync size={18} />Money back guarantee</p>
                <p><BsQuestionCircle size={18} />Fast & reliable support</p>
            </div>
            <p className="product__detail-content-categories">
                <b>Categories:</b> All, Best seller, Denim, Dress, New Arrival, T-Shirt, Tops, Women
            </p>
            <p className="product__detail-content-categories">
                <b>Tags:</b> Color Pink Clay, Color White Cream, Price $50-$150, Size M, Size S, Vendor Kalles, women
            </p>

        </div>

    return (
        <>
            <Header></Header>
            <LoginAndRegister></LoginAndRegister>
            {data && <HeaderTitlte section="New Arrival" title={data ? data.title : null}></HeaderTitlte>}
            {data ? <div className="product__detail">
                <div className="container">
                    <div className=" row product__detail-item">
                        <div className="col-lg-6 product__detail-left">
                            {datas}
                        </div>
                        <div className="col-lg-6 product__detail-right">
                            {desc}
                        </div>
                    </div>
                </div>
            </div> : <Loading></Loading>}
            {data && <ProductAsloLike></ProductAsloLike>}
            <YourCart></YourCart>
            {data && <Footer></Footer>}



        </>
    );
}

export default ProductDetail;
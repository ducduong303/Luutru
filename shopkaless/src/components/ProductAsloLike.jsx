import React, { useContext, useState, useEffect } from 'react';
import { ContextProvider } from '../context/Context';
import CustomTitle from './CustomTitle';
import { Link } from 'react-router-dom';

function ProductAsloLike(props) {
    const { products ,FormatSlug,addToCart,user} = useContext(ContextProvider);
    const [product, setProduct] = useState([])
    const [count,setCount] = useState(1);

    const getRelatedProduct = () => {
        const relatedProduct = products.slice(0, 4)
        setProduct(relatedProduct)
    }

    useEffect(() => {
        getRelatedProduct()
    }, [])


    return (
        <>
            <CustomTitle title="You may also like" desc="Top view in this week"></CustomTitle>
            <div className="products">
                <div className="container">

                    <div className="products__content">
                        <div className="products__content-row">
                            {products.slice(0, 4).map((item, index) => {
                                return (
                                    <div className="products__content-box" key={index}>
                                        <div className="products__content-item">
                                            <div className="products__content-img">
                                                <Link to={`/product/${item.id}-${FormatSlug(item.title)}.html`}> <img src={item.url} alt="" /></Link>
                                                {item.status ? <span className="products__content-sticker" >{item.status}</span> : null}
                                            </div>
                                            <div className="products__content-desc">
                                                <h3 className="products__content-title">
                                                    <Link to="/"> {item.title}</Link>
                                                    <p>${item.price}.00</p>
                                                </h3>
                                                <button className="products__content-btn" onClick={() =>addToCart(item,count,item.size[0],user.uid)}>Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}

export default ProductAsloLike;
import React, { useContext, useState } from 'react';
import { ContextProvider } from '../context/Context';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import CustomTitle from './CustomTitle';
function Products(props) {
    const { load, products, FormatSlug, addToCart, user } = useContext(ContextProvider)
    const [visible, setVisible] = useState([8]);
    const [count, setCount] = useState(1);
    const [displayButtonLoad, setDisplayButtonLoad] = useState(true)
    const ShowProducts = () => {
        setVisible(prev => prev + 4);
        setDisplayButtonLoad(false)
    }

    return (
        <>
            <CustomTitle title="TRENDING" desc="Top view in this week"></CustomTitle>
            <div className="products">
                <div className="container">
                    {load ? <Loading></Loading> :
                        <div className="products__content">
                            <div className="products__content-row">
                                {products.slice(0, visible).map((item, index) => {
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
                                                    <button className="products__content-btn" onClick={() => addToCart(item, count, item.size[0], user.uid)}>Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="products__loadMore">
                                {displayButtonLoad && <button onClick={ShowProducts}>Load More</button>}
                            </div>
                        </div>

                    }

                </div>

            </div>
        </>
    );
}

export default Products;
import React from 'react';
import Home from '../components/Home';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
import PageProduct from '../components/PageProduct';
import PageBlog from '../components/PageBlog';
import Contact from '../components/Contact';
import Profile from '../components/Profile';
const Routers = [
    {
        path: "/",
        exact: true,
        component: () => <Home></Home>
    },
    {
        path: "/product/:id-:slug",
        exact: true,
        component: ({ match }) => <ProductDetail match={match}></ProductDetail>
    },
    {
        path: "/products",
        exact: true,
        component: ({ match }) => <PageProduct></PageProduct>
    },
    {
        path: "/blog",
        exact: true,
        component: ({ match }) => <PageBlog></PageBlog>
    },
    {
        path: "/contact",
        exact: true,
        component: ({ match }) => <Contact></Contact>
    },
    {
        path: "/profile",
        exact: true,
        component: ({ match }) => <Profile></Profile>
    },
    {
        path: "/cart",
        exact: true,
        component: () => <Cart></Cart>
    },
]

export default Routers;
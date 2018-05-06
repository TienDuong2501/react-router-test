import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/about';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import Products from './components/products';

//tach cai route ra rien 1 file
const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home/>
    },
    {
        path : '/about',
        exact : false,
        main : () => <About/>
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound/>
    },
    {
        path : '/product',
        exact : false,
        main : ({match}) => <Products match = {match}/>
        // truyen vao props.va gia tri props chinh la gia tri cua tham so truyen vao
        //myc dich cua truyen doi tuong match a lay tham so tren thanh URL
    }
]

export default routes;
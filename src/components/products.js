import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './product';

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                slug : 'iphone',
                name: 'iphone X',
                price: 3500000
            },
            {
                id: 2,
                slug : 'sumsung',
                name: 'Sam Sung',
                price: 4500000
            },
            {
                id: 3,
                slug : 'huawei',
                name: 'Huawei',
                price: 3000000
            },
        ];

        var match = this.props;
        console.log(match);
        var url = match.url;
        var result = products.map((product, index) => {
            return (

                <NavLink key={index} to={`${url}/${product.slug}`}>
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        })
        return (
            <div className="container">
                <h1>This is about</h1>


                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                        <ul className="list-group">
                            {result}
                        </ul>

                    </div>
                </div>
                
                <div className="row">
                {/* :slug la de lay tham so slug tren thanh URL */}
                {/* route nay la noi de hien thi noi dung tren trang nay va tai vi tri nay */}
                    <Route path="/products/:slug" Component={Product}/>
                </div>
                

            </div>
        );
    }
}

export default Products;

import React, { Component } from 'react';
import {Link, NavLink, Route} from 'react-router-dom';

// tao bien de do menu dong.thay vi fix cung menu.nay mai co the lay menu tu tren database
const menus = [
    {
        name: 'trang chu',
        to : '/',
        exact : true
    },
    {
        name: 'gioi thieu',
        to : '/about',
        exact : false
    },
    {
        name: 'lien he',
        to : '/contact',
        exact : false
    },
    {
        name: 'san pham',
        to : '/products',
        exact : false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        // khai bao route o day co nghia day la noi hien thi noi dung cua route nay.ban co the hien thi noi 
        // dung o mot khai khac bang cach khai bao route o mot noi khac
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            // neu trung khop thi them vao class active va abc
            var active = match ? 'active abc' : '';
            return (
                <li className={`my-li ${active}`}>
                    {/* <NavLink to={to} className="my-link">{label}</NavLink> */}
                    <Link to={to} className="my-link">
                        {label}
                    </Link>
                    {/* khi dung custom link thi nen dung the Link thay vi dung NavLink */}
                </li>
            );
        }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {/* <NavLink activeClassName="active" exact to="/" className="my-link">Trang Chu</NavLink> */}
                    {/* <MenuLink label="Trang chu" to="/" activeOnlyWhenExact={true} /> */}
                    {/* <NavLink activeClassName="active" to="/about" className="my-link">Gioi Thieu</NavLink> */}
                    {/* <MenuLink label="gioi thieu" to="/about" activeOnlyWhenExact={false} /> */}
                    {/* <NavLink activeClassName="active" to="/contact" className="my-link">Lien He</NavLink> */}
                    {/* <MenuLink label="lien he" to="/contact" activeOnlyWhenExact={false} /> */}
                    {/* thay vi dung menus fix cung thi ta nen dung menu dong nhu sau */}
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (<MenuLink 
                key={index} 
                label={menu.name} 
                to={menu.to} 
                activeOnlyWhenExact={menu.exact} />
            )});
        }

        return result
    }
}

export default Menu;

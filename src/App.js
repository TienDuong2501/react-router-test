import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/about';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';
import Menu from './components/Menu';
import routes from './route';

//custom link


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* menu */}
                    {/* thay vi viet tat ca cac route vao cung 1 file app.js nhu nay thi chung ta nen tach thanh nhung file nho */}
                        <Menu />
                    {/* content */}
                    <Switch>
                        {/* truoc khi chi afile */}
                        {/* <Route path="/" exact Component={Home} />
                        <Route path="/about" Component={About} />
                        <Route path="/contact" Component={Contact} />
                        <Route Component={NotFound} /> */}
                        {this.showContentMenu(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }
    showContentMenu = (route) => {
        var result = null;
        if(routes.length > 0) {
            result = route.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        Component={route.main}
                    />
                );
            });
        }
        return result;
    }
}

export default App;

import React, { Component } from 'react'
import Header from './components/header'
import{HashRouter as Router,Route}from 'react-router-dom'
import Home from './container/Home/Home'
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import Context from './container/Home/Context';
export default class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <Header/>
                <div className='main'>
                    <div className='content'>
                        <Route path='/home' component={Home}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/topics' component={Context}/>
                    </div>
                    <div className="sider">
                        {/* <img src="./components/makl.jpg" alt="" style={{width:'270px',height:'500px',float:'left'}}/> */}
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}

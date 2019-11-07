import React, { Component } from 'react'
import{HashRouter as Router,Route}from 'react-router-dom'
import Home from './Home/Home'
import {Link} from 'react-router-dom';
export default class About extends Component {
    render() {
        return (
                <div className="login-m">
                    <form className="login-in">
                        <p>用户名<input type='' style={{width:"240px",height:"50px"}}/></p>
                        <p style={{marginLeft:"18px"}}>密码<input type='' style={{width:"240px",height:"50px",marginTop:"20px"}}/></p>
                        <button style={{width:"100px",height:"30px",margin:"20px 60px"}}>
                        <Link to='/home/all'>登录</Link>
                        </button>
                    </form>
                    <div>
                        <Route path='/home/all' component={Home}/>
                    </div>
                </div>
                
        )
    }
}
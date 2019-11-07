import React, { Component } from 'react'
import{HashRouter as Router,Route}from 'react-router-dom'
import All from './All'
import Good from './Good'
import Share from './Share'
import Ask from './Ask'
import Job from './Job'
import {Link} from 'react-router-dom';
import './home.css'
export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <Router>
                <div className="top">
                    <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/ask'}>问答</Link>
                    <Link to={url+'/job'}>招聘</Link>
                </div>
                <div>
                    <Route path={`${url}/all`} component={All}/>
                    <Route path={`${url}/good`} component={Good}/>
                    <Route path={`${url}/share`} component={Share}/>
                    <Route path={`${url}/ask`} component={Ask}/>
                    <Route path={`${url}/job`} component={Job}/>
                </div>
            </Router>
        )
    }
}
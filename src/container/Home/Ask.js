import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Ask extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            page:1
        }
    }


    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+this.state.page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }

    onChange=(e)=>{
        var page = e.target.innerHTML
        this.setState({
            page:page
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                            
                        <ul>
                            <li className='list'>
                                <img src={item.author.avatar_url} className="img1" alt=''></img>    
                                <p className='num'>{item.reply_count}/{item.visit_count}</p>
                                <Link className='title' to={'/topics/'+item.id}>{item.title}</Link>
                            </li>
                        </ul>
                    ))
                }

                <ul className="butts">
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <button className='butt' onClick={(e)=>this.onChange(e)}>{item}</button>
                    ))
                }
            </ul>
            </div>
        )
    }
}
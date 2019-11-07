import React, { Component } from 'react'

export default class Text extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],           
        }
        
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topic/'+this.props.location.pathname.toString().replace(/\/topics\//,""))
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    render() {
        
        return (
            <div> 
               {    
                <p dangerouslySetInnerHTML={{__html: this.state.data.content}}></p>
                    
                }
            </div>
        )
    }
}

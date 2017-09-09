import React from 'react'
import About from './about.js'

import Pages from './pages.js'

import '../assets/css/index.css'
export default class Article extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            articles:this.props.state.articles
        }
        console.log(this.state.articles)
    }
    componentDidMount(){

    }
    render(){
        return(
            <div className="left">
                {this.state.articles!='404'?this.state.articles.map(function(item,index){
                    return(
                        <div className="listitem" key={index}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.content.length>200?item.content.substring(0,200)+' ...':item.content}</div>
                        </div>
                    )
                }):{}}
                {this.state.articles.length>=this.props.state.num?<Pages state={this.props.state} type ={this.props.type}/>:''}
            </div>
        )
    }
}
import React from 'react'
import About from './about.js'

import '../assets/index.css'
export default class Article extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            articles:this.props.articles
        }
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className="left">
                {this.state.articles.map(function(item,index){
                    return(
                        <div className="listitem" key={index}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.content}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
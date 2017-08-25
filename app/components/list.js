import React from 'react'
import Article from './article.js'
import {BrowserRouter} from 'react-router-dom'

export default class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            articles:[],
            loading:true
        }
    }
    componentWillMount(){
        let params = location.pathname!='/' ? '?type='+location.pathname:''
        fetch('http://localhost:3000/api/articles'+params).then(res=>{
            if (res.ok) {
                res.json().then(obj=>{
                    this.setState({
                        articles:obj,
                        loading:false
                    })
                })
            }
        })
    }
    componentDidMount(){
        
    }
    render(){
        if(this.state.loading){
            return <div>loading....</div>
        }else{
            return(
                <Article articles={this.state.articles} />
            )
        }
    }
}
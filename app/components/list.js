import React from 'react'
import Article from './article.js'
import {BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router-dom'
import axios from 'axios';

import Pages from './pages.js'

export default class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            articles:[],
            loading:true,
            total:null,
            pn:null,
            num:8
        }
    }
    componentWillMount(){
        
    }
    componentWillReceiveProps(nextProps){
        this.loadArticle(nextProps)
    }
    conponentDidUpdate(){
        
    }
    loadArticle(props){
        props = props?props:this.props
        this.setState({loading:true})
        this.setState({pn:props.match.params.pn})
        let params= {
            type:props.match.params.type,
            pn:props.match.params.pn,
            num:this.state.num,
        }
        axios.get('http://localhost/react-webpack/api/search.php',
            {
                params:params
            })
            .then((res)=>{
                if(res.status == 200){
                    this.setState({articles:res.data.data})
                    this.setState({loading:false})
                    this.setState({total:res.total})
                }
            })
    }
    componentDidMount(){
        this.loadArticle();
    }
    render(){
        let type = this.props.match.params.type?this.props.match.params.type:''
        if(this.state.loading){
            return <div>loading....</div>
        }else{
            return(
                <div>
                    <Article state = {this.state} type={type}/>
                    {/* <Route path={`${this.props.match.url}/pn/:id`} articles={this.state.articles} component={Article} /> */}
                </div>
            )
        }
    }
}
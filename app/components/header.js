import React from 'react'
import {Link,BrowserRouter} from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            links:[
                {'link':'/','name':'首页'},
                {'link':'/article/life','name':'生活'},
                {'link':'/article/learn','name':'学习'},
                {'link':'/about','name':'关于作者'},
            ]
        }
    }
    render(){
        const style = {
            active:{
               borderBottom:'2px solid #ccc' 
            }
        }
        return(
            <header>
                <div className="mid">
                    <h1>智若雨</h1>
                    <div className="fr">
                        {
                            this.state.links.map((item)=>{
                                return <Link className="ripple" key={item.link} to={item.link}>{item.name} </Link>
                            })
                        }
                    </div>
                </div>
            </header>
        )
    }
}
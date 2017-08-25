import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            links:[
                {'link':'home','name':'首页'},
                {'link':'life','name':'生活'},
                {'link':'learn','name':'学习'},
                {'link':'about','name':'关于作者'},
            ]
        }
    }
    render(){
        return(
            <header>
                <div className="mid">
                    <h1>智若雨</h1>
                    <div className="fr">
                        {
                            this.state.links.map(function(item){
                                return <Link className="ripple" key={item.link} to={item.link}>{item.name} </Link>
                            })
                        }
                    </div>
                </div>
            </header>
        )
    }
}
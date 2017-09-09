import React from 'react'
import { Link } from 'react-router-dom'

export default class Test extends React.Component {
    constructor(props){
        super(props)
        this.total = props.state.toatl
        this.pn = props.state.pn
        this.num = props.state.num
        this.type = props.type?props.type+'/':''
        if(this.total<=this.num){
            console.log(this.total)
        }
    }
    render(){
        return(
            <div className="pages">
                <Link className="prev" to={`${this.props.url}/pn/1`}>前</Link>
                <Link to={`/article/${this.props.type?this.props.type+'/':''}pn/1`}>1</Link>
                <Link to={`/article/${this.props.type?this.props.type+'/':''}pn/2`}>2</Link>
                <Link to={`/article/${this.props.type?this.props.type+'/':''}pn/3`}>3</Link>
                <Link to={`/article/${this.props.type?this.props.type+'/':''}pn/4`}>4</Link>
                <Link className="prev" to={`${this.props.url}/pn/1`}>后</Link>
            </div>
        )
    }
}
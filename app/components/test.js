import React from 'react'

export default class Test extends React.Component {
    getInitialState(){
        return {
            show:true
        }
    }
    render(){
        return(
            <div style={this.state.show?'show':'hide'}>test</div>
        )
    }
}
import React from 'react'

export default class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const style={
            footer:{
                height:80+'px',
                lineHeight:80+'px',
                textAlign:'center',
                fontSize:20+'px',
                bottom:0,
                width:'100%',
                backgroundColor:'#1a1818',
                borderTop:'1px solid #eee',
                color:'#666',
                marginTop:10+'px'
            }
        }
        return(
            <div style={style.footer}>footer</div>
        )
    }
}
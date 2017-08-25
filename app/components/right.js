import React from 'react'

export default class Right extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hotArticle:[
                {
                    title:'hot'
                }
            ]
        }
    }
    render(){
        return(
            <div className="right">
                <div className="signature">狗不理</div>
                <div className="right-item">
                    <div className="right-title">热门文章</div>
                    <div>
                        {this.state.hotArticle.map(obj=>{
                            obj.title
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
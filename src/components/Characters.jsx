import React, { Component } from 'react'

class Characters extends Component {
    render() {
        const {name,title,img} = this.props
        return (
                <div className="card mx-1 my-2 col-6" style={{width: '33%'}}>
                    <div className="img-container" style={{backgroundImage: `url('${img}')`}}></div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{title}</p>
                    </div>
                </div> 
        )
    }
}

export default Characters
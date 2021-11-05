import React, { Component } from 'react'

class Characters extends Component {
    render() {
        const {name,title,img,favorite} = this.props
        return (
                <div className="card mx-1 my-2" style={{width: '20%'}}>
                    <div className="img-container" style={{background: `url('${img}')no-repeat center/cover`, height : '280px'}}></div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{title}</p>
                        <div className="d-flex justify-content-center align-items-end mb-2" style={{height : '40%'}}>
                        <button className='btn btn-outline-warning' >Favorite ?</button>
                        </div>
                    </div>
                </div> 
        )
    }
}

export default Characters
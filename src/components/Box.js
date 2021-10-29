import React from "react"

class Box extends React.Component {
  render() {

    const { color, icon, unit, value, type, change, min, max } = this.props

    // console.log(this.props)

    return (
      <div className="box col-sm-3 col-6">
        <span className="material-icons" style={{ fontSize: "100px", color:`${color}` }}>
          {icon}
        </span>
        <p>{value}{unit}</p>
          {icon !== 'local_drink' ? <input type={type} value={value} onChange={change} min={min} max={max}/> : ''}
      </div>
    )
  }
}

export default Box

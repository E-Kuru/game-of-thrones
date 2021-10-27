import React from "react"

import "./styles/global.css"
import Box from "./components/Box"


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      water : 1.5, 
      heart : 120, 
      temperature : -10, 
      steps : 3000, 
    }
  }

  onHeartChange = e => {
    this.calculateWater()
    this.setState({
      heart : this.state.heart = e.target.value
    })
  }
  onStepsChange = e => {
    this.calculateWater()
    this.setState({
      steps : this.state.steps = e.target.value
    })
  }
  onTempChange = e => {
    this.calculateWater()
    this.setState({
      temperature  : this.state.temperature = e.target.value
    })
  }

  calculateWater = () => {
    if(this.state.temperature >= 20){
      let temp = this.state.temperature - 19
      this.setState({
        water : this.state.water += (temp * 0.02),
      })
    }
    else if(this.state.heart > 120){
      let heart = this.state.heart - 119
      this.setState({
        water : this.state.water += (heart * 0.0008),
      })
    }
    else if(this.state.steps > 10000){
      let steps = this.state.steps - 9999
      this.setState({
        water : this.state.water += (steps * 0.00002),
      })
    }
  }

  
  render() {
    
    const tempMin = -20
    const tempMax = 40
    const heartMin = 80
    const heartMax = 180
    const stepsMin = 0
    const stepsMax = 50000
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box 
            icon="local_drink" 
            color="#3A85FF"
            value={this.state.water}
            unit="L" />

          {/* Steps */}
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            type='range'
            min={stepsMin} 
            max={stepsMax}
            change={this.onStepsChange}/>
          
          {/* Heart */}
          <Box 
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            type='range'
            min={heartMin}
            max={heartMax}
            change={this.onHeartChange}/>
          
          {/* Temperature */}
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C" type='range'
            min={tempMin}
            max={tempMax}
            change={this.onTempChange}/>
        </div>
      </div>
    )
  }
}

export default App
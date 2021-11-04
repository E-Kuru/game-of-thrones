import React from 'react'

import Characters from './components/Characters'

class App extends React.Component {
  constructor(){
    super ()

    this.state = {
      characters : []
    }
  }

  componentDidMount (){

    fetch("https://thronesapi.com/api/v2/Characters")
    .then( res => res.json())
    .then( res => {
      this.setState({ characters : res})
    })
  }

	render() {
    console.log(this.state.characters);
		return(
      <>
			<h1>Game of thrones</h1>
      {this.state.characters.map(e => (
        <div className="container mt-5 col-12">
            <div className='d-flex flex-wrap col-12 justify-content-center'>
                <Characters name={e.fullName} title={e.title} img={e.imageUrl}/>
            </div>    
        </div>    
      ))}
      </>
		)
	}
}

export default App
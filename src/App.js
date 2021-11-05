import React from 'react'

import Characters from './components/Characters'

class App extends React.Component {
  constructor(){
    super ()

    this.state = {
      characters : []
    }
    this.handleFavorite = this.handleFavorite.bind(this)
  }

  componentDidMount (){

    fetch("https://thronesapi.com/api/v2/Characters")
    .then( res => res.json())
    .then( res => {
      this.setState({ characters : res})
    })
  }

  handleFavorite (){

  }

	render() {
    console.log(this.state.characters);
		return(
      <>
			<h1>Game of thrones</h1>
      <div className="container mt-5 col-12">
            <div className='d-flex flex-wrap justify-content-center'>
              {this.state.characters.map(e => (
                <Characters name={e.fullName} title={e.title} img={e.imageUrl} favorite={this.handleFavorite}/>
                ))}
            </div>    
      </div>    
      </>
		)
	}
}

export default App
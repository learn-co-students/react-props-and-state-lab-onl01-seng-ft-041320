import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChange = (e) => {
    let filter = e.target.value
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  handleClick = () => {
    if (this.state.filters.type === 'all') {
      fetch(`/api/pets`).then(resp => resp.json()).then(obj => this.setState({pets: obj}))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(resp => resp.json()).then(obj => this.setState({pets: obj}))
    }  
  }

  onAdoptPet = (id) => {
    let updatePets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    })
    this.setState({pets: updatePets});
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.handleClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

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

  onChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    let fetchURL = ""
    if (this.state.filters.type === "all"){
      // set the fetchURL to all
      fetchURL = "/api/pets"
    }
    else {
      fetchURL = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(fetchURL)
    .then( (resp) => resp.json() )
    .then( (pets) => {
      this.setState({
        pets: pets
      })
    })
  }

  adoptPet = (id) => {
    let selectedPet = this.state.pets.find( (pet) => pet.id === id )
    selectedPet.isAdopted = true

    this.setState( prevState => {
      pets: [...prevState.pets.filter( (pet) => pet.id !== selectedPet.id ), selectedPet]
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

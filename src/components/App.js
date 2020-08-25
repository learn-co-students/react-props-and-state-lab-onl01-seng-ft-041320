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

  onChangeType = (event) => {
    this.setState({filters: {type: event.target.value}})
  }

  onFindPetsClick = () => {
    fetch(`/api/pets${this.state.filters.type === 'all' ? "" : "?type=" + this.state.filters.type}`)
    .then(response => response.json())
    .then(object => {
      this.setState({
        ...this.state,
        pets: object
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  onAdoptPet = (id) => {
    let newPets = this.state.pets
    newPets.find(pet => pet.id === id)["isAdopted"] = true
    this.setState({
      ...this.state,
      pets: newPets
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

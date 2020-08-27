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

  //handle change of filter type
  changeType = ({ target: { value } }) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value 
      }
    })
  }

  //fetch relevant pets based on currently set filter
  fetchPets = () => {
    let route = '/api/pets'
    if (this.state.filters.type !== 'all') {
      route += `?type=${this.state.filters.type}`
    }

    fetch(route)
      .then(response => response.json())
      .then(pets => {
        this.setState({
          pets: pets
        })
      })
  }

  //set adpoted status to true for pet chosen for adoption
  adoptPet = (petID) => {
    // const adoptedPet = this.state.pets.find(pet => pet.id === petID)
    // this.setState({
    //   pets: [
    //     ...pets,
    //     [adoptedPet]: {
    //       isAdopted: true
    //     }
    //   ]
    // })

    const pets = this.state.pets.map(p => {
      return p.id === petID ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

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
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  };


  fetchPets = () => {
    // console.log(this.state.filters.type)
    // console.log(this.state.pets)
    let endpoint = '/api/pets';
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(pets => this.setState({pets: pets}))
      // .catch(alert("Something went wrong"))
  };

  onAdoptPet = petId => {
    
    const pets = this.state.pets.map(pet => {
      if (pet.id === petId) {
          return {...pet, isAdopted: true}
        //deepcopy
      }
      else {
        return pet
      }
    })
    this.setState({
      pets: pets
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
              <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    //constructor and super are abstracted out
  

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  };
//event gets triggered when the user changes the selection of the animal

  fetchPets = () => {
    // console.log(this.state.filters.type)
    // console.log(this.state.pets)
    let endpoint = '/api/pets';
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }
//if the current state of the type of filter is not equal to all 
//add this to the end point
    fetch(endpoint)
      .then(res => res.json())
      // .then(json => console.log(json))
      //this would work in active server working with own data file here
      .then(pets => this.setState({pets: pets}))
      // .catch(alert("Something went wrong"))
  };

  onAdoptPet = petId => {
    //petId comes from the pet.id key that is mapped out in pet browser
    //then passed in to the pet component as this.props.pet.id
    console.log(petId)
    //setting a variable equal to mapping of the state of the pets
    //which is all pets
    //we want to get all pets and look through for their ids
    const pets = this.state.pets.map(pet => {
      if (pet.id === petId) {
          return {...pet, isAdopted: true}
        //deepcopy
        //since it is not an array make a copy of the object
        //change the attribute isAdopted to equal true
      }
      else {
        return pet
        //if the pet.id does not equal petId
        //return that pet instance
      }
    })
    this.setState({
      pets: pets
    })
    //set the state of the pets to the copy of the pets
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

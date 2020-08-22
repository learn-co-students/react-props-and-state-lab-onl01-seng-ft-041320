import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  

  render() {
    const showPets = this.props.pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} /> )
    //this line above is saving a variabele to the pets mapped out and then pasing
    //the values to the child component of Pet and passing in all pets
    //giving the pets component key of pet.id and also passing in the function
    //onAdoptPets
    return <div className="ui cards">{showPets}</div>
  }
}

export default PetBrowser

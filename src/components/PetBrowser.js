import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPet = ( petData ) => {
    return <Pet pet={petData} onAdoptPet={this.props.onAdoptPet} />
  }

  renderAllPets = () => {
    return this.props.pets.map( this.renderPet )
  }

  render() {
    return <div className="ui cards">
      {this.renderAllPets()}
    </div>
  }
}

export default PetBrowser

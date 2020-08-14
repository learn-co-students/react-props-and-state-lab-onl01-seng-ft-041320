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

  onChangeType = ({target: {filter}}) => {
    this.setState({
      filters: {...this.state.filters, type: filter}
    })
  }

  onFindPetsClick = () => {
    let site= '/api/pets';

    if (this.state.filters.type !== 'all') {
      site += `?type=${this.state.filters.type}`;
    }

    fetch(site)
      .then(res => res.json())
      .then(pets => this.setState({pets: pets}))
}

  onAdoptPet = (id) => {
    const all= this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p;
    });
    this.setState({pets: all})
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
              onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets= {this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

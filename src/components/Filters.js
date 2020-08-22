import React from 'react'

class Filters extends React.Component {

  pickPet = (event) => {
    // event.preventDefault();
    this.props.onChangeType(event)
  }
  
  searchFor = () => {
    
    // event.preventDefault();
    this.props.onFindPetsClick()
    // this.props.onClick
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field" >
          <select name="type"  id="type" onChange={this.pickPet}  >
            <option value="all" >All</option>
            <option value="cat" >Cats</option>
            <option value="dog" >Dogs</option>
            <option value="micropig" >Micropigs</option>
          </select>
        </div>

        <div className="field" >
          <button className="ui secondary button" onClick={this.searchFor}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters

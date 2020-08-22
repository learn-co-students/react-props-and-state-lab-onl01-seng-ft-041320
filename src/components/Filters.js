import React from 'react'

class Filters extends React.Component {

  pickPet = (event) => {
    // event.preventDefault();
    //same as below, except this is when the user changes the animal type
    this.props.onChangeType(event)
  }
  
  searchFor = () => {
    //when button is clicked it routes to here
    //which then routes to the parent components property function
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

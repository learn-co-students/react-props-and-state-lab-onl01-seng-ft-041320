import React from 'react'

class Pet extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}{' '}
            {this.props.pet.gender === "male" ? '♂' : '♀'}
            {/* another ternary operator line 11 the empty strings is giving space
            between gender and name, line 12 checks to see if the gender is male
            if it is it puts that symbol, if it's false it puts the female symbol */}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        
        <div className="extra content">
        {/* creating ternary operator to see if the pet 
        is not adopted let them be adopted and to stay adopted 
        since the already adopted button is disabled it can't be unclicked*/}  
          {this.props.pet.isAdopted
          ? <button className="ui disabled button">Already adopted</button>
          : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          //notice here that the pet.id is being passed to the function of onAdopePet
          //using this props coming from the parent class of PetBrowser
          //this is why we created the function on the App.js to accept an id of petId
          //know that it can be named whatever you want so make it make sense when calling
          //it on App.js but here it has to be pet.id as that is how the property is known
          //here, but on App.js it only cares it gets name something.
          }
        </div>
      </div>
    )
  }
}

export default Pet

import React from 'react'

const AddPersonForm = ( {addPerson, handleNameChange, handleNumberChange}) => {

    return(
      <form onSubmit={addPerson}>
            <div>
              name: <input onChange={handleNameChange} />
              <br></br>
              number: <input onChange={handleNumberChange} />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
    )
  }

  export default AddPersonForm
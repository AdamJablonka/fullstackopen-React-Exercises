import { useState } from 'react'

// Persons componenent
const Persons = ( {personsToShow} ) => {
  return(
    <div>
      {personsToShow.map(person =>
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

// SearchFilter component
const SearchFilter = ( {changeHandler} ) => 
    <form> 
      filter shown with <input onChange={changeHandler} /> 
    </form>

// AddPersonForm componenet
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
 
// Person Component
const Person = ( {person} ) => {
  return(
    <p>{person.name} ({person.number})</p>
  )
}

// Root App Component
const App = () => {
  const hasEqual = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i].name === arr2[0].name)
        return true
    }
    return false
  } 

  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '555-5555'
    }
  ])
  // State declarations
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchVal, setSearchVal] = useState('')
  const [showAll, setShowAll] = useState(true)

  // event handlers
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = [
      {
        name: newName,
        number: newNumber
      }
    ]
      hasEqual(persons, personObject)
        ? alert(`${newName} has already been added.`)
        : setPersons(persons.concat(personObject))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchValChange = (event) => {
    setSearchVal(event.target.value)
    event.target.value.length > 0
    ? setShowAll(false)
    : setShowAll(true)
  }

  const personsToShow = showAll 
  ? persons 
  : persons.filter(person => person.name.toLowerCase().includes(searchVal.toLowerCase()))

  return (
    <div>
        <h2>Phonebook</h2>
        < SearchFilter changeHandler={handleSearchValChange} />
        <h2>add a new</h2>
        <AddPersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
        <h2>Numbers</h2>
        <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
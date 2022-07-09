import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import AddPersonForm from './components/AddPersonForm'
import SearchFilter from './components/SearchFilter'

// Root App Component
const App = () => {
  const hasEqual = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i].name === arr2[0].name)
        return true
    }
    return false
  } 
  
  const [persons, setPersons] = useState([])
  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log('promise fulfilled')
        setPersons(res.data)
      })
  }

  useEffect(hook, [])

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

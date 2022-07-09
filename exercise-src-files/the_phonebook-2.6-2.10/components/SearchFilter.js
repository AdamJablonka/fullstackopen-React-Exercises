import React from 'react'

const SearchFilter = ( {changeHandler} ) => 
    <form> 
      filter shown with <input onChange={changeHandler} /> 
    </form>

export default SearchFilter
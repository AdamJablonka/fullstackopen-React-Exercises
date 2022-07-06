import React from 'react'

const Course = ({ course }) => {
    return(
      <div>
        <Header name={course.name} />
        <Content course={course} />
      </div>
    )
  }

  const Header = ({ name }) => <h1> {name} </h1>
  
  const Part = ({ myKey, parts }) => {
    return (
      <p key={myKey}>{parts.name} {parts.exercises}</p>
    )
  }
  
  const Content = ({ course }) => {
    const parts = course.parts
    const total = parts.reduce(
      (sum: any, part: { exercises: any }) => sum + part.exercises
    , 0)
    
    return(
      <div>
          {parts.map(parts =>
            <Part key={parts.id} parts={parts}/>  
          )}
        <p><strong>total of {total} exercises</strong></p>
      </div>
    )
  }

export default Course
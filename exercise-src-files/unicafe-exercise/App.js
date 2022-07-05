import  { useState } from 'react'

const Header = ( {header} ) => (
  <div>
    <h1>
      {header}
    </h1>
  </div>
)

const StatisticLine = (props) => {
  return(
        <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const Statistics = ( {good, neutral, bad, all, positive} ) => {
  if(all === 0)
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )

  return(
  <table>
    <tbody>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value={all} />
    <tr><td>positive:</td><td>{positive}%</td></tr>
    </tbody>
  </table>
  )
}

const Button = ( {text, clickHandler}) => (
  <button onClick={clickHandler}>{text}</button>
)

// App root component
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState((good + neutral + bad))
  const [positive, setPositive] = useState(good / all)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setPositive(((good + 1) / (all + 1)) * 100) 
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setPositive(((good) / (all + 1)) * 100) 
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setPositive(((good) / (all + 1)) * 100) 
  }

  return(
    <div>
      <Header header="give feedback" />
      <Button clickHandler={handleGoodClick} text="good" />
      <Button clickHandler={handleNeutralClick} text="neutral" />
      <Button clickHandler={handleBadClick} text="bad" />
      <Header header={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} positive={positive} />
    </div>
  )
}

export default App

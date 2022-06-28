import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [gitHubName, setGitHubName] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/brentonring')
    .then(res => res.json())
    .then(data => {
      setGitHubName(data.name)
    })
  }, [])

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
      <a href='https://github.com/brentonring'><button>Link to GitHub Profile</button></a>
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // useEffect(() => {
  //   axios.get('/api/students').then(res => console.log(res));
  // }, [])
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    
    axios.get(`/api/${input}`).then(response => console.log(response.data)
    )
  }

  return (
    <div className="App">
      <h1>Helloooo</h1>
      <form method="GET" onSubmit={handleSubmit}>
        <input type="text" name="school" value={input} placeholder="School" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

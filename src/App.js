import { useState } from 'react';
import './App.css';
import { AdviceGenerator } from './components/AdviceGenerator';

function App() {
  const [advice, setAdvices] = useState({})
  const [loading, setLoading] = useState(false)


  const handleCallAPI = () => {
    setLoading(true)
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((json) => {
        let advice = {
          id: json.slip.id,
          advice: json.slip.advice
        }
        setAdvices(advice)
        setLoading(false)
      })
    }


  return (
    <div className="App"> 
    {
      !loading ? <AdviceGenerator  id = {advice?.id} advice = {advice?.advice} handleCallAPI={handleCallAPI} /> : <h2 style = {{color: "white", margin: "100px"}}>Loading...</h2>
    }
    </div>
  );
}

export default App;
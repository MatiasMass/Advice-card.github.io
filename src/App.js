import { useState } from 'react';
import './App.css';
import { AdviceGenerator } from './components/AdviceGenerator';

function App() {
  const [advice, setAdvices] = useState({})
  const [loading, setLoading] = useState(false)


  const handleCallAPI = () => {
    setLoading(true)
    fetch("https://api.adviceslip.com/advice%22)
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
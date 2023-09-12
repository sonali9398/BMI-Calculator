import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let bmiCalc = (e) =>{
    e.preventDefault()
    if (weight ===0 || height === 0){
      alert('Plesse enter valid number')
    }
    else{
      let bmi = (weight/((height)*(height))*703)
      setBmi(bmi.toFixed(1))

      if (bmi < 18){
        setMessage('You are underweight');
      }
      else if (bmi >= 18 && bmi< 25){
        setMessage('Your BMI is Normal');
      }
      else if (bmi >= 25 && bmi < 30){
        setMessage('You are overweight');
      }
      else if (bmi >= 30 && bmi < 35){
        setMessage('You are obese');
      }
      else{
        setMessage('You are extremely obese');
      }
    }
      
  }
  //relaod
  let reload = () =>{
    window.location.reload()
  }
  return (
    <div className='app'>
      <div className='container'>
        <h1 className='center'>BMI Calculator</h1>
        <form onSubmit={bmiCalc}>
          <div>
            <label>Weight(lbs)</label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in)</label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

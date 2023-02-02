import video from './video-bored.mp4'
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [bored, setBored] = useState('I am bored');
  const [advice,setAdvice] = useState (bored);


  useEffect(()=>{
    const getAdvice = async()=>{
     const response = await fetch ('https://www.boredapi.com/api/activity/');
     const data = await response.json()
    setBored (data.activity)
      }
    getAdvice()

}, [advice])

const newAdvice = (e)=>{
setAdvice (bored);
}

  return (
    <div >

<div className='container'>
        <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
<h1>Bored? Don't know what to do?</h1>
<h2>We have a suggestion for you:</h2>
<p>{advice}</p>
<button onClick = {newAdvice} >Unbore Yourself</button>
</div>

    </div>
  );
}

export default App;

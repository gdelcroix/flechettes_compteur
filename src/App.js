import './App.css';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ScoreIndicator from './Components/scoreIndicator';
import 'bootstrap/dist/css/bootstrap.min.css';
import dart from './Assets/dart.png';

function App() {
  const [scoreToReach, setScoreToReach] = useState(501);
  const [score, setScore] = useState(501);
  const [multiplicator, setMultiplicator] = useState(1);
  const [darts, setDarts] = useState(3);
  const [laps, setLaps] = useState(0);
  const [oldScore, setOldScore] = useState(0);

  const handleClick = (number) => {
    if (darts - 1 === 0) {
      setDarts(3);
      setLaps(laps + 1);
      if (score - (number * multiplicator) >= 0) {
      setOldScore(score);}
    }
    else{
      setDarts(darts - 1);
    }
    if (number === 25 && multiplicator === 3) {
      alert("TRICHEUR !!!!!");
      setMultiplicator(1);
    }else if((score -(number * multiplicator)) < 0){
      alert('Tour terminé !!');
      setScore(oldScore);
      setDarts(3);
      setLaps(laps + 1);
      setMultiplicator(1);
    } else if((score -(number * multiplicator)) === 0){
      setScore(score - (number * multiplicator));
      setMultiplicator(1);
      alert("Victoire !!!!");
    }else{
      setScore(score - (number * multiplicator));
      setMultiplicator(1);
    }
  console.log("oldscore :" + oldScore, "score :" + score);  
  }

  const replay = () => {
    setScore(scoreToReach);
    setScoreToReach(501);
    setMultiplicator(1);
    setDarts(3);
    setLaps(0);
  }


  return <>
   <Container className='d-flex flex-column align-items-center'>
   <h1>Flechettes</h1>
      <div className='d-flex flex-column col-9 align-items-center'>
      <ScoreIndicator maxValue={scoreToReach} value={score} /></div>
      <div className='d-flex justify-content-center'>
        <h5>Tours : {laps}</h5>
      {darts === 3 && <>
        <img src={dart} alt='flechette' className='dart-img'/>
        <img src={dart} alt='flechette' className='dart-img'/>
        <img src={dart} alt='flechette' className='dart-img'/>
      </>}  
      {darts === 2 && <>
        <img src={dart} alt='flechette' className='dart-img'/>
        <img src={dart} alt='flechette' className='dart-img'/>
      </>}
      {darts === 1 && <>
        <img src={dart} alt='flechette' className='dart-img'/>
      </>}
      </div>
      {score === 0 ? <> {}
        <Button variant='primary' className='mt-3' onClick={replay}>Rejouer</Button> 
        
      </> : <>
        {}          
      <div className='d-flex justify-content-between col-6 mt-3'>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(1)}}>1</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(2)}}>2</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(3)}}>3</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(4)}}>4</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(5)}}>5</Button>
    </div>
    <div className='d-flex justify-content-between col-6 mt-3'>
      <Button variant='light' className='col-2' onClick={() => {handleClick(6)}}>6</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(7)}}>7</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(8)}}>8</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(9)}}>9</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(10)}}>10</Button>
    </div>
    <div className='d-flex justify-content-between col-6 mt-3'>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(11)}}>11</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(12)}}>12</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(13)}}>13</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(14)}}>14</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(15)}}>15</Button>
    </div>
    <div className='d-flex justify-content-between col-6 mt-3'>
      <Button variant='light' className='col-2' onClick={() => {handleClick(16)}}>16</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(17)}}>17</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(18)}}>18</Button>
      <Button variant='dark' className='col-2' onClick={() => {handleClick(19)}}>19</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(20)}}>20</Button>
    </div>
    <div className='d-flex justify-content-between col-6 mt-3'>
      <Button variant='danger' className='col-2' onClick={() => {handleClick(0)}}>0</Button>
      <Button variant='light' className='col-2' onClick={() => {handleClick(25)}}>25</Button>
      <Button variant='dark' className='col-3' onClick={() => {setMultiplicator(2)}}>DOUBLE</Button>
      <Button variant='light' className='col-3' onClick={() => {setMultiplicator(3)}}>TRIPLE</Button>
    </div>
    </>}
    </Container>
</>;
}

export default App;

import './App.css';
import Lottery from './Lottery';
import LudoBoard from './LudoBoard';
import { sum } from './helper'; // ✅ Fixed casing

function App() {
  const n = 3; // or any number of digits you want in the ticket
  
  let winCondition=(ticket)=>{
    return ticket.every((num)=>num===ticket[0]);
  }
  return (
    <>
      <h1 className='head'>LOTTERY GAME EVENT</h1>
      <Lottery n={n} winCondition={winCondition} />
    </>
  );
}

export default App;

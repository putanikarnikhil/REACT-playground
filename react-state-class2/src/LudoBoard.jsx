import { useState } from "react"

export default function LudoBoard(){

    let [moves,setMoves]=useState({blue:0, red:0, yellow:0, Green:0});
    let[count,setCount]=useState(0);



    let updateblue=()=>{
        moves.blue +=1;
        // console.log(moves.blue);
        setMoves({...moves});
    }

    return (
        <div style={{backgroundColor:"rgba(170, 173, 177, 1)"}}>
            <p>Game Begins!</p>
            <div className="board">
                <p >Blue moves = {moves.blue} </p>
                <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
                <p >Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}}>+1</button>
                <p >Green moves = {moves.Green}</p>
                <button style={{backgroundColor:"Green"}}>+1</button>      
                <p >Red moves = {moves.red} </p>
                <button style={{backgroundColor:"red"}}>+1</button>    

            </div>
        </div>
        
    )
}
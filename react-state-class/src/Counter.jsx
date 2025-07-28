import { useState } from "react";



export default function Counter(){
    
    let [count, setCount] = useState(0);

    function inCount(){

        setCount(Math.random());

    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </div>
    )



}
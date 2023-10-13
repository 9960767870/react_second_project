import React from 'react'
import { useState, useEffect } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);


    useEffect(() => {
        console.log(calculation)
        setCalculation(() => count * 2)
        console.log(calculation)
    }, [count])

    //   useEffect(() => {
    //     setTimeout(() => {
    //       setCount((count) => count + 1);
    //     }, 1000);
    //   }, []);
    return (

        <div>
            <p>Count is :{count}</p>

            <button onClick={() => setCount((c)=>c + 1)}>+</button>
            <p>Calculation: {calculation}</p>

        </div>
    )
}

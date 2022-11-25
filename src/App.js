import logo from './logo.svg';
import './App.css';

import React, {useState, useMemo, useReducer, useEffect, useCallback} from "react";

function App(){

    const [num, setNum] = useState(2020);
    const [random, setRandom] = useState(0)

    const totalPrimes = useMemo(() => {
        console.log("begin....")
        let total = 0;

        // 计算所有素o数之和
        for (let i = 1;i <= num; i++) {
            let boo = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    boo = false;
                    break;
                }
            }
            if (boo && i !== 1) {
                total++;
            }
        }
        console.log("end....")
        return total;

    }, [num]);

    const clickHandler01 = () => {
        setNum(num + 1);
    }

    const clickHandler02 = () => {
        setRandom(Math.floor(Math.random() * 100))
    }
    return (
        <div>
            {num} - {totalPrimes} - {random}

            <button onClick={clickHandler01}>num + 1</button>
            <button onClick={clickHandler02}>random</button>
        </div>
    )
}


export default App;
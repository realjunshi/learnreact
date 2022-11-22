import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState} from "react";


function App() {
    const initCount = 0;
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(count + 1)
    }
    return (
        <>
            {/*<div onClick={clickHandler}>*/}
            <div>
                计数: {count}
                <button onClick={() => {setCount(initCount)}}>init</button>
                <button onClick={() => {setCount(count + 1)}}>+1</button>
                <button onClick={() => {setCount(count - 1)}}>-1</button>
                <button onClick={() => {
                    // let num = 0;
                    for (let i = 0;i < 3;i++){
                        // num += 1
                        // 异步返回值累加
                        // setCount(count => count + 1)
                        setCount(count => {
                            return count + 1
                        })
                    }
                    // setCount(count + num)
                }}>test click</button>
            </div>

        </>
    );
}

export default App;

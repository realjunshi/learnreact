import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState} from "react";


function App() {
    const [count, setCount] = useState(0);

    function clickHandler(){
        setCount(count + 1);
    }

    const clickHandler2 = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div onClick={clickHandler}>
                计数: {count}
            </div>

            <div onClick={clickHandler2}>
                累计计数器: {count}
            </div>
        </>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState} from "react";

function App() {
    // setState执行渲染，如果是对象，里面的值必须是一个新对象
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(0)

    useEffect(() => {
        console.log('我执行了count=', count)
        return () => {
            console.log('componentWillUnmount')
        }
    }, [count])
    return (
      <>
          <h2>{count}</h2>
          <button onClick={onClick => (setCount(count + 1))}>改变-age</button>
          <h2>effect</h2>
          <button onClick={onClick => {setAge(age + 1)}}>改变-count</button>
      </>
    );
}


export default App;

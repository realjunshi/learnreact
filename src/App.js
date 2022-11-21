import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState} from "react";

function App() {
    // setState执行渲染，如果是对象，里面的值必须是一个新对象
    const [count, setCount] = useState(0)
    const [obj, setObj] = useState({name: 'jiang'})
    const [arr, setArr] = useState([1, 2, 3])
    const [fun, setFun] = useState(() => {return {age: 19}})

    return (
      <>
          <h2>{count}</h2>
          <button onClick={() => (setCount(count + 1))}>修改变量</button>
          <h2>{obj.name}</h2>
          <button onClick={() => (
              setObj(Object.assign({}, obj, {name: "long"}))
          )}>修改-对象</button>
          <h2>{arr}</h2>
          <button onClick={() => (
              setArr(() => {
                  arr.push(4)
                  return [...arr]
              })
          )}>修改-数组</button>
          <h2>{fun.age}</h2>
          <button onClick={() => (
              setFun(() => {
                  return {age: 24}
              })
          )}>修改-函数</button>
      </>
    );
}


export default App;

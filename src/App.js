import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState} from "react";


function App() {
    const [str, setStr] = useState('');
    const [arr, setArr] = useState(['react', 'koa'])

    // 获取输入的数据
    const inputChangeHandler = (eve) => {
        setStr(eve.target.value)
    }

    // 添加至头
    const addHeadHandler = (eve) => {
        setArr([str, ...arr]);
        setStr("")
    }

    // 添加至尾
    const addEndHandler = (eve) => {
        setArr([ ...arr, str]);
        setStr("")
    }

    // 删除头
    const delHeadHandler = (eve) => {
        let new_arr = [...arr]
        new_arr.shift();
        setArr(new_arr)
    }
    // 删除尾
    const delEndHandler = (eve) => {
        let new_arr = [...arr];
        new_arr.pop();
        setArr(new_arr)
    }

    const delByIndex = (eve) => {
        let index = eve.target.attributes.index.value;
        let new_arr = [...arr]
        new_arr.splice(index, 1)
        setArr(new_arr)
    }

    // 测试渲染逻辑
    const testRendering = () => {
        let str = 'a';
        console.log(Object.is(str, 'a'));

        let str2 = '18';
        console.log(Object.is(str2,  18));

        let obj = {name: 'a'}
        console.log(Object.is(obj, {name: 'a'}));

        let obj2 = {name: 'a'}
        let a = obj2;
        let b = obj2;
        console.log(Object.is(a, b))
    }

    return (
        <>
            <div>
                <input type='text' value={str} onChange={inputChangeHandler}/>
                <button onClick={addHeadHandler}>添加至头</button>
                <button onClick={addEndHandler}>添加至尾</button>
                <button onClick={delHeadHandler}>从头删除1项</button>
                <button onClick={delEndHandler}>从尾删除1项</button>
            </div>

            <ul>
                {arr.map(
                    (item, index) => {
                        return <li key={`item${index}`}>
                            学习{index} - {item}
                            <span index={index} onClick={delByIndex} style={{ cursor: 'pointer' }}>
                                删除
                            </span>
                        </li>
                    }
                )}
            </ul>

            <div>
                <button onClick={testRendering}>测试渲染</button>
            </div>
        </>
    );
}

export default App;

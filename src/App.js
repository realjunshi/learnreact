import logo from './logo.svg';
import './App.css';

import React, {useState, useContext, useReducer, useEffect, useCallback} from "react";
import Button from "./button";

function App(){
    const [age, setAge] = useState(34);
    const [salary, setSalary] = useState(7000);

    useEffect(() => {
        document.title = `Hooks - ${Math.floor(Math.random()*100)}`;
    });


    // 这种写法，每次都会把button组件重新渲染
    // const clickHandler01 = () => {
    //     setAge(age + 1)
    // }
    //
    // const clickHandler02 = () => {
    //     setSalary(salary + 1)
    // }

    const clickHandler01 = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const clickHandler02 = useCallback(() => {
        setSalary(salary + 1)
    }, [salary])

    return (
        <div>
            {age} - {salary}
            <Button label='Bt01' clickHandler={clickHandler01}>bt01</Button>
            <Button label='Bt02' clickHandler={clickHandler02}>bt02</Button>
        </div>
    )
}


export default App;
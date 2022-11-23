import logo from './logo.svg';
import './App.css';

import React, {useState, useContext, useReducer} from "react";
import CountContext from "./countContext";
import ComponentA from "./componentA";
import ComponentB from "./componentB";
import ComponentP from "./componentP";

const initialCount = 0;

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return state + action.param;
        case 'sub':
            return state - action.param;
        case 'mul':
            return state * action.param;
        case 'reset':
            return initialCount;
        default:
            console.log('what?');
            return state;
    }
}

function App(){
    // 定义全局变量count, 以及负责抛出修改事件的dispatch
    const [count, dispatch] = useReducer(reducer, initialCount);

    // 请注意: value = {{count, dispatch}} 是整个代码的核心，把将count,dispatch暴露给所有子组件
    return <CountContext.Provider value={{count, dispatch}} >
        <div>
            ParentComponent - count = {count}
            <ComponentA />
            <ComponentB />
            <ComponentP />
        </div>
    </CountContext.Provider>
}

export default App;
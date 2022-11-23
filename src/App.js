import logo from './logo.svg';
import './App.css';
import React, {useContext, useReducer} from "react";


// function reducer(state, action){
//     switch (action) {
//         case 'xx':
//             return xxx;
//         case 'xxx':
//             return xxxx;
//         default:
//             return xxxxx;
//     }
// }
//
// function Component(){
//     // 声明一个变量xxx，以及对应修改的xxx的dispatch
//     //将事件处理函数reducer和默认值initialValue作为参数传递给useReducer
//     const [xxx, dispatch] = useReducer(reducer, 0);
//
//     // 若想修改xxx的值，通过dispatch来修改
//     dispatch('xxx');
// }

function reducer(state, action){
    switch (action.type) {
        case 'add':
            return state + action.param
        case 'sub':
            return state - action.param
        case 'mul':
            return state * action.param
        default:
            console.log('what?')
            return state
    }
}

function getRandom() {
    return Math.floor(Math.random() * 10)
}

function App() {

    const [count, dispatch] = useReducer(reducer, 0);


    return (
        <div>
            {count}
            <button onClick={() => {dispatch({type: 'add', param: getRandom()})}}>add</button>
            <button onClick={() => {dispatch({type: 'sub', param: getRandom()})}}>sub</button>
            <button onClick={() => {dispatch({type: 'mul', param: getRandom()})}}>mul</button>
        </div>
    );
}

export default App;

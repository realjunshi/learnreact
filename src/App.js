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
    switch (action) {
        case 'add':
            return state + 1
        case 'sub':
            return state - 1
        case 'mul':
            return state * 2
        default:
            console.log('what?')
            return state
    }
}

function App() {

    const [count, dispatch] = useReducer(reducer, 0);


    return (
        <div>
            {count}
            <button onClick={() => {dispatch('add')}}>add</button>
            <button onClick={() => {dispatch('sub')}}>sub</button>
            <button onClick={() => {dispatch('mul')}}>mul</button>
        </div>
    );
}

export default App;

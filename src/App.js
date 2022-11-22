import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState} from "react";


function App() {
    const [person, setPerson] = useState({name: 'ling', age: 10})

    const nameHandler = (event) => {
        setPerson({...person, name: event.target.value})
    }

    const ageHandler = (event) => {
        setPerson({...person, age: event.target.value})
    }
    return (
        <>
            <div>
                {/*<h1>{person.name}</h1>*/}
                {/*<h1>{person.age}</h1>*/}
                {/*<button onClick={() => {*/}
                {/*    // 原对象是不可变的*/}
                {/*    let newDate = {...person};*/}
                {/*    newDate.age = 20;*/}
                {/*    setPerson(newDate)*/}
                {/*}}>change</button>*/}

                <input type='text' value={person.name} onChange={nameHandler}/>
                <input type='number' value={person.age} onChange={ageHandler}/>
                {JSON.stringify(person)}
            </div>
        </>
    );
}

export default App;

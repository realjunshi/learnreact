import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState} from "react";

function App() {
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.focus();
    }

    return (
      <>
          <input ref={inputEl} type="text" />
          <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
}


export default App;

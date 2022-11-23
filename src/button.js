import React from "react";

function Button({label, clickHandler}) {
    console.log(`rendering ... ${label}`)
    return <button onClick={clickHandler}>{label}</button>
}

export default React.memo(Button);
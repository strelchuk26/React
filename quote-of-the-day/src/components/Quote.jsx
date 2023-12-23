import { useState } from "react";

function Quote() {
    const [text, setText] = useState("");

    const show = () => {
        setText("'Lorem ipsum dolor.'");
    }

    const hide = () => {
        setText("");
    }

    return (
        <>  
            <h1>Quote: {text}</h1>
            <button onClick={show}>Show quote</button>
            <button onClick={hide}>Hide quote</button>
        </>
    );
}

export default Quote;
import logo from "./logo.svg";
import "./App.css";
import "./Component/Input";
import Button from "./Component/Button";
import Input from "./Component/Input";
import React, { useState } from "react";

function App() {
    const [originalValue, setValue] = useState(0);

    function addOne() {
        if (originalValue < 10) {
            setValue(originalValue + 1);
        }
    }
    function substractOne() {
        if (originalValue > 0) {
            setValue(originalValue - 1);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <Button text="-" operation={substractOne} />
                <Input originalValue={originalValue} />
                <Button text="+" operation={addOne} />
            </header>
        </div>
    );
}

export default App;

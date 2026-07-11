import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    // Write a counter button that displays the current count and increments it by 1 each time it's clicked
    return (
        <div className="App">
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default App;

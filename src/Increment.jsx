import { useState } from "react";

export default function Increment() {
    const[count, setCount] = useState(0);

    return(
        <div>
            <p>the count is: {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1 )}> Increment </button>
            <button onClick={() => setCount(prevCount => prevCount - 1 )}> Decrement </button>
        </div>
    );
}
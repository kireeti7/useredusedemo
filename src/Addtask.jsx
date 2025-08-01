import { useState } from "react";

export default function Addtask({ onAddTask }) {
    const [text, settext] = useState('');

    return(
        <div>
            <h1>Add task</h1>
            <input
                type="text"
                value={text}
                onChange={e => settext(e.target.value)}
            />
            <button onClick={() => settext('')}
                    onAddTask={text}
            >
                Add
            </button>
            <p>{text}</p>

        </div>
    );
}
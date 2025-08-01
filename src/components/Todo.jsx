import { useReducer } from "react";
import AddTask from "./Addtask";

export default function Todo() {
    const[tasks, dispatch] = useReducer(taskReducer, intialTasks);
    
    function handleAddTask(text) {
        dispatch[{
            type: 'added',
            id: nextId++,
            text: text,
        }];
    }

    function handleChangeTask(task) {
        dispatch[{
            type: 'changed',
            task: task,
        }];
    }

    function handleDeleteTask(taskId) {
        dispatch[{
            type: 'deleted',
            id: taskId,
        }];
    }

    return(
        <div>
            <h1>Add the Tasks</h1>
            <AddTask onAddTask={handleAddTask}/>

        </div>
    )
}
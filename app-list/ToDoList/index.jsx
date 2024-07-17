import React, { useState } from 'react'
import './ToDoList.css'
const ToDoList = () => {

    const [tasks, setTasks] = useState(["Eat Brakfast", "Take a shower"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if(newTask.trim() !== '') {
            setTasks((t) => [...t, newTask]);
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask)
    }

    function moveTaskUp(index) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
        setTasks(updatedTasks)
    }

    function moveTaskDown(index) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
        setTasks(updatedTasks )
    }

    console.log(tasks)

  return (
    <div className='to-do-list'>

        <h1>To-Do-List</h1>
        <div>
            <input type="text"
                    placeholder='enter a task'
                    value={newTask} 
                    onChange={handleInputChange}
                />
            <button className='add-button' onClick={addTask}>Add</button>

            <ol>
                {tasks.map((task, index) => {
                    return <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() =>deleteTask(index)}>Delete</button>
                        <button className='move-button' onClick={() =>moveTaskUp(index)}>UP</button>
                        <button className='move-button' onClick={() =>moveTaskDown(index)}>Down</button>
                    </li>
                })}
            </ol>
        </div>
    </div>
  )
}

export default ToDoList
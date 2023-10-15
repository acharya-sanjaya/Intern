import React, { useEffect, useState } from 'react';
import "./TodoList.css";

const Task = ({ task, onUpdate }) => {
    const [isChecked, setIsChecked] = useState(task.completed);

    const handleCheckbox = (e) => {
        const taskBox = e.target.parentNode.parentNode;
        e.target.checked ? taskBox.style.backgroundColor = "#e0ffe0" : taskBox.style.backgroundColor = "#ffe0e0";
        setIsChecked(e.target.checked);

        // Call the onUpdate prop to trigger the update
        onUpdate(task.TID);
    }

    return (
        <div className={`task-box ${task.completed ? "dim-green" : "dim-red"}`}>
            <div className="box-and-task">
                <input onChange={handleCheckbox} type="checkbox" checked={isChecked} />
                <div className="task-title">{task.title}</div>
            </div>
            <div className="task-description">{task.description}</div>
        </div>
    )
}

const Chapter = ({ chapter, index, onUpdate }) => {
    const handleCheckboxUpdate = (taskID) => {
        // Call the onUpdate prop to trigger the update
        onUpdate(taskID);
    }

    return (
        <div className="chapter-container">
            <h2 className="centered-heading">Chapter: {index} {chapter.chapter}</h2>
            <div className="chapterwise-tasks">
                {chapter.tasks?.map(task => (
                    <Task key={task.TID} task={task} onUpdate={handleCheckboxUpdate} />
                ))}
            </div>
        </div>
    )
};

const TodoList = () => {
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
        localStorage.getItem("taskList") || [];
        setTaskList(storedTaskList);
    }, []);

    const handleCheckboxUpdate = (taskID) => {
        const newTaskList = taskList.map(chapter => ({
            ...chapter,
            tasks: chapter.tasks.map(task => (task.TID === taskID ? { ...task, completed: !task.completed } : { ...task }))
        }));
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
    }

    return (
        <div className="tasks-container">
            {
                (Array.isArray(taskList) && taskList.length > 0)
                    ? taskList.map((chapter, index) => (
                        <Chapter key={`C${index + 1}`} chapter={chapter} index={index + 1} onUpdate={handleCheckboxUpdate} />
                    ))
                    : <div className="no-tasks">NO TASK TO DO</div>
            }
        </div>
    );
}

export default TodoList;

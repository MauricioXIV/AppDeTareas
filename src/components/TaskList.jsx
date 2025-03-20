import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard";
function TaskList() {

    const [task, setTask] = useState([])

    useEffect(() => {


        async function loadTasks() {
            const res = await getAllTasks()
            setTask(res.data)
        }
        loadTasks()
    }, [])


    return (
        <div className="grid  grid-cols-3 gap-3">
            {
                task.map((tarea) => (
                    <TaskCard key={tarea.id}  tarea={tarea} />
                ))
            }
        </div>
    )
}

export default TaskList
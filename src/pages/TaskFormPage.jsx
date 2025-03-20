import React, { useEffect } from "react";
import {useForm} from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
function TaskFormPage() {

    const {register, handleSubmit, formState: {errors}, setValue} = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            updateTask(params.id, data)
            navigate('/')
            toast.success("Tarea actualizada con éxito", {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"

                }
            }
            )
        } else {
            await createTask(data)
            navigate('/')
            toast.success("Tarea creada con éxito", {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"

                }
            }
            )
        }
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const res = await getTask(params.id)
                setValue("title", res.data.title)
                setValue("description", res.data.description)
            }
        }
        loadTask()
    }, [])

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
            <input
            className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
            type="text" 
            placeholder="Title" 
            {...register("title", { required: true })}
            />
            {errors.title && <span>this field is required</span>}
            <textarea
            className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
            rows="3" 
            placeholder="Description"
            {...register("description", { required: true })}
            ></textarea>
            {errors.description && <span>this field is required</span>}
            <button
            className="bg-indigo-500 p3 rounded-lg block w-full mt-3">
            Save</button>
            </form>
            {
            params.id && 
            <div className="flex justify-end">
                <button className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async() => {
                const advertencia = window.confirm('Are you sure? This action is irreversible')
                if (advertencia) {
                    deleteTask(params.id)
                    navigate("/tasks")
                    toast.success("Tarea eliminada con éxito", {
                        position: "bottom-right",
                        style: {
                            background: "#101010",
                            color: "#fff"
                        }
                    }
                    )
                }
            }}>Delete</button>
            </div>
            }  
        </div>
    )
}

export default TaskFormPage
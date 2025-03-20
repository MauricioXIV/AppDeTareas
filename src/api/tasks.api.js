import axios from "axios"

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => {
    return taskApi.get('/')
}

export const createTask = (task) => {
    return taskApi.post('/', task)
}

export const deleteTask = (id) => {
    try {
        return taskApi.delete(`/${id}/`);
     } catch (error) {
        console.log('Error al eliminar la tarea:', error.message);
        alert('No se pudo eliminar la tarea. Por favor, intenta nuevamente.');
     }
     
}

export const updateTask = (id, task) => {
    try {
        return taskApi.put(`/${id}/`, task);
     } catch (error) {
        console.log('Error al actualizar la tarea:', error.message);
        alert('No se pudo actualizar la tarea. Por favor, intenta nuevamente.');
     }
}

export const getTask = (id) => {
    return taskApi.get(`/${id}/`)
}
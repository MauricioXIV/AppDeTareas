import { useNavigate } from 'react-router-dom'

export function TaskCard({ tarea }) {

    const navigate = useNavigate()

    return(
    <div key={tarea.id} className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
    onClick={() => {
        navigate('/tasks/' + tarea.id)
    }}
    
    >
        <div className="titulo-contenedor"><h1 className='font-bold uppercase'>{tarea.title}</h1></div>
        <p className='text-slate-400'>{tarea.description}</p>
    </div>
    )
}
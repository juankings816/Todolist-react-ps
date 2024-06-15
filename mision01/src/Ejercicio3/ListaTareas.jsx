import React, { useState } from 'react';
import Tarea from './Tarea';

const ListaDeTareas = () => {
    const [tareas, setTareas] = useState([
        'Despertar',
        'Ducharce',
        'Desayunar',
        'Cepillarse los dientes',
        'Ir al trabajo',
        'Almorzar',
        'Cenar',
        'Estudiar en Parquesoft',
        'Dormir'
    ]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = (e) => {
        e.preventDefault();
        if (nuevaTarea.trim()) {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea('');
        }
    };

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    };

    return (
        <div>
        <h1>Lista de Tareas Juan Reyes</h1>
        <form onSubmit={agregarTarea}>
            <input 
                type="text" 
                value={nuevaTarea} 
                onChange={(e) => setNuevaTarea(e.target.value)} 
                placeholder="Nueva tarea" 
            />
            <button type="submit">Agregar</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Tarea</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {tareas.map((descripcion, index) => (
                    <Tarea 
                        key={index} 
                        descripcion={descripcion} 
                        eliminarTarea={() => eliminarTarea(index)} 
                    />
                ))}
            </tbody>
        </table>
    </div>
);
};

export default ListaDeTareas;
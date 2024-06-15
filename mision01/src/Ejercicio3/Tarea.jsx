// src/Tarea.jsx
import React from 'react';

const Tarea = ({ descripcion, eliminarTarea }) => {
    return (
        <tr>
            <td>{descripcion}</td>
            <td>
                <button onClick={eliminarTarea}>Eliminar</button>
            </td>
        </tr>
    );
};

export default Tarea;

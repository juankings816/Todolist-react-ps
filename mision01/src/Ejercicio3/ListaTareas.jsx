import React from "react";
import Tarea from "./Tarea";

function Lista(){
    const tareas = ['levantarse','Ducharse','Desayunar','Cepillarse','ir a trabajar'];

    return (
        <div>
            <h1> Lista de Tareas de Juan</h1>
            {tareas.map((tarea,index) =>
            <Tarea key={index} descripcion={tarea}/>
            )}
        </div>
    );
}   

export default Lista;
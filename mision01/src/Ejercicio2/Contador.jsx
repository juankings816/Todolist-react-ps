import React, {useState} from "react";

function Contador(){
    const [contador,setContador] = useState(0);

    return(
        <div>
            <p className="textCont">
                Hola haz dado click {contador} veces
            </p>
            <button onClick={()=> setContador(contador+1)}>+</button>
        </div>
    )
}

export default Contador;
import React, { useState } from "react";

function Cedulav() {
    const [digitos, setDigitos] = useState([1, 0, 0, 0, 3, 8, 0, 4, 8, 7]);

    const incrementarDigito = (index) => {
        setDigitos(prev => prev.map((digito, i) => i === index ? digito + 1 : digito));
    };

    return (
        <div className="containerCedulaMoney">
            <p>Mi número de documento es: {digitos.join(" ")}</p>
            {digitos.map((digito, index) => (
                <button key={index} onClick={() => incrementarDigito(index)}>
                    {digito}
                </button>
            ))}
        </div>
    );
}

export default Cedulav;
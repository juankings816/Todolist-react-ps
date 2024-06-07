import React, {useState} from "react";

function Cedula(){
    const [digitouno, setDigitouno] = useState(1);
    const [digitodos, setDigitodos] = useState(0);
    const [digitotres, setDigitotres] = useState(0);
    const [digitocuatro, setDigitocuatro] = useState(0);
    const [digitocinco, setDigitocinco] = useState(3);
    const [digitoseis, setDigitoseis] = useState(8);
    const [digitosiete, setDigitosiete] = useState(0);
    const [digitoocho, setDigitoocho] = useState(4);
    const [digitonueve, setDigitonueve] = useState(8);
    const [digitodiez, setDigitodiez] = useState(7);

    return(
        <div className="containerCedula">
            <p>
                Mi numero de documento es: {digitouno} {digitodos} {digitotres} {digitocuatro} {digitocinco} {digitoseis} {digitosiete} {digitoocho} {digitonueve} {digitodiez}
            </p>
            <button onClick={()=> setDigitouno(digitouno+1)}>{digitouno}</button>
            <button onClick={()=> setDigitodos(digitodos+1)}>{digitodos}</button>
            <button onClick={()=> setDigitotres(digitotres+1)}>{digitotres}</button>
            <button onClick={()=> setDigitocuatro(digitocuatro+1)}>{digitocuatro}</button>
            <button onClick={()=> setDigitocinco(digitocinco+1)}>{digitocinco}</button>
            <button onClick={()=> setDigitoseis(digitoseis+1)}>{digitoseis}</button>
            <button onClick={()=> setDigitosiete(digitosiete+1)}>{digitosiete}</button>
            <button onClick={()=> setDigitoocho(digitoocho+1)}>{digitoocho}</button>
            <button onClick={()=> setDigitonueve(digitonueve+1)}>{digitonueve}</button>
            <button onClick={()=> setDigitodiez(digitodiez+1)}>{digitodiez}</button>
        </div>
    )
}
export default Cedula;
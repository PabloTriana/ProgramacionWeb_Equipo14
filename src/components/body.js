import React from "react";

function Body({ subtitulo, arreglo }) {

    return (
        <div className="componenteBo">
            <h3>{subtitulo}</h3>
            <ol>{arreglo.map((e, index) => <li>{e.nombre}</li>)}</ol>
            <button className="boton" onClick={alerta}>Unete a la aventura</button>
        </div>
    )
}

function alerta() {
    alert("Bienvenido a la tripulacion");
}

export default Body;

Body.defaultProps = {
    subtitulo: "Conoce a la tripulacion",
    arreglo: [{ id: 1, nombre: "Monkey D Luffy" },
    { id: 2, nombre: "Roronoa Zoro" },
    { id: 3, nombre: "Nami" },
    { id: 4, nombre: "Vinsmoke Sanji" },
    { id: 5, nombre: "Nico Robin" }]
}


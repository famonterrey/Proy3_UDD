 //Pemite ingresar preguntas y posibles respuestas de la encuesta
function pedirPreguntasYOpciones(contenedorId){
    const preguntas = [];
    const opciones = [];
    const numPreguntas = prompt("¿Cuantas preguntas desea ingresar para su encuesta?");
    for(let i = 0; i < numPreguntas; i++){
            preguntas[i] = prompt("Ingresa la pregunta " + (i + 1));
            opciones[i] = []; //Se inicializa la segunda dimensión del arreglo
            const numOpciones = prompt("¿Cuantas opciones de respuesta tendrá la pregunta " + (i + 1) + "?");
            for(let j = 0; j < numOpciones; j++){
                opciones[i][j] = prompt("Ingrese la opción " + (j + 1) + " para la pregunta " + (i + 1));
            };
    };

    const contenedor = document.getElementById(contenedorId);
    //contenedor.innerHTML = ""; //Reinicia el contenido

    preguntas.forEach((pregunta, idx) => {
        //Crear título para cada pregunta
        const titulo = document.createElement("h3");
        titulo.textContent = pregunta;
        contenedor.append(titulo);

        opciones[idx].forEach(opcion => {
        //Crear checkbox para cada opción
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = `opcion ${idx}`
        checkbox.value = opcion;

        label.append(checkbox);
        label.append(document.createTextNode(opcion));
        contenedor.append(label);
        contenedor.append(document.createElement("br"));
        });
    });

    const boton = document.createElement("button");
    boton.textContent = "Enviar respuestas";
    boton.onclick = () => obtenerRespuestas(contenedorId, preguntas);
    contenedor.append(boton);
};

function obtenerRespuestas(contenedorId, preguntas = []){
    //Obtenemos la selección por cada respuesta
    const respuestas = [];

    preguntas.forEach((pregunta,idx) =>{
        const seleccionados = [];
        const checkboxes = document.querySelectorAll(`input[name="opcion ${idx}"]:checked`);
        checkboxes.forEach(cb=> seleccionados.push(cb.value));
        respuestas.push({
            pregunta: pregunta,
            seleccionados: seleccionados
        });
    });

    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "<h2>Resultados de la encuesta: </h2>";
    respuestas.forEach(r => {
        const p = document.createElement("p");
        p.textContent = `${r.pregunta}: ${r.seleccionados.join(", ") || "Sin respuesta"}`;
        contenedor.append(p);
    });
}

// Ejemplo de uso:

//console.log(pedirPreguntasYOpciones());
window.onload = function() {
    pedirPreguntasYOpciones("encuesta-container");
};

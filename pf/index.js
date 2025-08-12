

 //Pemite ingresar preguntas y posibles respuestas de la encuesta
function pedirPreguntasYOpciones(){
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
    return {preguntas, opciones};
};

//Define lo que se muestra en la página
function mostrarEnPagina(contenedorId, preguntas = [], opciones = []){
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = ""; //Reinicia el contenido

    preguntas.forEach((pregunta,idx) => {
        //Crear título para cada pregunta
        const titulo = document.createElement("h3");
        titulo.textContent = pregunta[idx];
        contenedor.append(titulo);
    });

}



/*         const contenedor = document.getElementById(contenedorId);
        contenedor.innerHTML = ""; //Reinicia el contenido

        this.preguntas.forEach((pregunta,idx) => {
            //Crea título para las preguntas
            const titulo = document.createElement("h3");
            titulo.textContent = pregunta[idx];
            contenedor.append(titulo);

            this.opciones[idx].forEach((opcion, i) => {
                const label = document.createElement("label");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = `opcion ${idx}`;
                checkbox.value = opcion;

                label.append(checkbox);
                label.append(document.createTextNode(opcion));
                contenedor.append(label);
                contenedor.append(document.createElement("br")); //genera salto entre opciones
            });
        });

        const boton = document.createElement("button");
        boton.textContent = "Enviar respuestas";
        boton.onclick = () => this.obtenerRespuestas(contenedorId);
        contenedor.append(boton);
    

    //Respuestas
    obtenerRespuestas(contenedorId){
        //Obtenemos la selección por cada respuesta
        const respuestas = [];
        this.preguntas.forEach((pregunta,idx) => {
            const seleccionados = [];
            const checkboxes = document.querySelectorAll(`input[name="opcion ${idx}"]:checked`);
            checkboxes.forEach(cb=> seleccionados.push(cb.value));
            respuestas.push({
                pregunta: pregunta[idx],
                seleccionados: seleccionados
            });        
        });

        //Mostrar resultados en la página
        const contenedor = document.getElementById(contenedorId);
        contenedor.innerHTML = "<h2>Resultados de la encuesta: </h2>";
        respuestas.forEach(r => {
            const p = document.createElement("p");
            p.textContent = `${r.pregunta}: ${r.seleccionados.join(", ") || "Sin respuesta"}`;
            contenedor.append(p);
        });
        console.log(respuestas);
    } */


// Ejemplo de uso:

console.log(pedirPreguntasYOpciones());

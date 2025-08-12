class Encuesta {
    constructor(preguntas = [],opciones = []){
        this.preguntas = preguntas;
        this.opciones = opciones;
        this.preguntaContestada = false;
    }



    votar(respuestaUsuario){
        this.preguntaContestada = true;
    }

    pedirPreguntasYOpciones(){
        const numPreguntas = prompt("¿Cuantas preguntas desea ingresar para su encuesta?");
        const preguntas = [];
        for(let i = 0; i < numPreguntas; i++){
            preguntas[i] = prompt("Ingresa la pregunta " + (i + 1));
            this.preguntas.push(preguntas);
            const numOpciones = prompt("¿Cuantas opciones de respuesta tendrá la pregunta " + (i + 1) + "?");
            const opciones = [];
            for(let j = 0; j < numOpciones; j++){
                opciones[j] = prompt("Ingrese la opción " + (j + 1) + " para la pregunta " + (i + 1));
            }
            this.opciones.push(opciones);
        }
        console.log(preguntas)
    }

    mostrarEnPagina(contenedorId){
        const contenedor = document.getElementById(contenedorId);
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
    }

    obtenerRespuestas(contenedorId){
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
    }
}

// Ejemplo de uso:


const encuesta = new Encuesta();
encuesta.pedirPreguntasYOpciones();
window.onload = () => {
    encuesta.mostrarEnPagina("encuesta-container");
};
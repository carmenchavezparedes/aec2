// AEC2 - Funcionalidades de los botones mediante JavaScript
// Asignatura: Aplicaciones Web y Aplicaciones Empresariales
// Autora: Carmen Chavez Paredes

// Selecciono los elementos del DOM que voy a necesitar
const btnCalificaciones = document.getElementById("btnCalificaciones");
const btnExamenes = document.getElementById("btnExamenes");
const btnTutoria = document.getElementById("btnTutoria");
const btnInfo = document.getElementById("btnInfo");
const mensaje = document.getElementById("mensaje");
const pie = document.getElementById("pie");

// Array con todos los botones para poder recorrerlos cuando sea necesario
const todosLosBotones = document.getElementsByClassName("menu")[0].getElementsByTagName("a");


// =============================================
// FUNCIÓN AUXILIAR: quita el estilo activo de todos los botones
// la uso cada vez que se pulsa uno nuevo para que solo
// aparezca resaltado el último que se ha pulsado
// =============================================
function limpiarBotonesActivos() {
    for (const boton of todosLosBotones) {
        boton.classList.remove("btn-activo");
    }
}


// =============================================
// BOTÓN 1: CALIFICACIONES
// Muestra un mensaje con las notas del alumno
// =============================================
btnCalificaciones.addEventListener("click", function(e) {
    e.preventDefault(); // evito que el enlace navegue a otra página

    limpiarBotonesActivos();
    btnCalificaciones.classList.add("btn-activo");

    // Notas de ejemplo del alumno
    const notas = {
        "Aplicaciones Web": 7.5,
        "Programación": 8.2,
        "Bases de Datos": 6.9
    };

    let textoNotas = "📋 Tus calificaciones: ";
    for (const asignatura in notas) {
        textoNotas += asignatura + ": " + notas[asignatura] + " | ";
    }

    // Elimino el último separador
    textoNotas = textoNotas.slice(0, -3);
    mensaje.innerText = textoNotas;

    pie.innerText = "Sección: Calificaciones";
    console.log("El usuario ha accedido a Calificaciones");
});


// =============================================
// BOTÓN 2: EXÁMENES
// Muestra la fecha del próximo examen
// =============================================
btnExamenes.addEventListener("click", function(e) {
    e.preventDefault();

    limpiarBotonesActivos();
    btnExamenes.classList.add("btn-activo");

    // Uso el objeto Date para obtener la fecha actual y calcular
    // cuántos días faltan para el próximo examen
    const fechaExamen = new Date("2025-06-15");
    const hoy = new Date();
    const diferencia = fechaExamen - hoy;
    const diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    if (diasRestantes > 0) {
        mensaje.innerText = "📅 Próximo examen: 15/06/2025 — Faltan " + diasRestantes + " días";
    } else {
        mensaje.innerText = "📅 No hay exámenes próximos programados";
    }

    pie.innerText = "Sección: Exámenes";
    console.log("El usuario ha accedido a Exámenes");
});


// =============================================
// BOTÓN 3: TUTORÍA
// Evento relacionado con el ratón (mouseover y mouseout)
// Cambia el mensaje según si el ratón está encima o no
// Este botón usa eventos de ratón como pide la actividad
// =============================================
btnTutoria.addEventListener("click", function(e) {
    e.preventDefault();

    limpiarBotonesActivos();
    btnTutoria.classList.add("btn-activo");

    mensaje.innerText = "📧 Tutorías disponibles: lunes y miércoles de 10:00 a 12:00h";
    pie.innerText = "Sección: Tutoría";
    console.log("El usuario ha accedido a Tutoría");
});

// Evento mouseover: cuando el ratón pasa por encima del botón Tutoría
// este es el evento relacionado con eventos que pide la AEC
btnTutoria.addEventListener("mouseover", function() {
    mensaje.innerText = "💬 Pasa el ratón para más info — Haz clic para ver horarios";
});

// Evento mouseout: cuando el ratón sale del botón
btnTutoria.addEventListener("mouseout", function() {
    // Solo limpio si el botón no está activo, para no borrar la info al salir
    if (!btnTutoria.classList.contains("btn-activo")) {
        mensaje.innerText = "";
    }
});


// =============================================
// BOTÓN 4: INFO ALUMNO
// Muestra información del alumno mediante prompt
// =============================================
btnInfo.addEventListener("click", function(e) {
    e.preventDefault();

    limpiarBotonesActivos();
    btnInfo.classList.add("btn-activo");

    // Pido el nombre al usuario con un prompt
    const nombreAlumno = prompt("¿Cuál es tu nombre?");

    if (nombreAlumno !== null && nombreAlumno.trim() !== "") {
        mensaje.innerText = "👤 Alumno: " + nombreAlumno + " | Curso: 2024-2025 | UDIMA";
        pie.innerText = "Hola, " + nombreAlumno + "!";
        console.log("Info Alumno consultada por: " + nombreAlumno);
    } else {
        mensaje.innerText = "ℹ️ No se ha introducido ningún nombre";
        pie.innerText = "Bienvenido/a";
    }
});

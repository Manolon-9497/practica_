// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- Ejercicio 1: Cambiar contenido --- [cite: 8]
    const btnCambiar = document.getElementById('btn-cambiar');
    const parrafoOriginal = document.getElementById('parrafo-original');

    btnCambiar.addEventListener('click', () => {
        parrafoOriginal.textContent = "Texto cambiado con JavaScript"; [cite, 10]
    });

    // --- Ejercicio 2: Agregar elementos a una lista --- [cite: 11]
    const btnAgregar = document.getElementById('btn-agregar');
    const inputItem = document.getElementById('input-item');
    const listaItems = document.getElementById('lista-items');

    btnAgregar.addEventListener('click', () => {
        const textoItem = inputItem.value;
        if (textoItem.trim() !== '') {
            const nuevoLi = document.createElement('li'); // [cite: 6]
            nuevoLi.textContent = textoItem;
            listaItems.appendChild(nuevoLi);
            inputItem.value = ''; // Limpiar el campo
        }
    });

    // --- Ejercicio 3: Mostrar/Ocultar contenido --- [cite: 15]
    const btnToggle = document.getElementById('btn-toggle');
    const divToggle = document.getElementById('div-toggle');

    btnToggle.addEventListener('click', () => {
        // Alternar la clase 'oculto'
        if (divToggle.classList.contains('oculto')) {
            divToggle.classList.remove('oculto');
        } else {
            divToggle.classList.add('oculto');
        }
        // Alternativa moderna:
        // divToggle.classList.toggle('oculto');
    });

    // --- Ejercicio 4: Cambiar estilos --- [cite: 19]
    const btnColor = document.getElementById('btn-color');
    const parrafoColorido = document.getElementById('parrafo-colorido');
    const colores = ['red', 'green', 'blue']; [cite, 21]
    let colorIndex = 0;

    btnColor.addEventListener('click', () => {
        parrafoColorido.style.color = colores[colorIndex];
        colorIndex = (colorIndex + 1) % colores.length; // Avanza al siguiente color
    });

    // --- Ejercicio 5: Contador de clics --- [cite: 22]
    const btnContador = document.getElementById('btn-contador');
    const conteoClics = document.getElementById('conteo-clics');
    let contador = 0;

    btnContador.addEventListener('click', () => {
        contador++;
        conteoClics.textContent = contador; [cite, 24]
    });

    // --- Ejercicio 6: Formulario básico con validación --- [cite: 25]
    const formulario = document.getElementById('formulario-val');
    const inputNombre = document.getElementById('input-nombre');
    const mensajeError = document.getElementById('mensaje-error');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        
        const nombre = inputNombre.value;
        if (nombre.trim() === '') {
            mensajeError.textContent = "El campo nombre no puede estar vacío."; [cite, 27]
            mensajeError.className = 'error';
        } else {
            mensajeError.textContent = "Formulario enviado correctamente."; [cite, 28]
            mensajeError.className = 'exito';
        }
    });

});
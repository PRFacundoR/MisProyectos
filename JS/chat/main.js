/**
 * ============================================================================
 * MAIN.JS: EL CLIENTE DE WHATSAPP LOCAL
 * ============================================================================
 */
/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

const cajaMensajes = document.getElementById("caja-mensajes");
const inputTexto = document.getElementById("input-texto");
const btnEnviar = document.getElementById("btn-enviar");

// Función para dibujar los mensajes
const dibujarMensaje = (texto, tipo) => {
    const div = document.createElement("div");
    // 'tipo' será "yo" (verde, a la derecha) o "bot" (blanco, a la izquierda)
    div.classList.add("burbuja", tipo); 
    div.innerHTML = `<strong>${tipo === 'yo' ? 'Vos' : 'La Otra Pestaña'}:</strong> ${texto}`;
    cajaMensajes.appendChild(div);
};

// ============================================================================
// CUANDO VOS APRETÁS ENVIAR
// ============================================================================
btnEnviar.addEventListener("click", () => {
    const mensaje = inputTexto.value;
    if (!mensaje) return;

    // 1. Dibujamos el mensaje en NUESTRA pantalla (lado derecho)
    dibujarMensaje(mensaje, "yo");
    inputTexto.value = "";

    // 2. Le pasamos el mensaje al Service Worker para que lo reparta
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            orden: "ENVIAR_A_OTRAS_PESTAÑAS",
            texto: mensaje
        });
    }
});

// ============================================================================
// CUANDO EL SERVICE WORKER NOS MANDA ALGO (Desde otra pestaña)
// ============================================================================
navigator.serviceWorker.addEventListener("message", (evento) => {
    
    if (evento.data.orden === "NUEVO_MENSAJE_ENTRANTE") {
        
        // Dibujamos el mensaje recibido en la pantalla (lado izquierdo)
        dibujarMensaje(evento.data.texto, "bot");
        
        // Opcional: Hacemos sonar el ruidito de WhatsApp o vibramos
        if (navigator.vibrate) navigator.vibrate(200);
    }
});*/

/**
 * ============================================================================
 * MAIN.JS: EL CLIENTE DE WHATSAPP LOCAL
 * ============================================================================
 */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

const cajaMensajes = document.getElementById("caja-mensajes");
const inputTexto = document.getElementById("input-texto");
const btnEnviar = document.getElementById("btn-enviar");

// Función para dibujar los mensajes
const dibujarMensaje = (texto, tipo) => {
    const div = document.createElement("div");
    // 'tipo' será "yo" (verde, a la derecha) o "bot" (blanco, a la izquierda)
    div.classList.add("burbuja", tipo); 
    div.innerHTML = `<strong>${tipo === 'yo' ? 'Vos' : 'La Otra Pestaña'}:</strong> ${texto}`;
    cajaMensajes.appendChild(div);
};

// ============================================================================
// CUANDO VOS APRETÁS ENVIAR
// ============================================================================
btnEnviar.addEventListener("click", () => {
    const mensaje = inputTexto.value;
    if (!mensaje) return;

    // Dibujamos el mensaje en NUESTRA pantalla (lado derecho)
    dibujarMensaje(mensaje, "yo");
    inputTexto.value = "";

    // PASO 1: Esto agarra el mensaje y lo envía al "backend" local (el Service Worker)
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            orden: "ENVIAR_A_OTRAS_PESTAÑAS",
            texto: mensaje
        });
    }
});

// ============================================================================
// CUANDO EL SERVICE WORKER NOS MANDA ALGO (Desde otra pestaña)
// ============================================================================
navigator.serviceWorker.addEventListener("message", (evento) => {
    
    // PASO 4: Cuando recibimos del back (sw.js) los mensajes, los mostramos en el front
    if (evento.data.orden === "NUEVO_MENSAJE_ENTRANTE") {
        
        // Dibujamos el mensaje recibido en la pantalla (lado izquierdo)
        dibujarMensaje(evento.data.texto, "bot");
        
        // Opcional: Hacemos sonar el ruidito de WhatsApp o vibramos
        if (navigator.vibrate) navigator.vibrate(200);
    }
});
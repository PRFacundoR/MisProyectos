/**
 * ============================================================================
 * EL WORKER (worker.js) - UNIVERSO PARALELO
 * ============================================================================
 * @concept REGLA DE ORO: Acá adentro "window" o "document" NO EXISTEN.
 * Usamos "self" para referirnos a este mismo hilo en segundo plano.
 */

self.addEventListener("message", (evento) => {
    
    // Recibimos la orden de arrancar desde main.js
    console.log("👷‍♂️ Worker: Recibí la orden. Arrancando cálculo pesado...");

    let calculo = 0;
    
    // Hacemos el mismo bucle brutal de 5 mil millones
    // Como estamos en otro hilo de la CPU, la pantalla del usuario no se entera.
    for (let i = 0; i < 5000000000; i++) {
        calculo += i;
    }

    // Le tiramos el resultado por la cabeza al hilo principal
    console.log("👷‍♂️ Worker: Terminé. Devolviendo resultado...");
    self.postMessage(calculo);
});
/**
 * ============================================================================
 * COMPARACIÓN: SINGLE THREAD vs MULTI THREAD
 * ============================================================================
 */

const btnSinWorker = document.getElementById("btn-sin-worker");
const btnConWorker = document.getElementById("btn-con-worker");
const btnPrueba = document.getElementById("btn-prueba");
const textoResultado = document.getElementById("resultado");

// ============================================================================
// ESCENARIO 1: SIN WORKER (El Desastre Arquitectónico)
// ============================================================================
const ejecutarSinWorker = () => {
    textoResultado.innerText = "⏳ Procesando en el Hilo Principal (Se va a tildar)...";
    
    // Un truco sucio: Le damos 50ms al navegador para que alcance a dibujar 
    // el texto de "Procesando..." antes de congelarlo a muerte con el cálculo.
    setTimeout(() => {
        let calculo = 0;
        // Bucle brutal de 5 mil millones de iteraciones
        for (let i = 0; i < 5000000000; i++) {
            calculo += i;
        }
        
        textoResultado.innerText = `✅ ¡Terminó! (Sin Worker). Resultado: ${calculo}`;
    }, 50);
};


// ============================================================================
// ESCENARIO 2: CON WORKER (La Arquitectura Correcta)
// ============================================================================
const ejecutarConWorker = () => {
    textoResultado.innerText = "🚀 Procesando en Segundo Plano (La UI está libre)...";

    // 1. Levantamos el universo paralelo (el hilo esclavo)
    const miWorker = new Worker("worker.js");

    // 2. Escuchamos el momento en que el esclavo termine su trabajo
    miWorker.addEventListener("message", (evento) => {
        const resultadoFinal = evento.data;
        textoResultado.innerText = `✅ ¡Terminó! (Con Worker). Resultado: ${resultadoFinal}`;
        
        // Asesinamos el hilo para liberar memoria RAM
        miWorker.terminate(); 
    });

    // 3. Le damos la orden de arrancar
    miWorker.postMessage("¡Arrancá a calcular!");
};


// ============================================================================
// EVENTOS DE LA UI
// ============================================================================

btnSinWorker.addEventListener("click", ejecutarSinWorker);

btnConWorker.addEventListener("click", ejecutarConWorker);

// Este botón es para demostrar que la UI está viva o muerta
btnPrueba.addEventListener("click", () => {
    console.log("👆 ¡La interfaz gráfica sigue respondiendo!");
    alert("¡Estoy vivo!");
});



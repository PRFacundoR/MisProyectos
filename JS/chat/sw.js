/**
 * ============================================================================
 * SW.JS: EL ROUTER DE PESTAÑAS (Broadcast Local)
 * ============================================================================
 */
/*
self.addEventListener("message", async (evento) => {
    
    if (evento.data.orden === "ENVIAR_A_OTRAS_PESTAÑAS") {
        
        const textoRecibido = evento.data.texto;

        // 1. clients.matchAll(): Busca TODAS las pestañas abiertas de tu página
        const todasLasPestañas = await self.clients.matchAll();

        // 2. Recorremos una por una
        todasLasPestañas.forEach(pestaña => {
            
            // 3. Filtro de seguridad: No le mandamos el mensaje a la pestaña que lo originó
            // evento.source.id es el DNI único de la pestaña que envió el mensaje
            if (pestaña.id !== evento.source.id) {
                
                // Le disparamos el mensaje a las otras pestañas
                pestaña.postMessage({
                    orden: "NUEVO_MENSAJE_ENTRANTE",
                    texto: textoRecibido
                });
            }
        });
    }
});*/


/**
 * ============================================================================
 * SW.JS: EL ROUTER DE PESTAÑAS (Broadcast Local)
 * ============================================================================
 */

self.addEventListener("message", async (evento) => {
    
    // PASO 2: Proceso el mensaje que llega desde el front (main.js)
    if (evento.data.orden === "ENVIAR_A_OTRAS_PESTAÑAS") {
        
        const textoRecibido = evento.data.texto;

        // 1. clients.matchAll(): Busca TODAS las pestañas abiertas de tu página
        const todasLasPestañas = await self.clients.matchAll();

        // 2. Recorremos una por una
        todasLasPestañas.forEach(pestaña => {
            
            // 3. Filtro de seguridad: No le mandamos el mensaje a la pestaña que lo originó
            // evento.source.id es el DNI único de la pestaña que envió el mensaje
            if (pestaña.id !== evento.source.id) {
                
                // PASO 3: Enviamos el mensaje a todo el mundo (las otras pestañas abiertas)
                pestaña.postMessage({
                    orden: "NUEVO_MENSAJE_ENTRANTE",
                    texto: textoRecibido
                });
            }
        });
    }
});
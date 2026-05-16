//crear servidor
const http=require('node:http');


const server=http.createServer((req,res)=>{
    console.log(`Recibida una solicitud: ${req.method} ${req.url}`);//se ve en la terminal
    res.end('Hola desde el servidor HTTP de Node.js!');//esto se ve en el navegador cuando accedemos a localhost:3000
});

server.listen(0,()=>{// pueto 0 para que el sistema operativo asigne un puerto disponible automaticamente
    console.log('Servidor escuchando en puerto http://localhost:'+ server.address().port);//se muestra el puerto asignado en la terminal
});

//esto es recomendable solo para pruebas/desarrollo, en produccion se debe usar un puerto fijo y configurar el firewall para permitir el trafico en ese puerto.

// para probar el servidor, se puede usar el navegador o herramientas como curl o postman para enviar


//app para ver si el puerto esta disponible
const readline = require('node:readline');//leer input del usuario por consola, para preguntar el puerto a usar
const net = require('node:net');//para verificar si un puerto esta disponible, creando un servidor temporal que intente escuchar en ese puerto, si no se puede es porque ya esta en uso

/**En Node.js y JavaScript, necesitas usar promesas y async/await para cualquier operación I/O (Entrada/Salida) que dependa del sistema operativo, la red o el disco de almacenamiento.
 * 1. Operaciones con Sistemas de Archivos (Módulo fs/promises)Lectura y escritura: Leer o guardar archivos en el disco duro.Gestión de carpetas: Crear, renombrar o eliminar directorios.Metadatos: 
 * Verificar si un archivo existe o comprobar sus permisos.
 * 
 * 2. Peticiones de Red (APIs y HTTP)Consumo de APIs: Uso de fetch o librerías como axios para consultar servidores externos.Descarga de recursos:
 *  Descargar imágenes, videos o archivos de internet.Websockets: Establecer conexiones en tiempo real.
 * 
 * 3. Bases de Datos (Consultas y Conexiones)Consultas CRUD: Buscar, insertar, actualizar o eliminar registros (MongoDB, PostgreSQL, MySQL).Operaciones pesadas: Transacciones 
 * complejas que agrupan múltiples consultas.Conexión inicial: Autenticarse y conectar la aplicación al servidor de la base de datos.
 * 
 * 4. Redes y Servidores de Bajo Nivel (Módulo net / dgram)Escaneo de puertos: Verificar disponibilidad de sockets (como el ejemplo anterior).
 * Servidores TCP/UDP: Comunicar procesos mediante protocolos de red.
 * 
 * 5. Criptografía y Seguridad (Módulo crypto / bcrypt)Hasheo de contraseñas: Operaciones matemáticas complejas que se 
 * ejecutan de forma asíncrona para no congelar la app.Generación de claves: Crear llaves públicas o privadas para cifrado.
 * 
 * 6. Temporizadores Avanzados y AnimacionesRetardos controlados: Crear pausas artificiales en el código (funciones sleep personalizadas).Animaciones web: Controlar 
 * tiempos de renderizado en el navegador con requestAnimationFrame.
 * 
 * 7. Procesos Hijos y Worker Threads (Módulo child_process)Ejecutar comandos de consola: Lanzar scripts de terminal (ej: bash o PowerShell) desde Node.js.Multi-hilos: 
 * Delegar tareas matemáticas muy pesadas a otros hilos del procesador. */
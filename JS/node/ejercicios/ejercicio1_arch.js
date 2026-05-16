const fs=require('node:fs/promises');
const path=require('node:path');

async function ejercicio1(pathArchivo){
    
    try {
        await fs.access(pathArchivo)
        const ubicacion=path.join(__dirname,'datos','log.txt');
        await fs.writeFile(ubicacion,'Sistema iniciado con éxito');

        console.log(path.extname(ubicacion),path.basename(ubicacion), path.resolve(ubicacion));

    } catch (error) {
        await fs.mkdir(path.join(__dirname,'datos'),{recursive:true});
          const ubicacion=path.join(__dirname,'datos','log.txt');
        await fs.writeFile(ubicacion,'Sistema iniciado con éxito');

        console.log(path.extname(ubicacion),path.basename(ubicacion), path.resolve(ubicacion));


    }
} 

ejercicio1('/datos')

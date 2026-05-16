const htpps=require('node:https');
const fs=require('fs/promises');
const { STATUS_CODES } = require('node:http');

try {
   const datosPoke= htpps.get('https://pokeapi.co/api/v2/pokemon/ditto',(res)=>{
    if (res.statusCode!=200) {
        
        console.error('fallo la peticon"Status Code: ${res.statusCode}');
            res.resume(); 
            return;       
    }else{

        res
    }

   })
   
  

} catch (error) {
    
}
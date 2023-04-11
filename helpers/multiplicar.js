const fs = require('fs');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    
    try {

        let salida = '';
        let consola = '';

        for( let i = 1; i <= hasta; i++ ) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } `.yellow+ 'x'.red + ` ${ i } `.red + `= ${ base * i }\n`.random;
        }

        if( listar ){
            console.log( '==================='.bgCyan );
            console.log( `    Tabla del`, `${ base }`.blue );
            console.log( '==================='.bgCyan );
            console.log( consola );
        }
        
        fs.writeFileSync( `./salida/Tabla-${ base }-a-${ hasta }.txt`, salida);
        return `Tabla-${ base }-a-${ hasta }.txt`.rainbow;
    } catch( err ) {
        throw err;
    }

}

module.exports = {
    crearArchivo
};
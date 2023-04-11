const colors = require('colors');
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const base = argv.b;

crearArchivo( base, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado' ) )
    .catch( err => console.log( err ) );

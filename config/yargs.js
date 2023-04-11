const argv = require('yargs')
                .option( 'b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'.green
                }).option( 'l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'.green
                }).option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta cuál número multiplicar la base de la tabla'.green
                }).check( (argv, options) => {
                    if( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un número'.red;
                    } else if( typeof argv.l != 'boolean' ) {
                        throw 'La lista debe ser un dato booleano'.red;
                    } else if( isNaN( argv.h ) ) {
                        throw 'El limite debe ser de tipo númerico'.red;
                    }
                    return true;
                })
                .argv;

module.exports = argv;
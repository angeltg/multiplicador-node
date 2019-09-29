const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ` + colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        break;
}

//let argv2 = process.argv;

//console.log(argv.base);

//let parametro = argv[2];
//let base = parametro.split('=')[1];
//Al arrancar el programa lo llamamos así nodemon app --base=1
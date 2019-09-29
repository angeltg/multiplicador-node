//requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        };

        let line = '';

        console.log(`=========================`.green);
        console.log(`Es la tabla del ${ base }`.green);
        console.log(`=========================`.green);
        for (let index = 1; index <= limite; index++) {

            console.log(`${ base } * ${ index } = ${ base * index }`);
            line += `${ base } * ${ index } = ${ base * index }\n`;
        }
        resolve(`La tabla del ${base} hasta el ${limite} es \n${line}`);
    });

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        };
        let line = '';
        for (let index = 1; index <= limite; index++) {
            console.log(`${ base } * ${ index } = ${ base * index }`);
            line += `${ base } * ${ index } = ${ base * index }\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-hasta-${ limite }.txt`, line, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla-del-${ base }-hasta-${ limite }.txt`);
            }
        });


    });

}


module.exports = {
    crearArchivo,
    listarTabla
}
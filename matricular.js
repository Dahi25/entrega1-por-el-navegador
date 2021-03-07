
let {cursosOfertados} = require('./listar');
const express=require('express');
const app=express();



let opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'
    }
}


const argv = require('yargs')
    .command('inscribir', 'matricular', opciones)
    .argv;


let inscribir_curso = () => {

    if (argv.id == 1 || argv.id == 2 || argv.id == 3) {
        enviando= `El estudiante ${argv.nombre} con cedula: ${argv.cedula} esta matriculado en el curso ${cursosOfertados[argv.id - 1].nombre} con un precio de ${cursosOfertados[argv.id - 1].precio} pesos y una duracion de: ${cursosOfertados[argv.id - 1].duracion} horas`;
      return enviando;
    } else {
        enviando=(`El ID ${argv.id} no corresponde a ningun curso ofertado`);
        return enviando;
    }
}
app.get('/', function(req, res) {
    res.send(enviando);
});

app.listen(3000);

inscribir_curso();

/*listar();*/
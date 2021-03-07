let { cursosOfertados }= require('./listar');


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

const argv=require('listar')
.command('inscribir', 'matricular',opciones)
.argv
console.log(argv.id);
console.log(argv.nombre);
console.log(argv.cedula);
console.log(`El estudiante ${argv.nombre} con cedula: ${argv.cedula} esta matriculado en el curso ${cursosOfertados[argv.id - 1].nombre} con un precio de ${cursosOfertados[argv.id - 1].precio} pesos y una duracion de: ${cursosOfertados[argv.id - 1].duracion} horas`)
console.log(argv);

inscribir_curso();

/*listar();*/
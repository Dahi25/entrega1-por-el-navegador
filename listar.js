let cursosOfertados=[{
    id: 1,
        nombre: "programacion intermedia",
        duracion: 80,
        precio: 70000
    },
    {
        id: 2,
        nombre: "bases de datos no relacionales",
        duracion: 80,
        precio: 70000
    },
    {
        id: 3,
        nombre: "PHP",
        duracion: 80,
        precio: 70000
}]
let imprimirCursos = () => {
    let contador = 1;
    for (let i = 0; i < cursosOfertados.length; i++) {
        contador = contador + 1;
        setTimeout(() => {
            console.log(`
            Nombre del curso: ${cursosOfertados[i].nombre}
            ID curso: ${cursosOfertados[i].id}
            Duracion del curso: ${cursosOfertados[i].duracion}
            Precio del curso: ${cursosOfertados[i].precio}
            `);
        }, 2000 * contador);

    }
}
imprimirCursos()
module.exports={
    cursosOfertados
}
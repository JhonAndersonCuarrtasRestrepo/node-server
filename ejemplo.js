const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const listaTareas = [];

function agregarTarea() {
  rl.question('Nombre de la tarea: ', (nombre) => {
    rl.question('Descripción de la tarea: ', (descripcion) => {
      const tarea = {
        nombre,
        descripcion,
        completada: false
      };
      listaTareas.push(tarea);
      console.log(`Tarea añadida: ${nombre} - ${descripcion}`);
      mostrarMenu();
    });
  });
}

function eliminarTarea() {
  rl.question('nombre de la tarea a eliminar: ', (nombre) => {
    const tareaEncontrada = listaTareas.find(tarea => tarea.nombre === nombre);
    if (tareaEncontrada) {
      listaTareas.splice(listaTareas.indexOf(tareaEncontrada), 1);
      console.log(`Tarea ${nombre} eliminada`);
    } else {
      console.log(`No se encontró ninguna tarea con el nombre ${nombre}`);
    }
    mostrarMenu();
  });
}

function completarTarea() {
  rl.question('nombre de la tarea a completar: ', (nombre) => {
    const tareaEncontrada = listaTareas.find(tarea => tarea.nombre === nombre);
    if (tareaEncontrada) {
      tareaEncontrada.completada = true;
      console.log(`Tarea ${nombre} completada`);
    } else {
      console.log(`No se encontró ninguna tarea con el nombre ${nombre}`);
    }
    mostrarMenu();
  });
}

function mostrarTareas() {
  if (listaTareas.length === 0) {
    console.log('No hay tareas en la lista');
  } else {
    console.log('Lista de tareas:');
    listaTareas.forEach(tarea => {
      console.log(`- ${tarea.nombre} - ${tarea.descripcion} (${tarea.completada ? 'Completada' : 'Pendiente'})`);
    });
  }
  mostrarMenu();
}

function mostrarMenu() {
  console.log(`
Menu
1. Agregar tarea
2. Eliminar tarea
3. Completar tarea
4. Mostrar tareas
5. Salir
`);
  rl.question('Elige una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        agregarTarea();
        break;
      case '2':
        eliminarTarea();
        break;
      case '3':
        completarTarea();
        break;
      case '4':
        mostrarTareas();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Inténtalo nuevamente.');
        mostrarMenu();
    }
  });
}

mostrarMenu();

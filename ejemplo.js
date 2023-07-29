const { resolve } = require('path');
const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const listaTareas = [];

async function agregarTarea() {
  console.log('Cargando...');
  await new Promise((resolve) => { // Usamos await aquí para esperar a que se complete la tarea de agregar
    setTimeout(() => {
      rl.question('Nombre de la tarea: ', (nombre) => {
        rl.question('Descripción de la tarea: ', (descripcion) => {
          const tarea = {
            nombre,
            descripcion,
            completada: false,
          };
          listaTareas.push(tarea);
          console.log(`Tarea añadida: ${nombre} - ${descripcion}`);
          resolve(); // No necesitamos usar resolve() aquí
        });
      });
    }, 3000);
  });
}

function eliminarTarea() {
  return new Promise((resolve, reject) => {
    console.log("Cargando...");
    setTimeout(() => {
      rl.question('nombre de la tarea a eliminar: ', (nombre) => {
        const tareaEncontrada = listaTareas.find(tarea => tarea.nombre === nombre);
        if (tareaEncontrada) {
          listaTareas.splice(listaTareas.indexOf(tareaEncontrada), 1);
          console.log(`Tarea ${nombre} eliminada`);
        } else {
          console.log(`No se encontró ninguna tarea con el nombre ${nombre}`);
        }
        resolve(); // Resolvemos la promesa aquí para indicar que la operación ha terminado
      });
    }, 3000);
  });
}

function completarTarea() {
  console.log('Cargando...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      rl.question('nombre de la tarea a completar: ', (nombre) => {
        const tareaEncontrada = listaTareas.find(tarea => tarea.nombre === nombre);
        if (tareaEncontrada) {
          tareaEncontrada.completada = true;
          console.log(`Tarea ${nombre} completada`);
        } else {
          console.log(`No se encontró ninguna tarea con el nombre ${nombre}`);
        }
        resolve(); // Resolvemos la promesa aquí para indicar que la operación ha terminado
      });
    }, 3000);
  });
}

function mostrarTareas() {
  console.log('Cargando...');
  return new Promise((resolve) => {
    setTimeout(() => {
      if (listaTareas.length === 0) {
        console.log('No hay tareas en la lista');
      } else {
        console.log('Lista de tareas:');
        listaTareas.forEach(tarea => {
          console.log(`- ${tarea.nombre} - ${tarea.descripcion} (${tarea.completada ? 'Completada' : 'Pendiente'})`);
        });
      }
      resolve(listaTareas); // Resolvemos la promesa con la lista de tareas
    }, 3000);
  });
}


async function mostrarMenu() {
  console.log(`
Menu
1. Agregar tarea
2. Eliminar tarea
3. Completar tarea
4. Mostrar tareas
5. Salir
`);

  rl.question('Elige una opción: ', async (opcion) => {
    switch (opcion) {
      case '1':
        await agregarTarea();
        mostrarMenu(); // Llamamos nuevamente a mostrarMenu() después de agregar la tarea
        break;
      case '2':
        await eliminarTarea();
        mostrarMenu(); // Llamamos nuevamente a mostrarMenu() después de eliminar la tarea
        break;
      case '3':
        await completarTarea();
        mostrarMenu(); // Llamamos nuevamente a mostrarMenu() después de completar la tarea
        break;
      case '4':
        await mostrarTareas();
        mostrarMenu(); // Llamamos nuevamente a mostrarMenu() después de mostrar la lista de tareas       
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

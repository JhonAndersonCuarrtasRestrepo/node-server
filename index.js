const express = require('express');
const app = express();
const port = 3000;

let listaTareas = [
  { id: 1, nombre: 'Primera Tarea', descripcion: 'Primera descripción de la Tarea', completada: false },
  { id: 2, nombre: 'Segunda Tarea', descripcion: 'Segunda descripción de la Tarea', completada: true },
  { id: 3, nombre: 'Tercera Tarea', descripcion: 'Tercera descripción de la Tarea', completada: false },
  { id: 4, nombre: 'Cuarta Tarea', descripcion: 'Cuarta descripción de la Tarea', completada: true },
  { id: 5, nombre: 'Quinta Tarea', descripcion: 'Quinta descripción de la Tarea', completada: false },
];

app.get('/tareas', (req, res) => {
  res.json(listaTareas);
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:3000/tareas`);
});

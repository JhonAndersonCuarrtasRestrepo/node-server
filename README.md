¿Qué sucedio al usar async y await?

    - Me arrojaba error porque las funciones no estaban declaradas como "async" al momento de usar el metodo await en las funciones de la tarea (agregar, eliminar, mostrar y completar), donde tuve que utilizar el metodo async para que no me arrojara error y el resolve() tenia que usarlo despues de la logica de las funciones  para indicar que la operacion ha terminado, porque si metia la logica dentro del resolve("logica de la funcion"), me arrojaba que el proceso que invocaba (haya sido crear, eliminar, etc) estaba indefinido y no me dejaba correr el programa.

¿Qué sucedio al usar el método then()?

    - No tuve muchos problemas aqui ya que era simplemente llamar como se hace d emanera habitual pero... en el llamado de la sfucniones era distinto la forma a diferencia de async y await ya que en este caso de .then() si habia que generar una funcion en el llamado y el resolve() debia tener la logica de la funcion asi resolve("logica de la funcion").

¿Qué diferencias encontraste entre async, await y el método then()?

    - En el caso de .then() debia usar la logica del dentro del resolve("logica de la funcion") y debia usar una funcion luego para que se puediera mostrar, en cambio con async y wait la logica iba primero y el resolve despues asi: ("logica de la funcion") y luego resolve() y para llamarlo era asi: await nombreDeLaFuncion() y siendo honesto me gusto mas usar el async y el await por mas simplicidad y la forma en que se llamaba la funcion.

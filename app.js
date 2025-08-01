// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función que se ejecuta al hacer clic en el botón "Añadir"
// Su propósito es agregar un nuevo nombre a la lista de amigos
function agregarAmigo() {
  let input = document.getElementById('amigo'); // Obtenemos el campo de entrada
  let nombre = input.value.trim(); // Eliminamos espacios en blanco al inicio y al final

  // Validación: si el campo está vacío, mostramos un mensaje de alerta
  if (!nombre) {
    alert('Por favor, inserte un nombre antes de añadir.');
    return;
  }

  // Si el nombre es válido, lo agregamos al arreglo
  amigos.push(nombre);

  // Limpiamos el campo de entrada y colocamos el cursor nuevamente ahí
  input.value = '';
  input.focus();

  // Actualizamos la lista visible en pantalla
  actualizarLista();
}

// Función que actualiza la lista visible de amigos en la página
function actualizarLista() {
  // Seleccionamos el elemento donde se mostrarán los nombres
  let lista = document.getElementById('listaAmigos');

  // Limpiamos cualquier contenido anterior para evitar duplicados
  lista.innerHTML = '';

  // Recorremos el arreglo "amigos" y por cada nombre:
  amigos.forEach((amigo) => {
    // Creamos un nuevo elemento <li>
    let li = document.createElement('li');
    
    // Asignamos el nombre del amigo como texto
    li.textContent = amigo;
    
    // Añadimos el <li> a la lista en el DOM
    lista.appendChild(li);                
  });
}

// Función que realiza el sorteo de un amigo secreto aleatoriamente
function sortearAmigo() {
  // Validación: si no hay nombres en la lista, mostramos un mensaje
  if (amigos.length === 0) {
    alert('Agrega al menos un nombre antes de sortear.');
    return;
  }

  // Generamos un índice aleatorio válido dentro del arreglo "amigos"
  let indice = Math.floor(Math.random() * amigos.length);

  // Obtenemos el nombre correspondiente al índice aleatorio
  let ganador = amigos[indice];

  // Mostramos el resultado del sorteo en pantalla
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li style="color: green;">El amigo secreto sorteado es: ${ganador}</li>`;

  // Ocultamos la lista de nombres luego del sorteo
  document.getElementById('listaAmigos').style.display = 'none';
}

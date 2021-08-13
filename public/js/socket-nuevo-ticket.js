// Comando para establecer la comunicacion

let socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', () => {
   console.log('Conectado al servidor.');
   
});

socket.on('disconnect', () => {
   console.log('Se perdió la conexión con el servidor.');
});

socket.on('estadoActual', ({ actual }) => {
   label.text(actual);
});

$('button').on('click', () => {
   socket.emit('siguienteTicket', null, (siguienteTicket) => {
      label.text(siguienteTicket);
   });
});

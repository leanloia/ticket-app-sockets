let socket = io();

let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
   window.location = 'index.html';
   throw new Error('El escritorio es necesario');
}
let escritorio = searchParams.get('escritorio');
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', () => {
   socket.emit(
      'atenderTicket',
      {
         escritorio,
      },
      (resp) => {
         if (resp === 'No hay tickets pendientes.') {
            $('small').text(resp);
            alert(resp);
            return;
         }
         $('small').text(resp.numero);
      }
   );
});

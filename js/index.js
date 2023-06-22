 const motos = [
    { modelo: '110cc', marca: 'Yamaha,Crypton', anio: 2019, kilometraje: 5000, color: 'Azul', precio: 250000 },
    { modelo: '190cc', marca: 'Honda,Cb', anio: 2021, kilometraje: 0 , color: 'Negro', precio: 450000 } ,
    { modelo: '1000cc', marca: 'Yamaha,R1', anio: 2019, kilometraje: 15000, color: 'Blanco', precio: 10800000 },
  ];
  
  function mostrarCatalogo() {
    let catalogo = 'Catálogo de motos:\n\n';

// Uso de Map -> Mostrar modelos en mayúsculas 
 const motoModeloEnMayuscula = motos.map((moto) => {
  moto.modelo = moto.modelo.toUpperCase();
  return moto;
 });
  
    for (let index = 0; index < motoModeloEnMayuscula.length; index++) {
      const moto = motos[index];
      catalogo = catalogo + (index + 1) + '. ' + moto.modelo + ' - ' + moto.marca + ' - ' + moto.anio + ' - ' + moto.kilometraje + ' km - ' + moto.color + ' - $' + moto.precio + '\n';
   }
  
    alert(catalogo);

   }
  
   function comprarMoto() {
     const seleccion = parseInt(prompt('Ingrese el número de la moto que desea comprar:')) - 1;
  
    if (seleccion >= 0 && seleccion < motos.length) {
      const motoSeleccionado = motos[seleccion];
  
       const nombre = prompt('Ingrese su nombre completo:');
     const direccion = prompt('Ingrese su dirección de entrega:');
      const tarjetaCredito = prompt('Ingrese el número de su tarjeta de crédito:');
  
      const confirmacion = 'Compra realizada exitosamente.\n\n moto: ' + motoSeleccionado.modelo + ' - ' + motoSeleccionado.marca + '\nNombre: ' + nombre + '\nDirección: ' + direccion + '\nTarjeta de crédito: ' + tarjetaCredito;
  
      alert(confirmacion);
    } else {
       alert('Selección inválida');
 }
  
}
   function simuladorCompraMoto() {
    let opcion = '';
  
     do {
      opcion = prompt('Seleccione una opción:\n\n1. Ver catálogo de motos\n2. Comprar moto\n3. Salir');
  
      switch (opcion) {
     case '1':
       mostrarCatalogo();
        break;
        case '2':
         comprarMoto();
         break;
       case '3':
      alert('Gracias por utilizar nuestra página oficial');
        break;
      default:
         alert('Opción inválida');
          break;
      }
    } while (opcion !== '3');
   }
  
  simuladorCompraMoto();

// obtener elemento del DOM y capturar su evento click
var btnIniciarSimulador = document.getElementById("btnIniciarSimulador");
btnIniciarSimulador.addEventListener("click", simuladorCompraMoto);

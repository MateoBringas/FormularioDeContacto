document.addEventListener('DOMContentLoaded', function() {
    const opciones = document.getElementById('opciones');
    const precioMostrado = document.getElementById('precioMostrado');
  
    opciones.addEventListener('change', function() {
      const opcionSeleccionada = opciones.value;
      let precio = 0;
  
      if (opcionSeleccionada === 'opcion1') {
        precio = 500;
      } else if (opcionSeleccionada === 'opcion2') {
        precio = 1000;
      } else if (opcionSeleccionada === 'opcion3') {
        precio = 1500;
      }
  
      precioMostrado.textContent = `$${precio}`;
    });
  });
  

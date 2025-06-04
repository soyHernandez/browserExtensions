const btns = document.querySelectorAll('.switch');

function handleSwitchClick(event) {

  // Agregar la clase 'active' al botón clicado
  if (event.currentTarget.classList.contains('inactive')) {
      event.currentTarget.classList.remove('inactive');
      event.currentTarget.parentNode.classList.remove('off');
      event.currentTarget.children[0].value = 'active';	
      
  } else {
    event.currentTarget.classList.add('inactive');
    event.currentTarget.parentNode.classList.add('off');
    event.currentTarget.children[0].value = 'inactive';
  }

  // Obtener el ID del botón clicado
  //const id = event.currentTarget.getAttribute('data-id');

  // Mostrar el contenido correspondiente
  //const content = document.querySelector(`.content[data-id="${id}"]`);
  //document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
  //content.style.display = 'block';
}

// Asignar el evento de clic a cada botón
btns.forEach(btn => {
  btn.addEventListener('click', handleSwitchClick);  
});
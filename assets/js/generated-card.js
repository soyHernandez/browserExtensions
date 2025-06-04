const data = [
        { 
            "id": 1,
            "name" : "DevLens",
            "desc": "Quickly inspect page layouts and visualize element boundaries.",
            "icon": "logo-devlens.svg"
        },
        {   
            "id": 2,
            "name" : "StyleSpy",
            "desc": "Instantly analyze and copy CSS from any webpage element.",
            "icon": "logo-style-spy.svg"
        },
        {
            "id": 3,
            "name" : "SpeedBoost",
            "desc": "Optimizes browser resource usage to accelerate page loading.",
            "icon": "logo-speed-boost.svg"
        },
        {   
            "id": 4,
            "name" : "JSONWizard",
            "desc": "Formats, validates, and prettifies JSON responses in-browser.",
            "icon": "logo-json-wizard.svg"
        },
        {
            "id": 5,
            "name" : "TabMaster Pro",
            "desc": "Organizes browser tabs into groups and sessions.",
            "icon": "logo-tab-master-pro.svg"
        },
        {   
            "id": 6,
            "name" : "ViewportBuddy",
            "desc": "Simulates various screen resolutions directly within the browser.",
            "icon": "logo-viewport-buddy.svg"
        },
        {
            "id": 7,
            "name" : "Markup Notes",
            "desc": "Enables annotation and notes directly onto webpages for collaborative debugging.",
            "icon": "logo-markup-notes.svg"
        },
        {
            "id": 8,
            "name" : "GridGuides",
            "desc": "Overlay customizable grids and alignment guides on any webpage.",
            "icon": "logo-grid-guides.svg"
        },
        {
            "id": 9,
            "name" : "Palette Picker",
            "desc": "Instantly extracts color palettes from any webpage.",
            "icon": "logo-palette-picker.svg"
        },
        {   
            "id": 10,
            "name" : "LinkChecker",
            "desc": "Scans and highlights broken links on any page.",
            "icon": "logo-link-checker.svg"
        },
        {
          "id": 11,
            "name" : "DOM Snapshot",
            "desc": "Capture and export DOM structures quickly.",
            "icon": "logo-dom-snapshot.svg"
          },
        {
          "id": 12,
          "name" : "ConsolePlus",
          "desc": "Enhanced developer console with advanced filtering and logging.",
          "icon": "logo-console-plus.svg"
        }
      ]
      function handleSwitchClick(event) {
        const  cardContainer = document.getElementById('cardContainer');
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
  const id = event.currentTarget.children[0].getAttribute('id');
  
  
  // Mostrar el contenido correspondiente
  //const content = document.querySelector(`.content[data-id="${id}"]`);
  //document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
  //content.style.display = 'block';
}

// Función para crear los cuadros y mostrarlos
function showData(jsonData) {
  jsonData.forEach(item => {
    // Crear el contenedor card
    const card = document.createElement('div');
    card.className = 'card';
    const infocard = document.createElement('div');
    infocard.className = 'info-card';
    // Crear contenido con la info
    const title = document.createElement('h2');
      title.textContent = item.name;

      const desc = document.createElement('p');
      desc.textContent = item.desc;
      
      const img = document.createElement('img');
      img.src = `assets/images/${item.icon}`;
      
      const btnSwitch = document.createElement('div');
      btnSwitch.className = 'btn-container';
      const intoBtn = document.createElement('div')
      intoBtn.className = 'switch';
      const inputBtn = document.createElement('input');
      inputBtn.type = 'checkbox';
      inputBtn.value = 'active';
      inputBtn.setAttribute('id', item.id);
      inputBtn.className = 'checked'
      intoBtn.appendChild(inputBtn);
      btnSwitch.appendChild(intoBtn);  
      // Agregar al card
    const principal = document.createElement('div');
      principal.className = 'principal';
      infocard.appendChild(title);
      infocard.appendChild(desc);
      principal.appendChild(img);
      principal.appendChild(infocard);
      btnContainer = document.createElement('div');
      btnContainer.className = 'btnsContainer';
      btnRemove = document.createElement('button');      
      btnRemove.className = 'btn-remove';
      btnRemove.textContent = 'Remove';
      btnRemove.className = 'btn-remove';
      btnContainer.appendChild(btnRemove);
      btnContainer.appendChild(btnSwitch);
      card.appendChild(principal);
      card.appendChild(btnContainer);
      // Asignar el evento de clic al botón
      intoBtn.addEventListener('click', handleSwitchClick);
      // Añadir card al body o contenedor principal

      cardContainer.appendChild(card);
    });
  }

  // Función para gestionar la clase active
  function toggleActive(commonClass, selectedElement) {
    // Obtener todos los elementos con la clase común
    const elements = document.querySelectorAll('.' + commonClass);
    // Buscar si alguno tiene la clase active y verificar si es el seleccionado
    let activeElement = null;
    elements.forEach(el => {
      if (el.classList.contains('active')) {
        activeElement = el;
      }
    });
    // Si el elemento seleccionado ya tiene la clase active, no hacer nada
    if (activeElement === selectedElement) {
      return;
    }
    // Si no, quitar la clase active de todos y asignarla al seleccionado
    elements.forEach(el => el.classList.remove('active'));
    selectedElement.classList.add('active');
  }

const filterItem = document.querySelectorAll(".filter-item");
const filter = document.getElementById("filter");
filterItem.forEach(item => {
  item.addEventListener("click", function() {
    // Remover la clase 'active' de todos los elementos
    filterItem.forEach(el => el.classList.remove("active"));
    // Agregar la clase 'active' al elemento clicado
    this.classList.add("active");
    // Llamar a la función toggleActive con la clase común y el elemento clicado
    toggleActive('filter-item', this);
    let selectedFilter = document.querySelector('.active');
    if(selectedFilter.textContent === 'Inactive')
      {
        document.querySelectorAll('.card').forEach(card => {
          if (card.querySelector('.switch input').value === 'inactive') {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }else if(selectedFilter.textContent === 'Active')
      {
        document.querySelectorAll('.card').forEach(card => {
          if (card.querySelector('.switch input').value === 'active') {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }
      else if(selectedFilter.textContent === 'All')
      {
        document.querySelectorAll('.card').forEach(card => {
          card.style.display = 'flex';
        });
      }
  });
});

const btnRemoveCard = document.querySelectorAll('.btn-remove');
btnRemoveCard.forEach(btn => {
  btn.addEventListener('click', function() {
    // Eliminar el card padre del botón clicado
    const card = this.closest('.card');
    if (card) {
      card.remove();
    }
  });
})


// Llamar a la función con los datos
showData(data);
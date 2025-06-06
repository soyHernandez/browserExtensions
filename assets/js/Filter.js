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

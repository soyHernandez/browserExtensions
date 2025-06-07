const btnDarkMode = document.getElementById('toggleMode');
function toggleDarkMode(){
      btnDarkMode.classList.toggle('btn-dark-mode');
    const btnRemove = document.querySelectorAll('.btn-remove');
    btnRemove.forEach(btn => {
    btn.classList.toggle('btn-remove-dark-mode');
    });
    const filterItem = document.querySelectorAll('.filter-item');
    filterItem.forEach(item => {    
        item.classList.toggle('filter-container-dark-mode');
    })
    const title = document.querySelector('h1');
    title.classList.toggle('title-dark-mode');
    const logo = document.getElementById('text');
    logo.classList.toggle('logo-dark-mode');
  const body = document.body;
  const header = document.querySelector('header');
  const cards = document.querySelectorAll('.card'); 
  const isDarkMode = body.classList.toggle('dark-mode');
    header.classList.toggle('card-dark-mode');
  cards.forEach(card => {
    card.classList.toggle('card-dark-mode');
    })
    if (isDarkMode) {
            btnDarkMode.children[1].style.display = 'block';
            btnDarkMode.children[0].style.display = 'none';
    }else {
            btnDarkMode.children[1].style.display = 'none';
            btnDarkMode.children[0].style.display = 'block';
    }	
  // Save the mode in localStorage
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

  
}
// Check localStorage for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') { 
  toggleDarkMode();
}

btnDarkMode.addEventListener('click', toggleDarkMode);
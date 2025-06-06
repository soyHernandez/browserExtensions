    // Esperar que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
      const btnRemoveCard = document.querySelectorAll('.btn-remove');
      btnRemoveCard.forEach(btn => {
        btn.addEventListener('click', function(event) {
          event.preventDefault();
          const card = event.target.closest('.card');
          if (card) {
            card.remove();
          }
        });
      });
    });
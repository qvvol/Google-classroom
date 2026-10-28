function filterGames() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.getElementsByClassName('game-card');

  for (let card of cards) {
    const titleElement = card.getElementsByTagName('h3')[0];
    const title = titleElement ? titleElement.textContent.toLowerCase() : "";
    card.style.display = title.includes(input) ? "" : "none";
  }
}

function filterCategory(category, event) {
  const cards = document.getElementsByClassName('game-card');
  const buttons = document.getElementsByClassName('filter-btn');
  
  for (let btn of buttons) {
    btn.classList.remove('active');
  }
  event.currentTarget.classList.add('active');

  for (let card of cards) {
    const cardCategory = card.getAttribute('data-category');
    card.style.display = (category === 'all' || cardCategory === category) ? "" : "none";
  }
}

function launchGame(url) {
  // Use direct target navigation windowing to break framing security filters
  const win = window.open(url, '_blank');
  if (!win) {
    alert("Pop-up blocked! Allow popups to unlock deployment.");
  }
}

window.addEventListener('keydown', function(e) {
  if (e.key.toLowerCase() === 'p') {
    window.location.replace('https://classroom.google.com');
  }
});

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
  const win = window.open('about:blank', '_blank');
  if (!win) {
    alert("Pop-up blocked! Allow popups to unlock your games.");
    return;
  }
  
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  win.document.body.style.backgroundColor = '#000';
  
  win.document.title = "Google Docs";
  const link = win.document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = 'https://gstatic.com';
  win.document.head.appendChild(link);
  
  const iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = url;
  
  win.document.body.appendChild(iframe);
}

window.addEventListener('keydown', function(e) {
  if (e.key.toLowerCase() === 'p') {
    window.location.replace('https://classroom.google.com');
  }
});

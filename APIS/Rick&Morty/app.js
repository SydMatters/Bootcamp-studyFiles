var currentPage = 1;
const maxPage = 34; 

async function getCharacters(type, page) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/${type}?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error); 
  }
}

function updateButtons() {
  const prevButton = document.querySelector('.prev-button');
  prevButton.disabled = currentPage <= 1;
  const nextButton = document.querySelector('.next-button');
  nextButton.disabled = currentPage >= maxPage;
}

function nextPage() {
  const nextButton = document.querySelector('.next-button');
  nextButton.addEventListener('click', () => {
    if (currentPage < maxPage) {
      currentPage++;
      const container = document.querySelector('.character-container');
      container.innerHTML = '';
      createCharacters(currentPage);
      updateButtons();
    }
  });
}

function previousPage() {
  const previousButton = document.querySelector('.prev-button');
  previousButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      const container = document.querySelector('.character-container');
      container.innerHTML = '';
      createCharacters(currentPage);
      updateButtons();
    }
  });
}

async function createCharacters(page) {
  const characters = await getCharacters('character', page);
  const results = characters.results;
  const container = document.querySelector('.character-container');
  results.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" />
      <div class="card-text-container">
        <h2><b>Name:</b> ${character.name}</h2>
        <h3><b>Specie:</b> ${character.species}</h3>
      </div>
    `;
    container.appendChild(card);
  });
}

createCharacters(currentPage);
updateButtons();
nextPage();
previousPage();


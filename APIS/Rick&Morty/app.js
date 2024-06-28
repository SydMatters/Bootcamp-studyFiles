async function getCharacters(type) {
  try{
    const response = await fetch(`https://rickandmortyapi.com/api/${type}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch(error){
    console.log(error); 
  }
}

function createCharacters(){
  const characters = getCharacters('character');
  characters.then(data => {
    const results = data.results;
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
      console.log(results);
    })
    }
)};

createCharacters();
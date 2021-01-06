const container = document.querySelector("#container");
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i < 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const crImg  = document.createElement("img");
    crImg.src = `${baseUrl}${i}.png`

    pokemon.appendChild(crImg);
    pokemon.appendChild(label);
    container.append(pokemon);
}
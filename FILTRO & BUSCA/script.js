const animals = [
  { name: 'Jha Phod Al Mossar', breed: 'Labrador', species: 'Cão', color: 'Marrom', age: 3, size: 'Pequeno', location: 'São Paulo', image: 'fotos/cachorro1.png' },
  { name: 'Mimi', breed: 'Siamês', species: 'Gato', color: 'Branco', age: 2, size: 'Pequeno', location: 'Rio de Janeiro', image: 'fotos/gato1.png' },
  { name: 'Max', breed: 'Salsicha', species: 'Cão', color: 'Dourado', age: 4, size: 'Pequeno', location: 'São Paulo', image: 'fotos/cachorro2.png' },
  { name: 'Luna', breed: 'Laranja', species: 'Gato', color: 'Laranja', age: 1, size: 'Médio', location: 'Rio de Janeiro', image: 'fotos/gato2.png' },
  { name: 'Rocky', breed: 'Fuçudo', species: 'Cão', color: 'Branco', age: 2, size: 'Médio', location: 'Brasília', image: 'fotos/cachorro3.png' },
  { name: 'Whiskers', breed: 'Coitadonildo', species: 'Gato', color: 'Laranja', age: 1, size: 'Grande', location: 'Belo Horizonte', image: 'fotos/gato3.png' },
  { name: 'Charlie', breed: 'Bull terrier', species: 'Cão', color: 'Branco', age: 2, size: 'Médio', location: 'Fortaleza', image: 'fotos/cachorro4.png' },
  { name: 'Simba', breed: 'Angorá', species: 'Gato', color: 'Braco e Laranja', age: 64, size: 'Médio', location: 'Salvador', image: 'fotos/gato4.png' },
  { name: 'Pazuzu', breed: 'Beagle', species: 'Cão', color: 'Tricolor', age: 3045, size: 'Grande', location: 'Abismo', image: 'fotos/cachorro5.png' },
  { name: 'Misty', breed: 'Ragdoll', species: 'Gato', color: 'Branco', age: 1, size: 'Pequeno', location: 'Manaus', image: 'fotos/gato5.png' },
  { name: 'Nagini', breed: 'Fancy', species: 'Cobra', color: 'Verde', age: 5, size: 'Médio', location: 'Rio de Janeiro', image: 'fotos/cobra.png' },
  { name: 'Medo Abundante de Todas as Verdades', breed: 'Desconhecida', species: 'Desconhecida', color: 'Negra', age: '18B', size: 'Grande', location: 'Localização Desconhecida', image: 'fotos/abismo.png' },
  { name: 'Carlinhos', breed: 'Puro Sangue Árabe', species: 'Cavalo', color: 'Marrom', age: 12, size: 'Pequeno', location: 'Rio de Janeiro', image: 'fotos/cavalo.jpeg' },
  // Adicione mais animais aqui...
];

function searchAnimals() {
  const breed = document.getElementById('breed').value.toLowerCase();
  const species = document.getElementById('species').value.toLowerCase();
  const color = document.getElementById('color').value.toLowerCase();
  const age = document.getElementById('age').value;
  const size = document.getElementById('size').value.toLowerCase();
  const location = document.getElementById('location').value.toLowerCase();

  const filteredAnimals = animals.filter(animal => {
    return (!breed || animal.breed.toLowerCase().includes(breed)) &&
      (!species || animal.species.toLowerCase().includes(species)) &&
      (!color || animal.color.toLowerCase().includes(color)) &&
      (!age || animal.age == age) &&
      (!size || animal.size.toLowerCase().includes(size)) &&
      (!location || animal.location.toLowerCase().includes(location));
  });

  displayAnimals(filteredAnimals);
}

function displayAnimals(animals) {
  const animalsContainer = document.getElementById('animalsContainer');
  animalsContainer.innerHTML = '';

  animals.forEach(animal => {
    const animalCard = document.createElement('div');
    animalCard.className = 'animal-card';
    animalCard.innerHTML = `
      <img src="${animal.image}" alt="Foto de ${animal.name}">
      <h3>${animal.name}</h3>
      <p>Raça: ${animal.breed}</p>
      <p>Espécie: ${animal.species}</p>
      <p>Cor: ${animal.color}</p>
      <p>Idade: ${animal.age} anos</p>
      <p>Tamanho: ${animal.size}</p>
      <p>Localização: ${animal.location}</p>
    `
    const detailsButton = document.createElement('button');
    detailsButton.innerText = 'Detalhes';
    detailsButton.addEventListener('click', () => openModal(animal));
    animalCard.appendChild(detailsButton);
    ;
    animalsContainer.appendChild(animalCard);
  });
}

// Inicializar com todos os animais
displayAnimals(animals);

function openModal(animal) {
  const modal = document.getElementById('modal');
  const modalAnimalInfo = document.getElementById('modal-animal-info');
  
  modalAnimalInfo.innerHTML = `
    <img src="${animal.image}" alt="Foto de ${animal.name}">
    <h2>${animal.name}</h2>
    <p>Raça: ${animal.breed}</p>
    <p>Espécie: ${animal.species}</p>
    <p>Cor: ${animal.color}</p>
    <p>Idade: ${animal.age} anos</p>
    <p>Tamanho: ${animal.size}</p>
    <p>Localização: ${animal.location}</p>
    <p>Descrição: </p>
  `;

  modal.style.display = 'block';

  // Fechar o modal quando o botão 'x' for clicado
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => closeModal());

  // Fechar o modal quando clicar fora do modal
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      closeModal();
    }
  });

  // Adicionar ação para o botão "Tenho Interesse"
  const interestButton = document.getElementById('interestButton');
  interestButton.addEventListener('click', () => handleInterest(animal));
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Função para lidar com o interesse em adotar o animal
function handleInterest(animal) {
  // Aqui você pode adicionar a lógica para lidar com o interesse em adotar o animal
  alert(`Você demonstrou interesse em adotar ${animal.name}!`);
}
document.getElementById('petImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type !== 'image/png') {
      alert('Por favor, envie apenas imagens no formato .png');
      event.target.value = ''; // Clear the input value
    }
  });
  
  function submitForm() {
    const petName = document.getElementById('petName').value;
    const petAge = document.getElementById('petAge').value;
    const petBreed = document.getElementById('petBreed').value;
    const petSpecies = document.getElementById('petSpecies').value;
    const petWeight = document.getElementById('petWeight').value;
    const petOwner = document.getElementById('petOwner').value;
    const petContact = document.getElementById('petContact').value;
    const petImage = document.getElementById('petImage').files[0];
  
    if (!petName || !petAge || !petBreed || !petSpecies || !petWeight || !petOwner || !petContact || !petImage) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    const confirmationDiv = document.getElementById('confirmation');
    const confirmImage = document.getElementById('confirmImage');
    const confirmName = document.getElementById('confirmName');
    const confirmBreed = document.getElementById('confirmBreed');
    const confirmAge = document.getElementById('confirmAge');
    const confirmWeight = document.getElementById('confirmWeight');
  
    const reader = new FileReader();
    reader.onload = function(e) {
      confirmImage.src = e.target.result;
    };
    reader.readAsDataURL(petImage);
  
    confirmName.textContent = `Nome: ${petName}`;
    confirmBreed.textContent = `Raça: ${petBreed}`;
    confirmAge.textContent = `Idade: ${petAge} anos`;
    confirmWeight.textContent = `Peso: ${petWeight} kg`;
  
    confirmationDiv.style.display = 'flex';
  }
  
  function closeConfirmation() {
    document.getElementById('confirmation').style.display = 'none';
  }
  
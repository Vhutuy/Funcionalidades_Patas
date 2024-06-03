function registerUser() {
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    const userPhone = document.getElementById('userPhone').value;
    const userBirthDate = document.getElementById('userBirthDate').value;
    const userGender = document.getElementById('userGender').value;
    const userAddress = document.getElementById('userAddress').value;
    const userChildren = document.getElementById('userChildren').value;
    const userApartment = document.getElementById('userApartment').value;
    const userOutdoorArea = document.getElementById('userOutdoorArea').value;
    const userExperience = document.getElementById('userExperience').value;
    const userPetPreference = document.getElementById('userPetPreference').value;
    const userPetSize = document.getElementById('userPetSize').value;
    const userAvailability = document.getElementById('userAvailability').value;
    const userMotivation = document.getElementById('userMotivation').value;
    const userReferences = document.getElementById('userReferences').value;
    const userAdoptionHistory = document.getElementById('userAdoptionHistory').value;
    const userHomePhotos = document.getElementById('userHomePhotos').files;
  
    // Processamento das fotos da residência
    let photos = [];
    for (let i = 0; i < userHomePhotos.length; i++) {
      photos.push(userHomePhotos[i]);
    }
  

    console.log({
      userName,
      userEmail,
      userPassword,
      userPhone,
      userBirthDate,
      userGender,
      userAddress,
      userChildren,
      userApartment,
      userOutdoorArea,
      userExperience,
      userPetPreference,
      userPetSize,
      userAvailability,
      userMotivation,
      userReferences,
      userAdoptionHistory,
      photos
    });
  
    alert("Usuário cadastrado com sucesso!");
  }

  function loginUser() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    console.log({
      loginEmail,
      loginPassword
    });
  
    alert("Login realizado com sucesso!");
  }
const messagesContainer = document.getElementById('chatMessages');

function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const userMessage = chatInput.value;

  if (userMessage.trim() === '') {
    return;
  }

  displayMessage(userMessage, 'user');
  chatInput.value = '';

  // Mensagem predefinida
  const predefinedMessage = "Gostaria de saber mais sobre o processo de adoção?";
  setTimeout(() => {
    displayMessage(predefinedMessage, 'supplier');
  }, 1000);

  // Resposta do fornecedor
  const supplierResponse = "Parabéns! Estamos entusiasmados em informar que você foi um dos três candidatos selecionados com base no seu perfil. Gostaríamos de conhecer melhor sua residência e entender mais sobre sua experiência no cuidado de animais. Sua dedicação e interesse em proporcionar um lar amoroso são extremamente importantes para nós. Poderia nos contar mais sobre o ambiente em que o pet viverá e compartilhar suas motivações e experiências anteriores que o levaram a ter interesse na adoção? Aguardamos ansiosamente para saber mais sobre você.";
  setTimeout(() => {
    displayMessage(supplierResponse, 'supplier');
  }, 3000);
}

function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  const contentElement = document.createElement('div');
  contentElement.classList.add('content');
  contentElement.textContent = message;
  messageElement.appendChild(contentElement);
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
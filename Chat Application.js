function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
  
    if (message !== "") {
      var chatMessages = document.getElementById("chat-messages");
      var messageElement = document.createElement("p");
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
  
      // Clear input after sending message
      messageInput.value = "";
  
      // Scroll to bottom of chat messages
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
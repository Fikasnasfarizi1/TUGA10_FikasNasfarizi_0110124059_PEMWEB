const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatboxMessages = document.getElementById('chatbox-messages');
const closeBtn = document.getElementById('close-btn');

function addMessageToChat(message, isUserMessage = true) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(isUserMessage ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatboxMessages.appendChild(messageElement);

    chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
}

function sendMessage() {
    const message = messageInput.value.trim();

    if (message) {
        addMessageToChat(message); 
        messageInput.value = ''; 
        setTimeout(() => {
            addMessageToChat("apa kabar?", false);
        }, 1000);
    }
}

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

closeBtn.addEventListener('click', function() {
    document.getElementById('chatbox').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('chatbox').style.display = 'flex';
});

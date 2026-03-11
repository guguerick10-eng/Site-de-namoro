
// Temporizador para mostrar o tempo desde o início do namoro
const startDate = new Date('2025-04-10');
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const hours = new Date(diff).getHours();
    const minutes = new Date(diff).getMinutes();
    const seconds = new Date(diff).getSeconds();

    timerElement.textContent = \`Tempo juntos: \${years} anos, \${months} meses, \${days} dias, \${hours} horas, \${minutes} minutos, \${seconds} segundos\`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Função para salvar a mensagem de Jéssica
function saveMessage() {
    const message = document.getElementById('message').value;
    localStorage.setItem('message', message);
    document.getElementById('last-message').textContent = 'Última mensagem: ' + message;
}

// Mostrar a última mensagem de Jéssica
const lastMessage = localStorage.getItem('message');
if (lastMessage) {
    document.getElementById('last-message').textContent = 'Última mensagem: ' + lastMessage;
}

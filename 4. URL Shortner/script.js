const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);
function shortenUrl() {
    let originalUrl = document.getElementById("originalUrl").value;
    let apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    let shortenedUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            shortenedUrlTextarea.value = data;
            // Copy shortened URL to clipboard
            navigator.clipboard.writeText(data);
            // Show message
            showMessage("URL shortened and copied to clipboard!");
        })
        .catch(error => {
            shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
        });
}

function showMessage(message) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
    setTimeout(() => {
        document.body.removeChild(messageElement);
    }, 3000);
}


reloadBtn.addEventListener('click', () => {
    location.reload();
});

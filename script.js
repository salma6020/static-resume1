function displayGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var nameElement = document.getElementById("name");
    if (nameElement) {
        nameElement.innerHTML = "Salma Ali";
    }
}
window.onload = displayGreeting;


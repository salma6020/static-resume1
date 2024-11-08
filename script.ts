function displayGreeting(): void{
    const now = new Date();
    const hour = now.getHours();
    

   

    const nameElement = document.getElementById("name");
    if (nameElement) {
        nameElement.innerHTML =`Salma Ali;`
    }
}

window.onload = displayGreeting;
const smartLogo = document.querySelector("#smart-logo")
smartLogo.src = "https://tech-it-smart.github.io/assets/logo.png"

alert("Under Development")

function cardContent() {
    const texts = document.querySelectorAll(".card-text")
    for (const text of texts) {
        console.log(text);
        text.innerHTML = "Under Development"
    }
    
    const dates = document.querySelectorAll(".card-date")
    for (const d of dates) {
        d.innerText = "07-05-2023"
    }
}

const cards = document.querySelectorAll(".cards")
for (const card of cards) {
    console.log(card);
    card.addEventListener("click", cardContent)
}

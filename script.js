// Storing Accessing Dates
const pageTitle = document.title
const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
}) + " - " + new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})
localStorage.setItem(pageTitle, currentDate)

// Notification
if (Notification.permission === "granted") {
    showNotification()
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            showNotification()
        }
    })
}
function showNotification() {
    if ("Notification" in window || "serviseWorker" in navigator) {
        const notify = new Notification("Alert", {
            body: "Notification Body",
            icon: "/assets/logo-small.png"
        })
        notify.onclick = function() {
            location.href = "https://discord.gg/HEbRJVaqp2"
            console.log("Notification Clicked")
            localStorage.setItem("Notification clicked", currentDate)
        }
    }
    console.log(" Notification Permission:", Notification.permission)
}


// Like Button Feature
const likeButtons = document.querySelectorAll(".card-like")
likeButtons.forEach(element => {
    element.addEventListener("click", likeButtonClick)
})

function likeButtonClick(cardId) {
    console.log(MouseEvent.target);
    const likedCards = getLikedCards()

    if (likedCards.includes(cardId)) {
        const updateLikedCards = likedCards.filter(id => id !== cardId)
        setLikedCards(updateLikedCards)
    } else {
        likedCards.push(cardId)
        setLikedCards(likedCards)
    }
}

function getLikedCards() {
    const likedCards = localStorage.getItem("likedCards")
    return likedCards ? JSON.parse(likedCards) : []
}

function setLikedCards() {
    localStorage.setItem("likedCards", JSON.stringify(likedCards))
}



const shareButtons = document.querySelectorAll(".fa-share-from-square")
shareButtons.forEach(shareButton => {
    shareButton.addEventListener("click", copyUrl)
})

function copyUrl() {
    navigator.clipboard.writeText(window.location.href)
    console.log(shareButtons)
    console.log(shareButton)
}





const allSolutionsCard = document.querySelector("#all-solutions")
allSolutionsCard.addEventListener("click", allSolutions)
function allSolutions() {
    location.href="/solutions/"
}



const allToolsCard = document.querySelector("#all-tools")
allToolsCard.addEventListener("click", allTools)
function allTools() {
    location.href="/tools/"
}


/*
const allWebDevCard = document.querySelector("#all-web-dev-cards")
allWebDevCard.addEventListener("click", allWebDevTopics)
function allWebDevTopics() {
    location.href="/web-dev/"
}
*/



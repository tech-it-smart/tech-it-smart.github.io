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
    console.log(Notification.permission)
}
const accessLogs = localStorage.getItem(pageTitle, currentDate)
console.log(accessLogs)




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



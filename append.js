// Header
const header = document.querySelector("header");

// Logo
const smartLogo = document.createElement("img");
smartLogo.setAttribute("src", "./assets/logo.png");
smartLogo.setAttribute("id", "smart-logo");
smartLogo.setAttribute("alt", "Our Logo");
header.appendChild(smartLogo);

smartLogo.addEventListener("click", homePage)

function homePage() {
    location.href = "https://tech-it-smart.github.io"
}

// Navigation
const navbar = document.createElement("nav");
navbar.setAttribute("id", "header-navbar");

// Home
const navHome = document.createElement("a");
navHome.setAttribute("class", "link-header");
navHome.setAttribute("href", "https://tech-it-smart.github.io/");
navHome.innerHTML = "Home <span class='nav-underline'></span>"
navbar.appendChild(navHome);

// Solutions
const navSolutions = document.createElement("a");
navSolutions.setAttribute("class", "link-header");
navSolutions.setAttribute("href", "https://tech-it-smart.github.io/solutions/");
navSolutions.innerHTML = "Solutions <span class='nav-underline'></span>"
navbar.appendChild(navSolutions);

// Tools
const navTools = document.createElement("a");
navTools.setAttribute("class", "link-header");
navTools.setAttribute("href", "https://tech-it-smart.github.io/tools/");
navTools.innerHTML = "Tools <span class='nav-underline'></span>"
navbar.appendChild(navTools);

// Learn WebDev
const navLearnWebDev = document.createElement("a");
navLearnWebDev.setAttribute("class", "link-header");
navLearnWebDev.setAttribute("href", "https://tech-it-smart.github.io/web-dev/");
navLearnWebDev.innerHTML = "Web Dev <span class='nav-underline'></span>"
navbar.appendChild(navLearnWebDev);

// About Us
const navAboutUs = document.createElement("a");
navAboutUs.setAttribute("class", "link-header");
navAboutUs.setAttribute("href", "https://tech-it-smart.github.io/about-us.html");
navAboutUs.innerHTML = "About Us <span class='nav-underline'></span>"
navbar.appendChild(navAboutUs);

header.appendChild(navbar);

// Search
const searchBox = document.createElement("div");
searchBox.setAttribute("id", "search-box");

// Search Bar
const searchBar = document.createElement("input");
searchBar.setAttribute("type", "search");
searchBar.setAttribute("id", "search-bar");
searchBar.setAttribute("placeholder", "Search");
searchBox.appendChild(searchBar);

header.appendChild(searchBox);

// Login
const loginButton = document.createElement("button");
loginButton.setAttribute("id", "login-btn");
loginButton.textContent = "Login";
header.appendChild(loginButton);

// Footer
const footer = document.querySelector("footer")

// Footer-Top
const footerTop = document.createElement("div")
footerTop.setAttribute("id", "footer-top")

// Footer Top Left 
const footerTopLeft = document.createElement("div")
footerTopLeft.setAttribute("id", "footer-top-left")

// Discord
const discordChannelButton = document.createElement("a")
discordChannelButton.setAttribute("href", "https://discord.gg/HEbRJVaqp2")
discordChannelButton.setAttribute("id", "discord-channel-btn")
discordChannelButton.setAttribute("target", "_blank")
discordChannelButton.setAttribute("title", "Post Your Issue Now")
discordChannelButton.textContent= "Ask Your Query on Discord"
footerTopLeft.appendChild(discordChannelButton)

// Contact Us 
const contactUs = document.createElement("a")
contactUs.setAttribute("href", "contact-us.html")
contactUs.setAttribute("class", "footer-nav")
contactUs.innerHTML = "Contact Us <span class='nav-underline'></span>"
footerTopLeft.appendChild(contactUs)

footerTop.appendChild(footerTopLeft)

// Footer Logo 
const footerLogo = document.createElement("img")
footerLogo.setAttribute("src", "./assets/logo.png")
footerLogo.setAttribute("id", "footer-logo")
footerTop.appendChild(footerLogo)

footerLogo.addEventListener("click", homePage)

// Footer Top Right
const footerTopRight = document.createElement("div")
footerTopRight.setAttribute("id", "footer-top-right")

// Promotion Page Link
const promotiomPage = document.createElement("a")
promotiomPage.setAttribute("href", "promotion.html")
promotiomPage.setAttribute("class", "footer-nav")
promotiomPage.setAttribute("target", "_blank")
promotiomPage.innerHTML = "Promote Yourself Here <span class='nav-underline'></span>"
footerTopRight.appendChild(promotiomPage)

// Privacy Policy
const privacyPolicy = document.createElement("a")
privacyPolicy.setAttribute("href", "privacy-policy.html")
privacyPolicy.setAttribute("class", "footer-nav")
privacyPolicy.innerHTML = "Privacy Policy <span class='nav-underline'></span>"
footerTopRight.appendChild(privacyPolicy)

footerTop.appendChild(footerTopRight)

footer.appendChild(footerTop)

// Footer Bottom
const footerBottom = document.createElement("div")
footerBottom.setAttribute("id", "footer-bottom")

// Footer Navigation 
const footerNav = document.createElement("nav")
footerNav.setAttribute("id", "footer-social-media")

// YouTube
const navYouTube = document.createElement("a")
navYouTube.setAttribute("href", "https://www.youtube.com/@Techitsmartofficial")
navYouTube.setAttribute("class", "social-link")
navYouTube.setAttribute("title", "Youtube")
navYouTube.innerHTML = '<i class="fa-brands fa-youtube" style="color: #ff0000;"></i>'
footerNav.appendChild(navYouTube)

// Discord
const navDiscord = document.createElement("a")
navDiscord.setAttribute("href", "https://discord.gg/Vg5vEJj6")
navDiscord.setAttribute("class", "social-link")
navDiscord.setAttribute("title", "Discord")
navDiscord.innerHTML = '<i class="fa-brands fa-discord" style="color: #5865f2;"></i>'
footerNav.appendChild(navDiscord)

// Instagram
const navInstagram = document.createElement("a")
navInstagram.setAttribute("href", "https://www.instagram.com/techitsmartofficial/")
navInstagram.setAttribute("class", "social-link")
navInstagram.setAttribute("title", "Instagram")
navInstagram.innerHTML = '<i class="fa-brands fa-instagram" style="color: #cd00c0;"></i>'
footerNav.appendChild(navInstagram)

// Telegram
const navTelegram = document.createElement("a")
navTelegram.setAttribute("href", "https://t.me/TechITsmart")
navTelegram.setAttribute("class", "social-link")
navTelegram.setAttribute("title", "Telegram")
navTelegram.innerHTML = '<i class="fa-brands fa-telegram" style="color: #1fa4df;"></i>'
footerNav.appendChild(navTelegram)

// LinkedIn
const navLinkedIn = document.createElement("a")
navLinkedIn.setAttribute("href", "https://www.linkedin.com/company/tech-it-smart/")
navLinkedIn.setAttribute("class", "social-link")
navLinkedIn.setAttribute("title", "LinkedIn")
navLinkedIn.innerHTML = '<i class="fa-brands fa-linkedin" style="color: #307cae;"></i>'
footerNav.appendChild(navLinkedIn)

// Gmail
const navGmail = document.createElement("a")
navGmail.setAttribute("href", "mailto:info.techitsmart@gmail.com")
navGmail.setAttribute("class", "social-link")
navGmail.setAttribute("title", "Gmail")
navGmail.innerHTML = '<i class="fa-solid fa-at" style="color: #307cae;"></i>'
footerNav.appendChild(navGmail)

footerBottom.appendChild(footerNav)

// Footer End
const footerEnd = document.createElement("div")
footerEnd.setAttribute("id", "footer-end")

// Current Year
const currentYear = new Date().getFullYear()

// Copyright
const copyright = document.createElement("div")
copyright.setAttribute("id", "copyright")
copyright.innerHTML = "&copy; Tech IT Smart " + currentYear
footerEnd.appendChild(copyright)

// Version
const siteVersion = document.createElement("div")
siteVersion.setAttribute("id", "version")
siteVersion.textContent = "v2.0"
footerEnd.appendChild(siteVersion)

footerBottom.appendChild(footerEnd)

footer.appendChild(footerBottom)

// Preloader
var  preload = document.getElementById("preloader");
function loader() {
    preload.remove();
}

// Ad close
function closead() {
  document.getElementById('card-ad').remove();
}

// Theme Switcher
const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});

document.onload = setTheme();


// Version in Footer
document.querySelector(".version").innerHTML = "v1.8"

// Copyright in Footer
document.querySelector(".copyright").innerHTML = "&copy; 2023 Tech IT Smart";

// Logo redirecting to Home Page
function logoHome() {
  location.href="https://tech-it-smart.github.io/"
}

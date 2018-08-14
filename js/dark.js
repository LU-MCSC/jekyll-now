function toggleDark() {
  var label    = document.getElementById("label-theme")
  var checkbox = document.getElementById("checkbox-theme");

  if (checkbox.checked) {
    label.innerText = "Light Theme";
    document.body.classList.add("dark");
    persist("dark");
  } else {
    label.innerText = "Dark Theme";
    document.body.classList.remove("dark");
    persist("light");
  }

}

function persist(theme) {
  localStorage.setItem('theme', theme);
}

function setTheme() {
  var theme = localStorage.getItem('theme');
  var checkbox = document.getElementById("checkbox-theme");

  if (theme == "dark") {
    console.log("Dark");
    checkbox.checked = true;
    toggleDark();
  } else if (theme == "light") {
    console.log("Light");
    checkbox.checked = false;
    toggleDark();
  }
    
}

document.getElementById("checkbox-theme").addEventListener("click", toggleDark);
window.addEventListener("DOMContentLoaded", setTheme);

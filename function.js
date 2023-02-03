const APIKEY = "63d38cac3bc6b255ed0c435d";

function userFunction() {
  document.getElementById("userDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function settingsFunction() {
  document.getElementById("settingDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".setting-dropdown")) {
    var dropdowns = document.getElementsByClassName("setting");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

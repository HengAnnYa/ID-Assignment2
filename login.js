const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});


toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

};

$(document).ready(function () {
  const APIKEY = "63d38cac3bc6b255ed0c435d";

  $("#contact-submit").on("click", function (e) {
    e.preventDefault();

    let usernameN = $("#username").val();
    let passwordI = $("#password").val();

    if (usernameN == "") {
      window.alert("Username field is empty.");
    } else if (passwordI == "") {
      window.alert("Password field is empty.");
    } else {
      window.alert("Submit successful. Thanks for signing up!");
    }

    let jsondata = {
      username: usernameN,
      password: passwordI,
    };
    console.log(jsondata);

    let settings = {
      async: true,
      crossDomain: true,
      url: "https://leaderboard-6a74.restdb.io/rest/user-info",
      method: "GET", //[cher] we will use post to send info
      headers: {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      }
    }
});
});

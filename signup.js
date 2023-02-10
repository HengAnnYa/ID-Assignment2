$(document).ready(function () {
  const APIKEY = "63d38cac3bc6b255ed0c435d";

  $("#contact-submit").on("click", function (e) {
    e.preventDefault();

    let nameS = $("#sign-up-name").val();
    let emailC = $("#contact-email").val();
    let usernameN = $("#new-user").val();
    let passwordI = $("#inputPassword").val();
    let genderN = document.querySelector(
      'input[name="gender-values"]:checked'
    ).value;
    let ageR = $("#age-range").val();

    if (nameS == "") {
      window.alert("Name field is empty.");
    } else if (emailC == "") {
      window.alert("Email field is empty.");
    } else if (usernameN == "") {
      window.alert("Username field is empty.");
    } else if (passwordI == "") {
      window.alert("Password field is empty.");
    } else {
      window.alert("Submit successful. Thanks for signing up!");
    }

    let jsondata = {
      name: nameS,
      username: usernameN,
      email: emailC,
      gender: genderN,
      password: passwordI,
      age: ageR,
    };
    console.log(jsondata);

    let settings = {
      async: true,
      crossDomain: true,
      url: "https://leaderboard-6a74.restdb.io/rest/user-info",
      method: "POST", //[cher] we will use post to send info
      headers: {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
      processData: false,
      data: JSON.stringify(jsondata),
      beforeSend: function () {
        $("#contact-submit").prop("disabled", true);
        $("#add-contact-form").trigger("reset");
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      $("#contact-submit").prop("disabled", false);
    });
  });
});

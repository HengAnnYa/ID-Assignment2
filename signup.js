$(document).ready(function () {
  const APIKEY = "63d38cac3bc6b255ed0c435d";

  $("#add-update-msg").hide();

  $("#contact-submit").on("click", function (e) {
    e.preventDefault();

    let nameS = $("#sign-up-name").val();
    let emailC = $("#contact-email").val();
    let usernameN = $("#new-user").val();
    let passwordI = $("#inputPassword").val();
    let genderN = $("#gender").val();
    let ageR = $("#age-range").val();

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

function validateSubmit() {
  alert("Your form has been submitted. Thanks for signing up!");
}

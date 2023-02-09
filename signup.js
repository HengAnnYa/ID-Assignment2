$(document).ready(function () {
  //what kind of interface we want at the start
//  const APIKEY = "63d38cac3bc6b255ed0c435d";
  const APIKEY = "63e4615d478852088da67ef7";

  // getSignUp();
  $("#add-update-msg").hide();

  //[STEP 1]: Create our submit form listener
  $("#contact-submit").on("click", function (e) {
    //prevent default action of the button
    e.preventDefault();

    let nameS = $("#sign-up-name").val();
    let emailC = $("#contact-email").val();
    let usernameN = $("#new-user").val();
    let passwordI = $("#inputPassword").val();
    let genderN = $("#gender").val();
    let ageR = $("#age-range").val();

    let jsondata = {
      "name": nameS,
      "username": usernameN,
      "email": emailC,
      "gender": genderN,
      "password": passwordI,
      "age": ageR
    };
    console.log(jsondata);

    let settings = {
      async: true,
      crossDomain: true,
//      url: "https://leaderboard-6a74.restdb.io/rest/user-info",
      url: "https://leaderboard-5aec.restdb.io/rest/user-info",
      method: "POST", //[cher] we will use post to send info
      headers: {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
      processData: false,
      data: JSON.stringify(jsondata),
      beforeSend: function () {
        //@TODO use loading bar instead
        //disable our button or show loading bar
        $("#contact-submit").prop("disabled", true);
        //clear our form using the form id and triggering it's reset feature
        $("#add-contact-form").trigger("reset");
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      $("#contact-submit").prop("disabled", false);

      // getSignUp();
    });
  });
});

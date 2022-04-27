$(document).ready(function () {

  $("#adressBook").submit(function (e) {
    e.preventDefault();

    const inputtedName = $("#name").val();
    const inputtedAddress = $("#address").val();
    const inputtedPhoneNumber = $("#phoneNumber").val();
    const inputtedEmail = $("#email").val();

    $("#contactName").html(inputtedName);
    $(".address").html(inputtedAddress);
    $(".phoneNumber").html(inputtedPhoneNumber);
    $(".emailAddress").html(inputtedEmail);

    $("#contactName").click(function () {
      $(".contact-details").fadeIn();
      $(".contact-details").slideUp();
    })
  })
      $("#contactName").show();

})
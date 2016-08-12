$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();

    if (nameInput === "") {
      $(".error").show();
    } else {
      $(".error").hide();
    };
  });

});

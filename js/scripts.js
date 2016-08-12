$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var introCurrent = parseInt($("#introQues").val());

    $(".name").text(nameInput);

    if (nameInput === "") {
      $(".error").show();
      $("#cssDesign").hide();
      $("#javaAndroid").hide();
      $("#rubyRails").hide();
      $("#intro").hide();
    } else if (introCurrent === 2){
      $("#intro").show();
      $(".error").hide();
      $("#cssDesign").hide();
      $("#javaAndroid").hide();
      $("#rubyRails").hide();
    };
  });

});

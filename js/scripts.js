$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var introCurrent = parseInt($("#introQues").val());
    var cssDesign = 0
    var javaAndroid = 0
    var rubyRails = 0

    $(".name").text(nameInput);

    if ($("input:radio[name=aspectImport]:checked").val() === "css") {
      cssDesign += 1
    } else if ($("input:radio[name=aspectImport]:checked").val() === "java") {
      javaAndroid += 1
    } else {
      rubyRails += 1
    };

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
    } else if (cssDesign > javaAndroid && cssDesign > rubyRails) {
      $("#cssDesign").show();
      $("#javaAndroid").hide();
      $("#rubyRails").hide();
      $("#intro").hide();
      $(".error").hide();
    } else if (rubyRails > javaAndroid && rubyRails > cssDesign) {
      $("#rubyRails").show();
      $("#javaAndroid").hide();
      $("#cssDesign").hide();
      $("#intro").hide();
      $(".error").hide();
    } else {
      $("#javaAndroid").show();
      $("#rubyRails").hide();
      $("#cssDesign").hide();
      $("#intro").hide();
      $(".error").hide();
    };
  });

});

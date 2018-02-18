//para radio button en el accordion
$("body").on("click", ".radioPayment", function(){
  $(this).parent().find("a").trigger("click")
})


$("body").on("change", "#acceptPolicy", function() {
  if(this.checked) {
    $("#sendFormButton").parent().removeClass("disabled");
    $("#sendFormButton").prop( "disabled", false );
    // checkbox is checked
  } else {
    $("#sendFormButton").parent().addClass("disabled");
    $("#sendFormButton").prop( "disabled", true );
  }
});
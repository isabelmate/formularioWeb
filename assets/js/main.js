showButton();

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

function showButton() {
 var str = window.location.href
 var n = str.search("#volver");
 if (n != -1) {
   $("#buttonBack").show();
 } else {
   $("#buttonBack").hide();
 }
}

//Plugin from https://bootstrap-datepicker.readthedocs.io/en/stable/

$('input[name="expirationDate"]').datepicker({
  format: 'mm/yyyy',
  todayHighlight: true,
  autoclose: true,
  maxViewMode: 1,
  minViewMode: 1
});
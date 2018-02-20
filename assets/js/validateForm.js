$.validator.setDefaults({
          highlight: function(element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function(element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
    errorElement: "label",
    errorClass: "error",
    errorPlacement: function(error, element) {
        if(element.parent(".input-group").length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$("#formPayment").validate({

  rules: {
    firstName: {
      required: true,
      lettersonly: true,
      minlength: 2
    },
    lastName: {
      required: true,
      lettersonly: true,
      minlength: 2
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      number: true
    },
    company: {
      required: false,
      minlength: 2
    },
    creditCardNumber:{
      required:true,
      creditcard:true
    },
    cardName:{
      required:true,
      lettersonly: true,
    },
    expirationDate:{
      required:true
    },
    cvv:{
      required:true,
      number: true
    },
    acceptPolicy: "required"
  },
  messages: {      
    firstName: {
      required: "Por favor, introduzca su nombre.",
      lettersonly: "Por favor, introduzca un nombre válido.",
      minlength: "Debe contener más de 2 caracteres."
    },
    lastName: {
      required: "Por favor, introduzca su apellido.",
      lettersonly: "Por favor, introduzca un apellido válido.",
      minlength: "Debe contener más de 2 caracteres."
    },
    email: {
      required: "Por favor, introduzca su email.",
      email: "Por favor, revise su email."
    },
    phone: {
      required: "Por favor, introduzca su número de teléfono.",
      number: "Por favor, introduzca un número válido."
    }, 
    company: {
      required: "Por favor, introduzca su razón social.",
      minlength: "Debe contener más de 2 caracteres."
    },     
    creditCardNumber:{
      required:"Por favor introduzca un número de tarjeta.",
      creditcard:"Por favor introduzca un número de tarjeta correcto."
    },
     cardName:{
      required:"Por favor introduzca un nombre.",
      lettersonly: true,
    },
    expirationDate:{
      required:"Introduzca fecha.",
    },
    cvv:{
      required:"Introduzca cvv.",
      number: true
    },    
    acceptPolicy: "Por favor, acepta las condiciones del servicio."
  }

})


/*************************************************/
/* Personalizacion de comprobaciones para campos */


/* Solo texto */
/* http://stackoverflow.com/a/32464000*/
jQuery.validator.addMethod("lettersonly", function (value, element) {
  return this.optional(element) || /^[a-z\sáãâäàéêëèíîïìóõôöòúûüùçñ'-]+$/i.test(value);
});


/* Email */
/* https://jqueryvalidation.org/jQuery.validator.methods/ */
$.validator.methods.email = function (value, element) {
  return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value);
}


/*Card*/
// http://jqueryvalidation.org/creditcard-method/
// based on http://en.wikipedia.org/wiki/Luhn_algorithm
$.validator.addMethod( "creditcard", function( value, element ) {
	if ( this.optional( element ) ) {
		return "dependency-mismatch";
	}

	// Accept only spaces, digits and dashes
	if ( /[^0-9 \-]+/.test( value ) ) {
		return false;
	}

	var nCheck = 0,
		nDigit = 0,
		bEven = false,
		n, cDigit;

	value = value.replace( /\D/g, "" );

	// Basing min and max length on
	// http://developer.ean.com/general_info/Valid_Credit_Card_Types
	if ( value.length < 13 || value.length > 19 ) {
		return false;
	}

	for ( n = value.length - 1; n >= 0; n-- ) {
		cDigit = value.charAt( n );
		nDigit = parseInt( cDigit, 10 );
		if ( bEven ) {
			if ( ( nDigit *= 2 ) > 9 ) {
				nDigit -= 9;
			}
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return ( nCheck % 10 ) === 0;
}, "Por favor introduce un número de tarjeta válido." );

/*Card type*/
$("#creditCardNumber").on("keyup", function (ev) {
    checkCardType(this.value)
});


function checkCardType(cardNumber) {

  $(".cardIcon").removeClass("selected");
  
  // Eliminar todos los espacios de la tarjeta:
  cardNumber=cardNumber.replace(/\s/g,"");
  
  if ( (cardNumber.length == 16) ) {
    if ( /^(5[12345])/.test(cardNumber)) { // Mastercard
      console.log("Mastercard");
      $("#mastercardCard").addClass("selected");
    }
    if ( /^(4)/.test(cardNumber)) { // Visa
      console.log("Visa");
      $("#visaCard").addClass("selected");
    }
    if ( /^(3[47])/.test(cardNumber)) { // Amex
      console.log("Amex");
      $("#amexCard").addClass("selected");
    }
  }
}

// visa: 4160585863659874
//##STRIPE:
//
//4242 4242 4242 4242	Visa
//4012 8888 8888 1881	Visa
//4000 0566 5566 5556	Visa (debit)
//5555 5555 5555 4444	MasterCard
//5200 8282 8282 8210	MasterCard (debit)
//5105 1051 0510 5100	MasterCard (prepaid)
//3782 8224 6310 005	American Express
//3714 4963 5398 431	American Express
//6011 1111 1111 1117	Discover
//6011 0009 9013 9424	Discover
//3056 9309 0259 04	Diners Club
//3852 0000 0232 37	Diners Club
//3530 1113 3330 0000	JCB
//3566 0020 2036 0505	JCB
//https://gist.github.com/raulferras/9364046

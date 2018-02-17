
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
    creditCard:{
      required:true,
      creditcard:true
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
    creditCard:{
      required:"Por favor introduzca un número de tarjeta correcto.",
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


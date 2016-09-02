export default {
  auth: {
    resetPasswordInstructionsSent: 'Recibiras un correo con instrucciones para restablecer tu contraseña',
    resetPasswordSucceeded: 'Contraseña actualizada correctament',

    forms: {
      email: 'Email',
      firstName: 'Nombres',
      lastName: 'Apellidos',
      password: 'Contraseña',
      passwordConfirmation: 'Confirmacion contraseña',
      resetPasswordToken: 'Token cambio de contraseña'
    },

    password: {
      edit: {
        title: 'Cambio de contraseña',
        submit: 'Cambiar contraseña'
      },
      new: {
        title: 'Solicitar cambio de contraseña',
        submit: 'Solicitar'
      }
    },

    signIn: {
      title: 'Ingresar',
      submit: 'Ingresar',
      forgotPassword: '¿Olvidaste tu contraseña?'
    },

    signUp: {
      title: 'Registrarse',
      submit: 'Enviar'
    }
  },

  errors: {
    message: 'Las validaciones fallaron',
    contactSupport: 'Contacta a tu administrador',
    description: "Este campo",
    inclusion: "{{description}} no esta incluido en la lista",
    exclusion: "{{description}} es reservado",
    invalid: "{{description}} es invalido",
    confirmation: "{{description}} doesn't match {{on}}",
    accepted: "{{description}} debe ser acceptado",
    empty: "{{description}} no puede estar vacio",
    blank: "{{description}} no puede esta en blanco",
    present: "{{description}} debe estar en blanco",
    collection: "{{description}} debe ser una colección",
    singular: "{{description}} no puede ser una colección",
    tooLong: "{{description}} es demasiado largo (el maximo es {{max}} caracteres)",
    tooShort: "{{description}} es demasiado corto (el minimo es {{min}} caracteres)",
    before: "{{description}} debe estar antes de {{before}}",
    after: "{{description}} debe estar despues de {{after}}",
    wrongDateFormat: "{{description}} debe tener el formato: {{format}}",
    wrongLength: "{{description}} tiene la longitud erronea (debe de ser de {{is}} caracteres)",
    notANumber: "{{description}} debe ser un numero",
    notAnInteger: "{{description}} debe ser un entero",
    greaterThan: "{{description}} debe ser mayor que {{gt}}",
    greaterThanOrEqualTo: "{{description}} debe ser mayor o igual que {{gte}}",
    equalTo: "{{description}} debe ser igual a {{is}}",
    lessThan: "{{description}} debe ser menos que {{lt}}",
    lessThanOrEqualTo: "{{description}} debe ser menos o igual que {{lte}}",
    otherThan: "{{description}} debe ser diferente de {{value}}",
    odd: "{{description}} debe ser impar",
    even: "{{description}} debe ser par",
    positive: "{{description}} debe ser positivo",
    date: "{{description}} debe ser una fecha valida",
    email: "{{description}} debe ser un email valido",
    phone: "{{description}} debe ser un telefono valid",
    url: "{{description}} debe ser una url valida"
  },

  orders: {
    notFound: 'No orders found!'
  }
};

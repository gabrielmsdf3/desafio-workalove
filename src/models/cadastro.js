import moment from 'moment'

function validarEmail(email) {
  if (
    email.length === "" ||
    email.indexOf("@") === -1 ||
    email.indexOf(".") === -1
  ) {
    return { valido: false, texto: "Digite um e-mail valido" }
  } else {
    return { valido: true, texto: "" }
  }
}
function validarNome(nome) {
  if (nome.length < 3 || nome.length === "") {
    return { valido: false, texto: "Digite um nome válido" }
  } else {
    return { valido: true, texto: "" }
  }
}

function validarDataNascimento(dataNascimento) {
  
  if (moment(dataNascimento).isAfter('2021-05-29')) {
    return { valido: false, texto: "Digite uma data válida" }
  } else {
    return { valido: true, texto: "" }
  }
}

export { validarEmail, validarNome, validarDataNascimento }

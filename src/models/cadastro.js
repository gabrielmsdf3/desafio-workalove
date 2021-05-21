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

//function validarDataNascimento(dataNascimento){
 // if(dataNascimento.length < 2)
//}

export { validarEmail }

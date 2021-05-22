import React from "react"

const validacoesCadastro = React.createContext({
  dataNascimento: semValidacao,
  senha: semValidacao,
  nome: semValidacao,
  email: semValidacao,
})

function semValidacao(dados) {
  console.log(dados)
  return { valido: true, texto: "" }
}

export default validacoesCadastro

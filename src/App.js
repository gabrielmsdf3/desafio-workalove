import React, { Component } from "react"
import "./App.css"
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import { Container, Typography } from "@material-ui/core"
import "fontsource-roboto"
import {
  validarEmail,
  validarNome,
  validarDataNascimento,
} from "./models/cadastro"
import validacoesCadastro from "./contexts/validacoes"
import api from "./api/api"

class App extends Component {
  render() {
    return (
      <Container component="article">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          style={{ margin: "40px 0", letterSpacing: "1.5px" }}
        >
          Formulário de cadastro
        </Typography>
        <validacoesCadastro.Provider
          value={{
            email: validarEmail,
            nome: validarNome,
            dataNascimento: validarDataNascimento,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </validacoesCadastro.Provider>
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados)

  api.post("newUsers", dados)
}

export default App

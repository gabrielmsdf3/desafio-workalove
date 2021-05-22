import React, { useState, useContext } from "react"
import { TextField, Button, Avatar } from "@material-ui/core"
import avt from "../image/avatar-08.png"
import Mensagem from "./Mensagem"
import validacoesCadastro from "../contexts/validacoes"

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("")
  const [erros, setErros] = useState({ nome: { valido: true, texto: "" } })

  const validacoes = useContext(validacoesCadastro)
  function validarCampos(event) {
    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false
      }
    }
    return true
  }

  return (
    <div style={{ height: "100px" }}>
      <div style={{ display: "flex", height: "100px" }}>
        <Avatar src={avt} style={{ width: "100px", height: "100px" }} />

        <Mensagem>
          Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu
          nome
        </Mensagem>
      </div>

      <form onSubmit={(event) => {
          event.preventDefault()
          if (possoEnviar()) {
            aoEnviar({ nome })
          }
        }}
      >
        <TextField
          value={nome}
          onChange={(event) => {
            setNome(event.target.value)
          }}
          onBlur={validarCampos}
          error={!erros.nome.valido}
          helperText={erros.nome.texto}
          id="nome"
          name="nome"
          label="Nome e sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Próximo
        </Button>
      </form>
    </div>
  )
}

export default DadosPessoais

/*
Ao utilizamos o hook de useState indicamos para o React 
que aquele componente quer guardar estado. Para isso são 
devolvidas duas informações, a primeira é a referência 
para o valor do estado atual e a segunda é a função que altera 
esse estado.
*/

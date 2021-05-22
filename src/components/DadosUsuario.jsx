import { TextField, Button, Avatar } from "@material-ui/core"
import React, { useContext, useState } from "react"
import validacoesCadastro from "../contexts/validacoes"
import avt from "../image/avatar-08.png"
import Mensagem from "./Mensagem"

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("")

  const [erros, setErros] = useState({ email: { valido: true, texto: "" } })

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

        <Mensagem>Agora me fala seu e-mail, por gentileza</Mensagem>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (possoEnviar()) {
            aoEnviar({ email })
          }
        }}
      >
        <TextField
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          onBlur={validarCampos}
          error={!erros.email.valido}
          helperText={erros.email.texto}
          id="email"
          name="email"
          label="email"
          type="email"
          required
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

export default DadosUsuario

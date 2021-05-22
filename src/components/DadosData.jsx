import { TextField, Button, Avatar } from "@material-ui/core"
import React, { useState, useContext } from "react"
import avt from "../image/avatar-08.png"
import Mensagem from "./Mensagem"
import validacoesCadastro from "../contexts/validacoes"

function DadosData({ aoEnviar }) {
  const [dataNascimento, setDataNascimento] = useState("")
  const [erros, setErros] = useState({
    dataNascimento: { valido: true, texto: "" },
  })

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
          Legal, agora que sabemos sua cidade e estado. Quando foi que você
          nasceu?
        </Mensagem>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (possoEnviar()) {
            aoEnviar({ dataNascimento })
          }
        }}
      >
        <TextField
          value={dataNascimento}
          onChange={(event) => {
            setDataNascimento(event.target.value)
          }}
          required
          onBlur={validarCampos}
          error={!erros.dataNascimento.valido}
          helperText={erros.dataNascimento.texto}
          id="dataNascimento"
          name="dataNascimento"
          type="date"
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

export default DadosData

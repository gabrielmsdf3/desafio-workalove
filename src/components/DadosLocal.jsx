import React, { useState } from "react"
import { TextField, Button, Avatar } from "@material-ui/core"
import avt from "../image/avatar-08.png"
import Mensagem from "./Mensagem"

function DadosLocal({ aoEnviar, dadosColetados }) {
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")

  // aparecer o nome do usuario que veio da outra pagina

  return (
    <div style={{ height: "100px" }}>
      <div style={{ display: "flex", height: "100px" }}>
        <Avatar src={avt} style={{ width: "100px", height: "100px" }} />

        <Mensagem>
          Que satisfação, {dadosColetados.nome} , Agora que sei seu nome, qual a cidade e estado
          que você mora?
        </Mensagem>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          aoEnviar({ estado, cidade })
        }}
      >
        <TextField
          value={cidade}
          onChange={(event) => {
            setCidade(event.target.value)
          }}
          id="cidade"
          label="Cidade"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={estado}
          onChange={(event) => {
            setEstado(event.target.value)
          }}
          id="estado"
          label="Estado"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Próximo
        </Button>
      </form>
    </div>
  )
}

export default DadosLocal

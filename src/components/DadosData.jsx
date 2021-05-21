import { TextField, Button,  Avatar } from "@material-ui/core"
import React, { useState } from "react"
import avt from "../image/avatar-08.png"
import Mensagem from "./Mensagem"

function DadosData({ aoEnviar }) {
  const [dataNascimento, setDataNascimento] = useState("")

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
          aoEnviar({ dataNascimento })
        }}
      >
        <TextField
          value={dataNascimento}
          onChange={(event) => {
            setDataNascimento(event.target.value)
          }}
          required
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

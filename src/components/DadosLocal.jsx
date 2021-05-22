import React, { useState } from "react"
import { TextField, Button, Avatar } from "@material-ui/core"
import avt from "../image/avatar-08.png"
import Mensagem from "./Mensagem"

function DadosLocal({ aoEnviar, dadosColetados }) {
  const [estado, setEstado] = useState("SP")
  const [listUf, setListUf] = useState([])
  const [cidade, setCidade] = useState("")
  const [listCity, setListCity] = useState([])
  function loadUf() {
    let url = "https://servicodados.ibge.gov.br/"
    url = url + "api/v1/localidades/estados"
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome))
        setListUf([...data])
      })
  }
  function loadCity(id) {
    let url = "https://servicodados.ibge.gov.br/api/v1/"
    url = url + `localidades/estados/${id}/municipios`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome))
        setListCity([...data])
      })
  }
  React.useEffect(() => {
    loadUf()
  }, [])
  React.useEffect(() => {
    if (estado) {
      loadCity(estado)
    }
  }, [estado])

  return (
    <div style={{ height: "100px" }}>
      <div style={{ display: "flex", height: "100px" }}>
        <Avatar src={avt} style={{ width: "100px", height: "100px" }} />

        <Mensagem>
          Que satisfação, {dadosColetados.nome} , Agora que sei seu nome, qual a
          cidade e estado que você mora?
        </Mensagem>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          aoEnviar({ estado, cidade })
        }}
      >
        <div style={{ padding: "10px 15px", borderRadius: "5px" }}>
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            {listUf.map((a, i) => (
              <option key={i} value={a.sigla}>
                {a.sigla} - {a.nome}
              </option>
            ))}
          </select>
          <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
            {listCity.map((a, i) => (
              <option key={i} value={a.nome}>
                {a.nome}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Próximo
        </Button>
      </form>
    </div>
  )
}

export default DadosLocal

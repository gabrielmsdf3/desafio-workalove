import React from 'react'
import avt from "../image/avatar-08.png"
import Mensagem from "./Mensagem"
import {   Avatar } from "@material-ui/core"

function Obrigado(){
  return(
    <div style={{ height: "100px" }}>
      <div style={{ display: "flex", height: "100px" }}>
        <Avatar src={avt} style={{ width: "100px", height: "100px" }} />
        <Mensagem>
          Obrigado
        </Mensagem>
        </div>
      </div>
  )
}

export default Obrigado
import { Step, StepLabel, Stepper } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import Avaliacao from "../Avaliacao"
import DadosData from "../DadosData"
import DadosLocal from "../DadosLocal"
import DadosPessoais from "../DadosPessoais"
import DadosUsuario from "../DadosUsuario"
import Obrigado from "../Obrigado"

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados)
    }
  })

  const formularios = [
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosLocal dadosColetados={dadosColetados} aoEnviar={coletarDados} />,
    <DadosData aoEnviar={coletarDados} />,
    <DadosUsuario aoEnviar={coletarDados} />,
    <Avaliacao aoEnviar={coletarDados}></Avaliacao>,
    <Obrigado/>,
  ]

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados })
    proximo()
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <div>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>1° passo</StepLabel>
        </Step>
        <Step>
          <StepLabel>2°passo</StepLabel>
        </Step>
        <Step>
          <StepLabel>3°passo</StepLabel>
        </Step>
        <Step>
          <StepLabel>4°passo</StepLabel>
        </Step>
        <Step>
          <StepLabel>avaliação</StepLabel>
        </Step>
        <Step>
          <StepLabel>Conclusão</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </div>
  )
}

export default FormularioCadastro

/*
Ao utilizamos o hook de useState indicamos para o React 
que aquele componente quer guardar estado. Para isso são 
devolvidas duas informações, a primeira é a referência 
para o valor do estado atual e a segunda é a função que altera 
esse estado.
*/

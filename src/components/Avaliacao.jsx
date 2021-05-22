import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import Box from "@material-ui/core/Box"
import avt from "../image/avatar-08.png"
import Mensagem from "./Mensagem"
import { Button, Avatar } from "@material-ui/core"

const labels = {
  1: "Muito Ruim",

  2: "Ruim",

  3: "Bom",

  4: "Muito bom",

  5: "Excepcional",
}

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
})

export default function Avaliacao({ aoEnviar }) {
  const [nota, setNota] = React.useState(2)
  const [hover, setHover] = React.useState(-1)
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ width: "100%" }}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          aoEnviar({ nota })
        }}
      >
        <div style={{ display: "flex" }}>
          <Avatar src={avt} style={{ width: "100px", height: "100px" }} />
          <Mensagem>
            Você finalizou o teste! Faça uma avaliação sobre o processo que
            realizou até chegar aqui. Nós agradecemos!
          </Mensagem>
        </div>

        <Rating
          align="center"
          name="hoverfeedback"
          value={nota}
          precision={1}
          onChange={(event) => {
            let notaConvertida = parseInt(event.target.value)
            setNota(notaConvertida)
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover)
          }}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100px",
            height: "100px",
          }}
        />

        {nota !== null && (
          <Box ml={1}>{labels[hover !== -1 ? hover : nota]}</Box>
        )}

        <Button type="submit" variant="contained" color="primary">
          Concluir!
        </Button>
      </form>
    </div>
  )
}

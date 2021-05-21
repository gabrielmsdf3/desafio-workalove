import React from 'react'
import { Typography } from '@material-ui/core'

function Mensagem({ children }){
    return(
        <div>
           <Typography style={{ backgroundColor: "rgba(132, 255, 255, 0.8)", padding: "10px 15px", borderRadius: "5px"}}>
            {children}
          </Typography>
        </div>
    )
}
export default Mensagem
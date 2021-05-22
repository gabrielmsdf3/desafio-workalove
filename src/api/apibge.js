import axios from "axios"

const apibge = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/'
})

export default apibge
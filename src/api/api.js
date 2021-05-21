import axios from "axios"

const api = axios.create({
  baseURL: 'https://60a5bfc5c0c1fd00175f43ad.mockapi.io/api/v1/'
})

export default api
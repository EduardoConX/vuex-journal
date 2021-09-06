import axios from "axios"

const journalApi = axios.create({
    baseURL: "https://vue-demos-e78d0-default-rtdb.firebaseio.com"
})

export default journalApi
import axios from "axios";

let AxiosService = axios.create({
    baseURL:"https://assign-mentorbe.onrender.com/",
    headers:{
        "Content-Type":"application/json"
    }
})



export default AxiosService
import axios from "axios";

//insert 
const API_URL = "https://localhost:7034/api/Home"

export function insertJob(job){
    console.log('job')
    console.log(job)
    axios.post(API_URL + "/insertJob", job).then(res=>console.log(res)).catch(err => console.log(err)) 
}
  

export function updateJob(job){
    console.log('job')
    console.log(job)
    axios.put(API_URL + "/updateJob", job).then(res=>console.log(res)).catch(err => console.log(err)) 
}

export function deleteJob(Id){
    axios.delete(API_URL + "/deleteJob/"+Id)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}
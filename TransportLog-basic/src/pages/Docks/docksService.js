import axios from "axios";

//insert 
const API_URL = "https://localhost:7034/api/Docks"

export function insertDocks(docks){
    console.log('docks')
    console.log(docks)
    axios.post(API_URL + "/insertDocks", docks).then(res=>console.log(res)).catch(err => console.log(err)) 
}
  
export function updateDocks(docks){
    
    axios.put(API_URL + "/updateDocks",docks)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}


export function deleteDocks(Id){
    axios.delete(API_URL + "/deleteDocks/"+Id)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}
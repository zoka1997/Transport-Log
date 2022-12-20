import axios from "axios";

//insert 
const API_URL = "https://localhost:7034/api/SupportStatuses"

export function insertSupportStatuses(supportStatuse){
    console.log('supportStatuse')
    console.log(supportStatuse)
    axios.post(API_URL + "/insertSupportStatuses", supportStatuse).then(res=>console.log(res)).catch(err => console.log(err)) 
}
  


export function updateSupportStatuses(supportStatuse){
    
    axios.put(API_URL + "/updateSupportStatuses",supportStatuse)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}


export function deleteSupportStatuses(Id){
    axios.delete(API_URL + "/deleteSupportStatuses/"+Id)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}


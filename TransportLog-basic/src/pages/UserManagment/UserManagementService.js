import axios from "axios";

//insert 

const API_URL = "https://localhost:7034/api/UserManagement"

export function insertUserManagement(userManagements){
    axios.post(API_URL + "/insertUserManagement",userManagements)
    .then(res=>console.log(res))
    .catch(err => console.log(err)) 
}
  
export function updateUserManagement(userManagements){
    
    axios.put(API_URL + "/updateUserManagement",userManagements)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}


export function deleteUserManagement(Id){
    axios.delete(API_URL + "/deleteUserManagement/"+Id)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}


import axios from "axios";

//insert 
const API_URL = "https://localhost:7034/api/Customers"

export function insertCustomer(customer){
    console.log('customer')
    console.log(customer)
    axios.post(API_URL + "/insertCustomer", customer).then(res=>console.log(res)).catch(err => console.log(err)) 
}
  
export function updateCustomer(customer){
    
    axios.put(API_URL + "/updateCustomer",customer)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}


export function deleteCustomer(Id){
    axios.delete(API_URL + "/deleteCustomer/"+Id)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
}


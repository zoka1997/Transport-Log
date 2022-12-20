import axios from "axios";
import { json } from "react-router-dom";
import React, {useEffect, useState} from "react";

const API_URL = "https://localhost:7034/api/Customers";

const useCustomerData = () => {

const[customer, setCustomers] = useState([]);

const getCustomers = () =>{
    axios.get(`${API_URL}/getCustomers`)
        .then((json)=> {
            console.log(json)
            setCustomers(json.data)
        })
        .catch((error)=>{
        console.log(error);
        })
   }

   useEffect(()=> getCustomers(), [])
   return{customer}
}

export default useCustomerData;









import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://localhost:7034/api/SupportStatuses";

const Usesupportstatusesdata = () => {
    const[supportStatuses, setSupportStatuses] = useState([]);

        const getSupportStatuses = () =>{
            axios.get(`${API_URL}/getSupportStatuses`)
                .then((json)=> {
                    console.log(json)
                    setSupportStatuses(json.data)
                })
                .catch((error)=>{
                console.log(error);
                })
           }
        
           useEffect(()=> getSupportStatuses(), [])
           return{supportStatuses}
        }

export default Usesupportstatusesdata;









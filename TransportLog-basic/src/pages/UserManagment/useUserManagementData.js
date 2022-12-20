import axios from "axios";
import React, {useEffect, useState} from "react";

const API_URL = "https://localhost:7034/api/UserManagement";

const Useusermanagementdata = () => {
        const[userManagement, setUserManagement] = useState([]);

        const getUserManagement = () =>{
            axios.get(`${API_URL}/getUserManagement`)
                .then((json)=> {
                    console.log(json)
                    setUserManagement(json.data)
                })
                .catch((error)=>{
                console.log(error);
                })
           }
        
           useEffect(()=> getUserManagement(), [])
           return{userManagement}
        }

export default Useusermanagementdata;

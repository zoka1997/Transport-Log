import axios from "axios";
import React, {useEffect, useState} from "react";

const API_URL = "https://localhost:7034/api/Docks";

const useDocksData = () => {

const[docks, setDocks] = useState([]);

const getDocks = () =>{
    axios.get(`${API_URL}/getDocks`)
        .then((json)=> {
            console.log(json)
            setDocks(json.data)
        })
        .catch((error)=>{
        console.log(error);
        })
   }

   useEffect(()=> getDocks(), [])
   return{docks}
}

export default useDocksData;


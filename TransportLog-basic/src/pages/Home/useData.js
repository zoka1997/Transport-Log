import axios from "axios";
import React, {useEffect, useState} from "react";

const API_URL = "https://localhost:7034/api/Home";


const useData = () => {

const[data, setData] = useState([]);



const getData = () =>{
    axios.get(`${API_URL}/getHomeData`)
        .then((json)=> {
            console.log(json)
            setData(json.data)
        })
        .catch((error)=>{
        console.log(error);
        })
   }
   
   useEffect(()=> getData(),[])
   return{data}
}

export default useData;


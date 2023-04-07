import axios from "axios";
import Link from "next/link";
import ListGenero from "./ListGenero";


 function getList(){
   

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres',
  headers: {
    'X-RapidAPI-Key': 'e9914b2e24msh42f9a53e57e48d3p121109jsn41aef6923b54',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

 return axios.request(options).then(res=> res.data)
 }

 export default async function getListGenero({categoria}){
    const {results}=await getList()

return ( 
 <>
  <ListGenero results={results}/> 
 

 
 </>

 )

 }
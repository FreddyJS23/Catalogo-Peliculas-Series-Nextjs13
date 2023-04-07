import axios from "axios";
import Link from "next/link";

 function getListCatalago(){
   

const options = {
  method: 'GET',
  url:'https://moviesdatabase.p.rapidapi.com/titles/utils/titleTypes',
  headers: {
    'X-RapidAPI-Key': 'e9914b2e24msh42f9a53e57e48d3p121109jsn41aef6923b54',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

 return axios.request(options).then(res=> res.data)
 }



const ListCatalago =async () => {
  const {results}= await getListCatalago()
  
    return (
  <div>
    <h2>Catalago</h2>
     <ul>

{results.map((listCatalago,index)=><li key={index}> <Link key={index} href={`./${listCatalago}`}>{listCatalago}</Link> </li> )}

   </ul>

  </div>
  )
}

export default ListCatalago
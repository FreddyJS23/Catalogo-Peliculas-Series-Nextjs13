import axios from "axios";
import PageData from "./PageData";


async function getDataPage(page="",tipo="movie",genero,list,year=2023,sort) {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: {
      titleType: tipo,
      page: page,
      genre: genero,
      year:year,
      list:list,
      sort:sort,
      limit:'20',
    },
    headers: {
      "X-RapidAPI-Key": "e9914b2e24msh42f9a53e57e48d3p121109jsn41aef6923b54",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  
 
  
  let res = await axios.request(options);
  if(res.status !==200){
    return res.status
  }
  
  let data = res.data;

 return data

}


export default async function GetAllDatas({page,tipo,genero,list,year,sort}){


/*  let  data1 = await getDataPage(page,tipo,genero,list,year,sort);
  
  let  data2= await getDataPage(page + 1,tipo,genero,list,year,sort);
 

  let data=data1.results.concat(data2.results) */
let  {results} = await getDataPage(page,tipo,genero,list,year,sort);
  


  return(  
   <>

     <PageData results={results} tipo={tipo} />  
  
   </>


   )
}



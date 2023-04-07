import axios from "axios";
import Carrusel from "./Carrusel";
import CarruselPrincipal from './CarruselPrincipal'

async function getAllData(page="",tipo="movie",genero,list,year=2023,sort) {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: {
      titleType: tipo,
      page: page,
      genre: genero,
      year:year,
      info: 'base_info',
      list:list,
      sort:sort
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
 
  return data;

}

export default async function GetAllDatas({page,tipo,genero,list,year,carouselPrincipal=false,sort}) {
  
  
  let { results } = await getAllData(page,tipo,genero,list,year,sort);
   
 
  
  return(  
    <>

  
  {!carouselPrincipal && <Carrusel results={results} />  }
  
  {carouselPrincipal && <CarruselPrincipal results={results} />  }
  
    </>


   )
}



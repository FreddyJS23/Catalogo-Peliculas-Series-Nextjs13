import Link from "next/link";
import styles from "../styles/carrusel.module.css"
import Image from "next/image";
import dataDesconocido from "../../public/svg/dataDesconocido.svg"


export default function ListDataCarousel({
  tipo,
  titulo,
  primaryImage,
  id,
  
}) {

/* if(tipo.id== "tvSeries"){
  tipo.id="serie"
} */

switch (tipo.id) {
  
  case "tvSeries":tipo.id="serie"; break;
 
  case "movie":tipo.id="pelicula"; break;
    
  
  
}
let tituloData=titulo

titulo=titulo.replaceAll(" ", "-")

titulo=titulo.replaceAll(":", "_")


  return (
  
     
  


     
    <div className={styles['carrusel-item-container']}>
      <Link href={`${tipo.id }/${titulo}`}> 
      
        <Image className={styles['carrusel-item-img']} src={primaryImage ? primaryImage.url : dataDesconocido} alt="" width={208} height={320} />
        
         </Link>
    </div>

       
       
    



    
  );
}

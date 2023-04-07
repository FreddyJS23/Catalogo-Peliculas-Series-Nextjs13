'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import styles from "../styles/sidebar.module.css";
import { usePathname, useSearchParams,useSelectedLayoutSegment } from 'next/navigation';


const ListGenero = ({results}) => {
 const [collapse, setCollapse] = useState(false)
let pathname=usePathname()
 let segmento= useSelectedLayoutSegment();



if(segmento == "(peliculas)"){pathname="/peliculas" }
else if(segmento == "(series)"){pathname="/series" }
 else{ pathname=false}


const handleClick=()=>{
  setCollapse(!collapse)
}

  return (
    <>
     
       <div className={styles['genero-button']} onClick={handleClick}> <span className={`${styles["icono-category"]} iconos`}></span> Generos</div>
  <Collapse  in={collapse}>
    <div >
   <ul className={styles.listGenero}>
    {results.map((genero,index)=> <li key={index} className={styles.genero}><Link key={index} href={ pathname ? `${pathname}/${genero}` : "/"}>{genero}</Link></li> )} 
    </ul>
    </div>
  </Collapse>
 
    
    </>
 

        
       
   

  )
}

export default ListGenero
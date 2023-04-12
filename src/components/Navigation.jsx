'use client'

import Link from "next/link";
import styles from "../styles/navigation.module.css";
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import SidebarResponsive from "./SidebarResponsive";
import { useState } from "react";



const Navigation = ({children}) => {
  const segmento=useSelectedLayoutSegment()
  
  // manejo del canvas responsive
  const [visible, setVisible] = useState(false)

  const handleClick=()=>{
setVisible(true)
}

const handleClose=()=>{
setVisible(false)
}


  return (
    <>

     <SidebarResponsive  visible={visible} handleClose={handleClose} >{children}</SidebarResponsive>
      
      <div className={styles["navigation-container"]}>
        <ul className={styles.navigation}  >
         
          <li>
            <ul className={styles["navigation-sections"]}>
             
             <li className={styles["navigation-button-navbar"]}>
              <span  onClick={handleClick} className={`${styles["icono-nav"]} iconos`}></span> 
             </li>
             
              <li>
               
               <Link className={styles['link-icon']} href={"./"}> <span className={`${styles["icono-home"]} iconos`}></span>  </Link>
                
               
                <Link className={styles.link}  href={"./"}>Home
                   
                </Link>
                
              </li>
             
              <li>
              <Link className={styles['link-icon']} href={"./peliculas"}>  <span className={`${styles["icono-movies"]} iconos`}></span>  </Link>
               
                <Link className={`${styles.link} ${segmento == "(peliculas)" ? styles.active : "" }  `} href={"./peliculas"}>Peliculas</Link>
              </li>
              <li>
              <Link className={styles['link-icon']} href={"./series"}> <span className={`${styles["icono-series"]} iconos`}></span> </Link>
                 
                <Link className={`${styles.link} ${segmento == '(series)' ? styles.active : "" }  `}  href={"./series"}>Series</Link>
              </li>
              <li>
              <Link className={styles['link-icon']} href={"./otros"}>  <span className={`${styles["icono-others"]} iconos`}></span>  </Link>
               
                <Link className={`${styles.link} ${segmento == '(otros)' ? styles.active : "" }  `}  href={"./otros"}>Otros</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;

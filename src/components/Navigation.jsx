'use client'

import Link from "next/link";
import styles from "../styles/navigation.module.css";
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';



const Navigation = () => {
  const segmento=useSelectedLayoutSegment()
  
  return (
    <>
      <div className={styles["navigation-container"]}>
        <ul className={styles.navigation}  >
         
          <li>
            <ul className={styles["navigation-sections"]}>
              <li>
                <span className={`${styles["icono-home"]} iconos`}></span>
                <Link className={styles.link}  href={"./"}>Home
                   
                </Link>
                
              </li>
             
              <li>
                 <span className={`${styles["icono-movies"]} iconos`}></span>
                <Link className={`${styles.link} ${segmento == "(peliculas)" ? styles.active : "" }  `} href={"./peliculas"}>Peliculas</Link>
              </li>
              <li>
                 <span className={`${styles["icono-series"]} iconos`}></span>
                <Link className={`${styles.link} ${segmento == '(series)' ? styles.active : "" }  `}  href={"./series"}>Series</Link>
              </li>
              <li>
                 <span className={`${styles["icono-others"]} iconos`}></span>
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

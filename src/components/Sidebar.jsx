
import Link from "next/link";
import styles from "../styles/sidebar.module.css";
import GetDataGenero from "./GetDataGenero";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  

  return (
    <>
      <div className={styles["container-sidebar"]}>
       <div className={styles["container-logo"]}>
      
        <a href="https://freddyjs23.github.io/portafolio/" target="_blank">  <span className={`${styles["icono-logo"]} iconos`}></span></a>
       
       </div>
       
        <div className={styles["sidebar-elements"]}>
          <ul>
       

            <li className={styles["sidebar-link"]}>
            <span className={`${styles["icono-about"]} iconos`}></span>
              <Link href={"/about"}>Acerca</Link>
            </li>
            <li className={styles["sidebar-link"]}>
         
            <SearchInput />
            
            </li>
           <li className={styles['container-generos']}>
          
            <GetDataGenero />
           </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

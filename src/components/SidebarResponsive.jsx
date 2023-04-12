'use client'


import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "../styles/sidebar.module.css";
import Link from 'next/link';
import SearchInput from './SearchInput';



const SidebarResponsive = ({visible,handleClose,children}) => {
   
 
    return (
    <>
   

    <Offcanvas show={visible} onHide={handleClose} bsPrefix={`offcanvas offcanvas-start ${styles['container-offcanvas']}`}>
      <Offcanvas.Header closeButton bsPrefix={styles['offcanvas-header']}>
        
      </Offcanvas.Header>
      <Offcanvas.Body>
     
      <div className={`${styles["container-sidebar"]} ${styles["sidebar-responsive"]}`}>
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
        {/*   children con el componente de servidor GetDataGenero */}
          {children}
           
           </li>
          </ul>
        </div>
      </div>
   
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default SidebarResponsive



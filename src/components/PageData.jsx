'use client'
import PageDataItem from "./PageDataItem";
import styles from "../styles/pageData.module.css"
const PageData = ({results,tipo}) => {

  
    return (
    <div className={styles["container-pageData"]}>
     
        {results.map(({titleText, primaryImage},index)=> <PageDataItem key={index} tipo={tipo}  titulo={titleText ? titleText.text : ""} img={primaryImage ? primaryImage.url :""} />
        
        
        )}

     
    </div>
  );
};

export default PageData;

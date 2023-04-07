import Link from "next/link"
import styles from "../styles/pageData.module.css"
import Image from "next/image"
import dataDesconocido from "../../public/svg/dataDesconocido.svg"

const PageDataItem = ({titulo,img,tipo}) => {
 
 
  let url
let tituloUrl=titulo

tituloUrl=tituloUrl.replaceAll(" ", "-")

  tituloUrl=tituloUrl.replaceAll(":", "_")
 
  if (tipo== "movie") {
    url=`./pelicula/${tituloUrl}`
  }else if (tipo=="tvSeries"){
    url=`./serie/${tituloUrl}`
  }
console.log(!img ? "null" : "no null")
  return (
   <>
    <div className={styles["pageData-item"]}>
        <div className={styles["pageData-item-img"]}> <Link href={url}> <Image src={img ? img : dataDesconocido} width={208} height={288} alt="" />  </Link></div>
        <div className={styles["pageData-item-title"]}><p>{titulo}</p></div>
      </div>
   </>
  )
}

export default PageDataItem
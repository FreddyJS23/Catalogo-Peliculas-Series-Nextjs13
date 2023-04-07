import Link from "next/link";
import styles from "../styles/carrusel.module.css";
import Image from "next/image";
import dataDesconocido from "../../public/svg/dataDesconocido.svg"

export default function ListDataCarousel({
  titulo,
  primaryImage,
  releaseYear,
  descripcion,
  genres,
  runtime,
}) {
  /* if(tipo.id== "tvSeries"){
  tipo.id="serie"
} */

  let tipo = "pelicula";

  let tituloData = titulo;

  titulo = titulo.replaceAll(" ", "-");

  titulo = titulo.replaceAll(":", "_");



  return (
    <div className={styles["cp-item"]}>
      
      <div className={styles["portada"]} style={{backgroundImage:`url(${primaryImage.url})`}}></div>
      
      <div className={styles["cp-item-image"]}>
        <Link href={`${tipo}/${titulo}`}>
         <Image src={primaryImage ? primaryImage.url : dataDesconocido} alt="" className={styles["cp-image-img"]} width={256} height={336}/>
       
        </Link>
      </div>

      <div className={styles["cp-item-informacion"]}>
        <div className={styles["cp-item-informacion-titulo"]}>
          <p>{tituloData}</p>
        </div>
        <div className={styles["cp-item-informacion-data"]}>
          <p>{releaseYear.year}</p>
          <p>{genres.genres[0].text}</p>
          <p>{runtime}</p>
        </div>

        <div className={styles["cp-item-informacion-descripcion"]}>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

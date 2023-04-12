import styles from '../styles/page.module.css'
import GetDataCarousel from '@/components/GetADataCarousel'




export default function Home() {
  return (
    
   
     
      <section className={styles['section-home']}>
       
     
     <article className={styles['art-movies-top']}>
       <span className={`${styles["icono-destacadas"]} iconos`}></span>
          
      <GetDataCarousel page={1}  tipo={"movie"} genero={"Adventure"} year={"2023"} carouselPrincipal={true} list={""} sort={""} />
        </article> 
      
      
      <article  className={styles['art-movies-recent']}>
      <h2>Peliculas recientes <span className={`${styles["icono-destacadas2"]} iconos`}></span>   </h2>
     
      <GetDataCarousel page={1}  tipo={"movie"} genero={"Action"} year={"2023"} list={""} sort={"year.decr"} />
        </article> 
      
      
      <article  className={styles['art-series-recent']}>
      <h2>Series <span className={`${styles["icono-destacadas2"]} iconos`}></span>  </h2>
      
      <GetDataCarousel page={1}  tipo={"tvSeries"} genero={"Action"} year={"2023"} list={""} sort={"year.decr"}  />
        </article>   
       
     
      
      
      </section>

  )
}

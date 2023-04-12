'use client'

import { Carousel } from "react-bootstrap"
import ListDataCarousel from "./ListDataCarousel"
import "../styles/bootstrap.min.css"
import styles from "../styles/carrusel.module.css"

export default function Carrusel({results}){ 

    let initialPrimaryImage = { id: "" };
    let initialReleaseDate = { day: "", month: "", year: "" };
    let initialReleaseYear = { year: "" };
  

    return( 

    <div className={styles['carrusel-container']}>

<Carousel  interval={4000} indicators={false} controls={false} >
     
      
     <Carousel.Item >
     <div className={styles['carrusel-item']}>
     {  results.slice(0,5).map(
     ({ titleType, titleText, primaryImage, releaseYear, releaseDate,id }) => (
     
     <ListDataCarousel
     key={id}
       id={id}  
       primaryImage={primaryImage ? primaryImage : null}
       releaseDate={releaseDate ? releaseDate : initialReleaseDate}
       releaseYear={releaseYear ? releaseYear : initialReleaseYear}
       tipo={titleType}
       titulo={titleText.text}
     
     />
     )
     )}
     
     
     </div>
     
     
     
       </Carousel.Item>
     <Carousel.Item>
     <div className={styles['carrusel-item']}>
     
     {  results.slice(5,10).map(
     ({ titleType, titleText, primaryImage, releaseYear, releaseDate,id }) => (
     <ListDataCarousel
     key={id}  
     id={id}  
       primaryImage={primaryImage ? primaryImage : null}
       releaseDate={releaseDate ? releaseDate : initialReleaseDate}
       releaseYear={releaseYear ? releaseYear : initialReleaseYear}
       tipo={titleType}
       titulo={titleText.text}
     
     />
     )
     )}
       </div>
       </Carousel.Item>
     
     
     </Carousel>


    </div>
)
}



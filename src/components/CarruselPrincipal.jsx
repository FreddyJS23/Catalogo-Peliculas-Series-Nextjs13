'use client'

import { Carousel } from "react-bootstrap"
import ListDataCarouselPrincipal from "./ListDataCarouselPrincipal"
import "../styles/bootstrap.min.css"
import styles from "../styles/carrusel.module.css"

export default function Carrusel({results}){ 

    let initialPrimaryImage = { id: "" };

    let initialReleaseYear = { year: "" };
   


    return( 


<div className={styles['carruselPrincipal-container']}>
<Carousel interval={5000} indicators={true}  controls={false}>
     
      


     {results.map(({id,titleText, primaryImage, releaseYear,plot,genres,runtime})=> 
     
     <Carousel.Item key={id}>
     
     <ListDataCarouselPrincipal
     
       primaryImage={primaryImage ? primaryImage : null}
       releaseYear={releaseYear ? releaseYear : initialReleaseYear}
       genres={genres}
       titulo={titleText.text}
       descripcion={plot ?   plot.plotText.plainText : ""}
       runtime={runtime ? runtime.displayableProperty.value.plainText : "" }
       
     />
     
     </Carousel.Item>
     
     )
     
     
     }
     
     
     
     
     
     
     </Carousel>

</div>
  
)
}



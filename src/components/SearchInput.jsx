'use client'

import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import styles from "../styles/sidebar.module.css";
import { useRef } from 'react';

const SearchInput = () => {

    const router=useRouter()
    const inputSearch=useRef()
    let segmento=useSelectedLayoutSegment();


    const handleClickSearch=()=>{
      
      segmento=segmento.replace("/(\(|\))/g","")
      
      router.push(`/search?search=${inputSearch} ${segmento &&  'tipo'+segmento}    `)
    }
    


    return (
   <>
   
     
   <span onClick={handleClickSearch} className={`${styles["icono-search"]} iconos`}></span>
              <input ref={inputSearch}  type="text" placeholder="Buscar"/>
   
   </>
  )
}

export default SearchInput
'use client'

import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import styles from "../styles/sidebar.module.css";
import { useRef } from 'react';

const SearchInput = () => {

    const router=useRouter()
    const inputSearch=useRef()
    let segmento=useSelectedLayoutSegment();


    const handleClickSearch=()=>{
      
      segmento=segmento && segmento.replace(/(\(|\))/g,"")
      let inputValue=inputSearch.current.value

if( segmento == 'search') segmento = null  

    let tipo=segmento ? `&tipo=${segmento}` : ''
      
      let link=`/search?search=${inputValue}${tipo}` 
     
     router.push(link)
    }
    


    return (
   <>
   
     
   <span onClick={handleClickSearch} className={`${styles["icono-search"]} iconos`}></span>
              <input ref={inputSearch}  type="text" placeholder="Buscar"/>
   
   </>
  )
}

export default SearchInput
import GetData from '@/components/GetData'
import React from 'react'

const pageSerie = ({params}) => {
 
 let {serie}=params

  serie=serie.replaceAll("-", " ")

  serie=serie.replaceAll("_", ":")
    
  return (
    <div>
    <GetData tituloData={serie} catalago={"tvSeries"}/>
    </div>
  )
}

export default pageSerie
import GetData from '@/components/GetData'
import React from 'react'

export async function generateMetadata({ params }) {
  let {serie}=params

  serie=serie.replaceAll("-", " ")

  serie=serie.replaceAll("_", ":")
    
  

return {
    title: serie,
    description: `informacion sobre la serie de ${serie}`
  };
}




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
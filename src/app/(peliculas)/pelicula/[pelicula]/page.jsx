import GetData from '@/components/GetData'

export async function generateMetadata({ params }) {
  let {pelicula}=params

  pelicula=pelicula.replaceAll("-", " ")

  pelicula=pelicula.replaceAll("_", ":")
    
  

return {
    title: pelicula,
    description: `informacion sobre la pelicula de ${pelicula}`
  };
}

const pagePelicula = ({params}) => {
 
 let {pelicula}=params

  pelicula=pelicula.replaceAll("-", " ")

  pelicula=pelicula.replaceAll("_", ":")
    
  
  
  return (
    <div>
     <GetData tituloData={pelicula} catalago={"movie"} />
  
    </div>
  )
}

export default pagePelicula
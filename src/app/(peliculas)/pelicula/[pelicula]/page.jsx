import GetData from '@/components/GetData'


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
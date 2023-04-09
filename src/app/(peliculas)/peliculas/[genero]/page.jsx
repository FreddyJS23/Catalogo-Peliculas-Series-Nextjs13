import GetDataPages from "@/components/GetDataPages"
import LoaderPageData from "@/components/LoaderDataPage"
import NavigationDataPages from "@/components/NavigationDataPages"
import { Suspense } from "react"



const pageGeneroPelicula = ({params,searchParams}) => {
  let page
 
  if(searchParams.page > 1){
      page=parseInt(searchParams.page) 
      
  }else{
      page=1
  }
  
  
  
  return (
   <>
   

   <GetDataPages page={page}  tipo={"movie"} genero={params.genero} year={"2023"}  />


   
   <NavigationDataPages />
   </>
   
  )
}

export default pageGeneroPelicula
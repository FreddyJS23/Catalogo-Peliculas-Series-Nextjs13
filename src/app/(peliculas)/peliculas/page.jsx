import GetDataPages from "@/components/GetDataPages";
import LoaderPageData from "@/components/LoaderDataPage";
import NavigationDataPages from "@/components/NavigationDataPages";
import { Suspense } from "react";

export const dynamic = 'force-dynamic'

export const metadata={
    title:'Peliculas',
    description: "informacion sobre peliculas de cualquier genero"
}



export default function PagePeliculas({searchParams}){
    let page
    if(searchParams.page > 1){
        page=parseInt(searchParams.page) 
        
    }else{
        page=1
    }
    

return(
       
         <>
       
    
<Suspense fallback={<LoaderPageData/>}>
  
   <GetDataPages page={page}  tipo={"movie"} genero={"Action"} year={"2023"}  /> 

</Suspense>

         <NavigationDataPages />
      
         
         </>
        
      
      
    )   
}
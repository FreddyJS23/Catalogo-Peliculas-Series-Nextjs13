import GetAllDataPages from "@/components/GetDataPages";
import NavigationDataPages from "@/components/NavigationDataPages";



const pageGeneroSerie = ({params}) => {
  let page
  if(searchParams.page > 1){
      page=parseInt(searchParams.page) 
      
  }else{
      page=1
  }
  
  return (
    <>
    <GetAllDataPages page={page}  tipo={"tvSeries"} genero={params.genero} year={"2023"} />
    <NavigationDataPages />
    
    </>
   
  )
}

export default pageGeneroSerie
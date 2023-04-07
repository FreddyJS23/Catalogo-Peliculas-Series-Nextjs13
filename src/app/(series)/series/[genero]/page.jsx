import GetAllDataPages from "@/components/GetDataPages";



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
import GetAllDataPages from "@/components/GetDataPages";
import NavigationDataPages from "@/components/NavigationDataPages";

export default function PageSeries(){
    let page
    if(searchParams.page > 1){
        page=parseInt(searchParams.page) 
        
    }else{
        page=1
    }
   
    return(
        <>
         
        
        <GetAllDataPages page={page}  tipo={"tvSeries"} genero={"Action"} year={"2023"}  />
        <NavigationDataPages />
        </>
    )   
}
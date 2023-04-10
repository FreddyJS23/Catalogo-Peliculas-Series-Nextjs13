import GetDataPages from "@/components/GetDataPages";
import NavigationDataPages from "@/components/NavigationDataPages";


export const metadata = {
    title: 'About',
  };

const pageSearch = ({searchParams}) => {

 let search=searchParams

 let page
 if(searchParams.page > 1){
     page=parseInt(searchParams.page) 
     
 }else{
     page=1
 }

    return (
    
          <>
       
  
  <GetDataPages page={page} search={search.search} tipo={search.tipo ? search.tipo : null} />   
         <NavigationDataPages /> 
      
         
         </>
        
      

      
  )
}

export default pageSearch
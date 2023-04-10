import GetDataPages from "@/components/GetDataPages";


export const metadata = {
    title: 'About',
  };

const pageSearch = ({searchParams}) => {

 let search=searchParams

    return (
    
          <>
       
  
<h1>params</h1>
  
  <GetDataPages search={search.search} tipo={search.tipo ? search.tipo : null} />  

        {/*  <NavigationDataPages /> */}
      
         
         </>
        
      

      
  )
}

export default pageSearch

import "../styles/globals.css";


import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import GetDataGenero from '../components/GetDataGenero'

export const metadata = {
  title: "Peliculas & Series By FreddyJS",
  description: "Consulte informacion sobre sus peliculas y series favoritas",
  applicationName: 'Next.js',
  authors: [ { name: 'FreddyJS', url: 'https://freddyjs23.github.io/portafolio/' }],
  keywords: ['Peliculas', 'Series'],
  creator: 'Freddy Solarte',
  publisher: 'Freddy Solarte',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav style={{marginTop:"3rem"}}>
        
      {/*   componente de servidor en componente cliente, se pasa como children el componente servidor */}
      <Navigation>
        <GetDataGenero/>
      </Navigation>
   
   
   <Sidebar visible={true}/>  

 </nav>
        </header>
        <main>
        {children} 
        </main>
        
      </body>
    </html>
  );
}

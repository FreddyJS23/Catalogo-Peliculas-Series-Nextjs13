import axios from "axios";
import styles from "../styles/data.module.css"
import dataDesconocido from "../../public/svg/dataDesconocido.svg"

async function getData(tituloData, catalago) {
  let options = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${tituloData}`,
    params: { exact: "true", titleType: catalago },
    headers: {
      "X-RapidAPI-Key": "e9914b2e24msh42f9a53e57e48d3p121109jsn41aef6923b54",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  
  
  let getData = await axios.request(options);
 
  let dataId = getData.data.results[0].id;

  options = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${dataId}`,
    params: { info: "base_info" },
    headers: {
      "X-RapidAPI-Key": "e9914b2e24msh42f9a53e57e48d3p121109jsn41aef6923b54",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  getData = await axios.request(options);
  let dataInfo = getData.data;

  return dataInfo;
}

export default async function GetData({ tituloData, catalago }) {
  let { results } = await getData(tituloData, catalago);

  let {
    primaryImage,
    titleType,
    genres,
    titleText,
    releaseYear,
    releaseDate,
    ratingsSummary,
    plot,
    episodes,
    runtime,
  } = results;

  return (
    <div className={styles.data}>
      <div className={styles['data-portada']}>
        <img src={primaryImage ? primaryImage.url : dataDesconocido} alt=""  />
      <button>Ver trailer</button>
      </div>

      <div  className={styles['data-informacion']}>
        <div className={styles['data-informacion-titulo']}>
          <h2>{titleText.text}</h2>
        </div>

        <div className={styles['data-informacion-categoria']}>
          <h3>{titleType.text}</h3>
        </div>
        <div className={styles['data-informacion-descripcion']}>
          <p>{plot.plotText.plainText}</p>
        </div>

        <div className={styles['data-informacion-extra']}>
          
          <div className={styles['data-informacion-extra-datos']}>
          <p>rating: {ratingsSummary ? ratingsSummary.voteCount : "Desconocido"}</p>
           <p>año: {releaseYear.year}</p>
           <p>genero:{genres.genres.map((genero) => ` ${genero.text} `   )}</p>
           <p>duracion:{runtime ? runtime.displayableProperty.value.plainText : "Desconocido"}</p>
           <p>{plot.language.id}</p>
           
          
          </div>

          <div  className={styles['data-informacion-extra-temporadas']}>
              <p>temporada</p>
              <p>episodios por temprada</p>
              <p>total episodios</p>
            </div>
    
        </div>

       
      </div>
    </div>
  );
}

import styles from "../../styles/about.module.css"

const page = () => {
  return (
    <div className={styles.about}>
      <h2>Acerca</h2>
      <p>
        Aplicación web de consulta de series y películas es la herramienta
        perfecta para los fanáticos del cine y la televisión. Utilizando la api 
        <b> MoviesDatabase</b>  ,los usuarios pueden encontrar fácilmente información
        detallada sobre sus series y películas favoritas <br />

      
      </p>
      <p>  Aplicación hecha con Next.js con fines de aprendizaje</p>
<div className="logo">
<a href="https://freddyjs23.github.io/portafolio/" target="_blank">  <span className={`${styles["icono-logo"]} iconos`}></span></a>
</div>
    </div>
  );
};

export default page;

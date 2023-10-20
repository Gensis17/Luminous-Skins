import React from "react";
import styles from "./SkinCare.module.css";

const SkinCare = () => {
  return (
    <div name= "SkinCare" className={styles.titulo}><p><b>Bienvenida a la sección de skin Care.</b></p>

    <div  className={styles.contenedor}>
      <div className={styles.item}>
        <img
        src={require('../Fotos/BloqueadorSolarImage.jpeg')}
        alt='Imagen1'/>
        <p className={styles.textoConBorde}>BLOQUEADOR SOLAR</p>
      </div>

      <div className={styles.item}>
        <img
        src={require('../Fotos/Mascarillasimage.jpeg')}
        alt='Imagen2'/>
        <p className={styles.textoConBorde}>MASCARILLAS</p>
      </div>

      <div className={styles.item}>
        <img
        src={require('../Fotos/Niancinamide.jpeg')}
        alt='Imagen3'/>
        <p className={styles.textoConBorde}>VITAMINA</p>
      </div>

      <div classname={styles.item}>
        <img
        src={require('../Fotos/SkinCare4.jpeg')}
        alt="Imagen4"/>
        <p className={styles.textoConBorde}>JABÓN FACIAL</p>
      </div>
    </div>

  </div>
  );
};

export default SkinCare;
import React from 'react';
import styles from "./Rostro.module.css";

const Maquillaje = () => {
  return (
    <div name= "Maquillaje" className={styles.titulo}><p><b>Todo el maquillaje que necesitas para tu rostro.</b></p>

    <div  className={styles.contenedor}>
      <div className={styles.item}>
      <img
      src={require('../Fotos/Maquillaje1.jpeg')}
      alt='Imagen1'/>
      <p className={styles.textoConBorde}>RÍMEL</p>
    </div>

    <div className={styles.item}>
      <img
      src={require('../Fotos/Maquillaje2.jpeg')}
      alt='Imagen2'/>
      <p className={styles.textoConBorde}>PALETA</p>
    </div>

    <div className={styles.item}>
      <img
      src={require('../Fotos/Maquillaje3.jpeg')}
      alt='Imagen3'/>
      <p className={styles.textoConBorde}>LABIAL</p>
      </div>

      <div className={styles.item}>
        <img
        src={require('../Fotos/Maquillaje4.jpeg')}
        alt='Imagen4'/>
        <p className={styles.textoConBorde}>RUBOR</p>
      </div>
    </div>
    </div>
  );
};

export default Maquillaje;
import React from 'react';
import styles from "./Ojos.module.css";


const Accesorios = () => {
  return (
    <div name= "Accesorios" className={styles.titulo}><p><b>Los accesorios son un plus para tu rutina diaria.</b></p>
    
    <div  className={styles.contenedor}>
      <div className={styles.item}>
        <img
        src={require('../Fotos/BinchaImage.jpeg')}
        alt='Imagen1'/>
        <p className={styles.textoConBorde}>HAIR BAND</p>
      </div>

      <div className={styles.item}>
        <img
        src={require('../Fotos/GuashaImage.jpeg')}
        alt='Imagen2'/>
        <p className={styles.textoConBorde}>GUA SHA</p>
       </div>

      <div className={styles.item}>
        <img
        src={require('../Fotos/BrochasImage.jpeg')}
        alt='Imagen3'/>
        <p className={styles.textoConBorde}>BROCHAS</p>
      </div>

      <div className={styles.item}>
        <img
        src={require('../Fotos/Accesorios4.jpeg')}
        alt="Imagen4"/>
        <p className={styles.textoConBorde}>LIMPIADOR FACIAL</p>
      </div>
    </div>
</div>
  );
};

export default Accesorios;
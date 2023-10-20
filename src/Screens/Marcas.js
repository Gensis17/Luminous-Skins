import React from "react";
import {Link} from "react-scroll";
import styles from "./Marcas.module.css";

const Marcas = () => {
  return (
    <div name= "Marcas" className={styles.Marcas}>
      <div className={styles.tittleContainer}>
        <p className={styles.textoConBorde}><b>Adquiere ahora tus productos favoritos!</b></p>
      </div>

      <div className={styles.item}>
        <img
        src={require('../Fotos/Marca1.jpg')}
        alt='Imagen1'/>
        <p className={styles.textoConBorde}>BEAUTY CREATIONS</p>
      </div>

      <div className={styles.item}>
        <img
        src={require('../Fotos/Marca2.jpeg')}
        alt='Imagen2'/>
        <p className={styles.textoConBorde}>THE ORDINARY</p>
      </div>

      <div className={styles.item}>
      <img
        src={require('../Fotos/Marca3.png')}
        alt='Imagen3'/>
       <p className={styles.textoConBorde}>NIVEA</p>
      </div>
      
    <div className= {styles.ctaContainer}>
      <Link
        to= "Contact" 
        smooth 
        duration={500} 
        className= {styles.callToAction}>
        Mas Informacion
        </Link> 
      </div>
    </div>
    );
};

export default Marcas;
import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
   <div name="Contact" className={styles.Contact}>
    <h1><b>Contáctanos</b></h1>
        <form className={styles.form}
        method="POST"
        action="https://getform.io/f/bcfa2c30-bf93-4196-b745-58ac5c7bdc5c"
        >
            <label for="Nombre"><b>Nombre</b></label>
            <input id="Nombre" name="Nombre" className={styles.input}></input>
            <label for="Correo"><b>Correo</b></label>
            <input 
                id="Correo" 
                name="Correo"
                type="Correo" 
                className={styles.input}
            ></input>
            <label for="Mensaje"><b>Consulta/Mensaje</b></label>
            <textarea id="Mensaje" className={styles.textArea}></textarea>
            <button type="Enviar"><b>Enviar</b></button>
        </form>
  </div>
  );
};

export default Contact;
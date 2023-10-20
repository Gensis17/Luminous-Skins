import React, {useEffect, useState} from "react";
import {Link} from "react-scroll";
import styles from "./PrimerComponente.module.css";
import {AiOutlineMenu} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import {useScrollPosition} from "../Hooks/ScrollPosition";

const PrimerComponente = () => {
  const [PrimerComponenteOpen, setPrimerComponenteOpen] = useState (false);
  const[windowDimension, setwindowDimension]= useState ({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const detectDimension = () =>{
    setwindowDimension({
      width: window.innerHeight,
      height: window.innerHeight,
    })
  }

  useEffect(()=>{
    window.addEventListener('resize', detectDimension)
    windowDimension.width > 800 && setPrimerComponenteOpen (false)
    return () => {
      window.removeEventListener('resize',detectDimension)
    }
  },[windowDimension])

  const links = [
    { 
      id: 1,
      link: "Marcas",
    },
    {
      id: 2,
      link: "SkinCare",
    },
    {
      id: 3,
      link: "Maquillaje",
    },
    {
      id: 4,
      link: "Accesorios",
    },
  ];

  const ScrollPosition = useScrollPosition();

  return (
    <div 
      className={
        PrimerComponenteOpen 
        ? styles.PrimerComponenteOpen
        : ScrollPosition > 0
        ? styles.PrimerComponenteOnScroll
        : styles.PrimerComponente
      }
    >
      {!PrimerComponenteOpen && <p className={styles.logo}>Luminous Skins</p>}
      {!PrimerComponenteOpen && windowDimension.width < 800 ? ( 
        <AiOutlineMenu
        
        onClick = {() => setPrimerComponenteOpen (!PrimerComponenteOpen)}
        size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <GrClose 
           onClick = {() => setPrimerComponenteOpen (!PrimerComponenteOpen)}
           
           size={25}
         />
       )
     )}
      {PrimerComponenteOpen  && (
        <ul className={styles.linksContainer}> 
          {links.map((x) => (
             <div>
              <Link
                 onClick={() => setPrimerComponenteOpen (!PrimerComponenteOpen)}
                 to={x.link}
                 smooth
                 duration={500}
                 className={styles.PrimerComponenteLink}
             >
                 {x.link === "SkinCare" ? "Skin Care" : x.link}
              </Link>
             <div className={styles.border}></div>
          </div>
         ))}
       </ul>
      )}

      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}> 
        {links.map((x)=> (
           <div>
            <Link
               onClick={() => setPrimerComponenteOpen(false)}
               to={x.link}
               smooth
               duration={500}
               className={styles.PrimerComponenteLink}
           >
               {x.link === "SkinCare" ? "Skin Care" : x.link}
            </Link>

           <div className={styles.border}></div>
        </div>
       ))}
       <Link
          onClick={() => setPrimerComponenteOpen(false)}
          to= "Contact"
          smooth
          duration={500}
          className={styles.contactLink}
        >
          Contacto
        </Link>
     </ul>
      )}

  </div>
  );
};

export default PrimerComponente;
import styles from "./WindowFrame.module.css";
import background from "../assets/Background.png";
import closeButton from "../assets/Button_Close.png"; 
import minimizeButton from "../assets/Button_Minimize.png";

function WindowFrame({ children }) {
  return (
   <div className={styles.window} style={{ backgroundImage: `url(${background})` }}>
        <div className={styles.header}>
                <span className={styles.title}>Egg Timer :3</span>
                <div className={styles.buttons}>
                    <img src={minimizeButton} alt="Minimize" className={styles.icon} />
                    <img src={closeButton} alt="Close" className={styles.icon} />
                </div>    
        </div>
        <div className={styles.body}>
                {children}
        </div>
    </div>
    
  );
}

export default WindowFrame;


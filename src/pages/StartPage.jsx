import styles from "./StartPage.module.css";
import Page from "../components/Page.jsx";
import WindowFrame from "../components/WindowFrame.jsx";
import Whole_Egg from "../assets/Whole_Egg.png";
import { useNavigate } from "react-router-dom";


function StartPage() {
  const navigate = useNavigate();

  return (
    <Page>
        <div className={styles.startContent}>
          <img src={Whole_Egg} alt="Egg" className={styles.egg} />
          <p className={styles.text}>Let’s get cracking!</p>
          <button className={styles.startButton} onClick={() => navigate("/menu")}>
          Start
          </button>
        </div>  
    </Page>
  );
}

export default StartPage;
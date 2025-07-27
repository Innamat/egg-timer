import styles from "./StartPage.module.css";
import WindowFrame from "../components/WindowFrame.jsx";
import Whole_Egg from "../assets/Whole_Egg.png";
import { useNavigate } from "react-router-dom";


function StartPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
        <WindowFrame>
            <img src={Whole_Egg} alt="Egg" className={styles.egg} />
            <p className={styles.text}>Let’s get cracking!</p>
            <button className={styles.startButton} onClick={() => navigate("/menu")}>
            Start
            </button>
        </WindowFrame>
    </div>
  );
}

export default StartPage;
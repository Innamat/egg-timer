import styles from "./MenuPage.module.css";
import Page from "../components/Page.jsx";
import { eggTypes } from "../data/eggTypes.js"
import { useNavigate } from "react-router-dom";


function MenuPage() {
  const navigate = useNavigate();

  return (
    <Page>
        <div className={styles.menuItems}>
            <div className={styles.menuItems}>
                {Object.entries(eggTypes).map(([key, egg]) => (
                    <div key={key} className={styles.eggCard} onClick={() => navigate(`/timer/${key}`)}>
                        <img src={egg.image} alt={egg.label} className={styles.eggImage} />
                        <p className={styles.eggLabel}>{egg.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </Page>
  );
}

export default MenuPage;
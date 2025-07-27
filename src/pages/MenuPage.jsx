import styles from "./MenuPage.module.css";
import Page from "../components/Page.jsx";
import eggTypes from "../data/eggTypes.js"
import { useNavigate } from "react-router-dom";


function MenuPage() {
  const navigate = useNavigate();

  return (
    <Page>
        <div className={styles.menuItems}>
            
        </div>
    </Page>
  );
}

export default MenuPage;
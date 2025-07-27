import { useState } from "react";
import styles from "./Page.module.css";
import WindowFrame from "./WindowFrame.jsx";

function Page({ children }) {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div className={styles.page}>
      {!isClosed && (
        <WindowFrame onClose={() => setIsClosed(true)}>
          {children}
        </WindowFrame>
      )}
      {isClosed && <p className={styles.hiddenText}>No eggs!</p>}
    </div>
  );
}

export default Page;
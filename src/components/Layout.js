import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import EmailModal from "./EmailModal";
// import { shouldPromptEmail } from "../utils/checkEmailPrompted";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const [isEmailPrompted, setIsEmailPrompted] = useState(false);

  // useEffect(() => {
  //   if (shouldPromptEmail()) {
  //     setIsEmailPrompted(true);
  //   }
  // }, []);

  return (
    <div className={styles.root}>
      {isEmailPrompted && (
        <EmailModal handleClose={() => setIsEmailPrompted(false)} />
      )}
      <div className={styles.content}>
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

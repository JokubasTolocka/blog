import * as React from "react";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import Layout from "../components/Layout";
import TitleHeader from "../components/TitleHeader";
import NewArticles from "../components/NewArticlesTitle";
import styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.content}>
          <TitleHeader />
        </div>
        <NewArticles />
      </div>
    </Layout>
  );
};

export default IndexPage;

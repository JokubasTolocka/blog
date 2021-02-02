import React from "react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Link from "../components/Link";
import styles from "./404.module.scss";

const NotFoundPage = () => {
  return (
    <Layout>
      <Meta title="Blog" />
      <div className={styles.root}>
        <h1 className={styles.title}>Page not found</h1>
        <h4 className={styles.text}>
          The page you are looking for was not found.
          <br />
          <Link to="/" className={styles.link}>
            Return to Home
          </Link>
        </h4>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

import React from "react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import SVG from "../assets/about.svg";
import ContentWrapper from "../components/ContentWrapper";
import styles from "./about.module.scss";

const About = () => {
  return (
    <Layout>
      <Meta title="About | Daydian" />
      <ContentWrapper>
        <h3 className={styles.title}>About us</h3>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.sectionTitle}>
              Welcome to <span className={styles.emphasis}>Daydian</span>
            </h3>
            <div className={styles.section}>
              <div className={styles.line}></div>
              <p className={styles.text}>
                We are a group of writers who aspire to inspire people every
                day. We love to deliver useful content which helps people on
                their day-to-day basis.
              </p>
              <p className={styles.text}>
                We put careful research into products that we recommend to make
                sure that the readers feel that our content is tailored to them.
              </p>
              <p className={styles.text}>
                We constantly aim to improve our process of researching and
                picking the right content for the readers to make it worth their
                time because there is nothing more valuable to us than{" "}
                <span className={styles.emphasis}>You</span>.
              </p>
            </div>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.section}>
              <div className={styles.line}></div>
              <p className={styles.text}>
                We love connecting with our readers. Let us know how we're
                doing!
              </p>
              <li className={styles.email}>daydian.business@gmail.com</li>
            </div>
          </div>
          <SVG className={styles.svg} />
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default About;

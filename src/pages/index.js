import * as React from "react";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import TitleHeader from "../components/TitleHeader";
import NewArticles from "../components/NewArticlesTitle";
import TechnologySection from "../components/TechnologySection";
import FashionSection from "../components/FashionSection";
import OutdoorsSection from "../components/OutdoorsSection";
import ReviewsSection from "../components/ReviewsSection";
import ContentWrapper from "../components/ContentWrapper";
import styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <Meta />
      <ContentWrapper>
        <TitleHeader />
      </ContentWrapper>
      <NewArticles />
      <ContentWrapper>
        <div className={styles.sections}>
          <TechnologySection />
          <FashionSection />
          <OutdoorsSection />
          <ReviewsSection />
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default IndexPage;

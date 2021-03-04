import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const LANG = "en";

const Meta = ({ description, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  description =
    description ||
    "Read inspiring articles which help you make the best decisions." ||
    site.siteMetadata.description;

  const siteTitle = title || "Daydian";
  return (
    <Helmet
      htmlAttributes={{
        lang: LANG,
      }}
      title={siteTitle}
      titleTemplate={`%s | Daydian`}
      defaultTitle="Daydian"
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: siteTitle,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: siteTitle,
        },
        {
          name: "twitter:description",
          content: description,
        },
      ].concat(meta)}
    />
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};
Meta.defaultProps = {
  title: undefined,
  description: undefined,
  meta: [],
};

export default Meta;

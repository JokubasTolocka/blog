import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const LANG = "en";

const constructUrl = (baseUrl, path) =>
  !baseUrl || !path ? null : `${baseUrl}${path}`;

const Meta = ({ description, meta, title, imageUrl, imageAlt }) => {
  const { site, ogImageDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        ogImageDefault: file(relativePath: { eq: "headerImage.png" }) {
          childImageSharp {
            fixed {
              src
            }
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

  const defaultImageUrl = constructUrl(
    "https://daydian.com",
    ogImageDefault?.childImageSharp?.fixed?.src
  );

  const ogImageUrl = imageUrl || defaultImageUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang: LANG,
      }}
      title={siteTitle}
      titleTemplate={`%s`}
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
        { property: `og:image`, content: ogImageUrl },
        {
          property: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:image:alt`,
          content: imageAlt || "Daydian",
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

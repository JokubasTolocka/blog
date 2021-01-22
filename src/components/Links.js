import React from "react";
import classnames from "classnames";
import Link from "./Link";
import Constants from "../constants/categories";
import styles from "./Links.module.scss";

const NavLinks = () => {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <>
      {Constants.map((category, index) => (
        <Link
          key={index}
          to={category.path}
          className={classnames(
            styles.link,
            path.startsWith(category.path) && styles.active
          )}
        >
          {category.category}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;

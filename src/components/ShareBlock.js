import React, { useState } from "react";
import {
  Share,
  Facebook,
  Twitter,
  Linkedin,
  Link,
} from "@styled-icons/feather";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import styles from "./ShareBlock.module.scss";

const ShareButtons = ({ frontmatter }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const title = `Read ${frontmatter.title} `;
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
  };

  return (
    <div className={styles.root}>
      <div className={styles.shareButton}>
        <Share
          size={24}
          className={styles.icon}
          onClick={() => setIsSelectOpen((prev) => !prev)}
        />
      </div>
      {isSelectOpen && (
        <div className={styles.selectRoot}>
          <TwitterShareButton
            url={url}
            title={title}
            className={styles.selectItem}
          >
            <Twitter size={24} className={styles.selectIcon} /> Twitter
          </TwitterShareButton>
          <FacebookShareButton url={url} className={styles.selectItem}>
            <Facebook size={24} className={styles.selectIcon} /> Facebook
          </FacebookShareButton>
          <LinkedinShareButton url={url} className={styles.selectItem}>
            <Linkedin size={24} className={styles.selectIcon} /> LinkedIn
          </LinkedinShareButton>
          {/* eslint-disable-next-line */}
          <div
            role="button"
            tabIndex={0}
            className={styles.selectItem}
            onClick={() => copyLink()}
          >
            <Link size={24} className={styles.selectIcon} /> Copy Link
          </div>
        </div>
      )}
    </div>
  );
};
export default ShareButtons;

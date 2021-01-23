import React, { useState, useRef, useEffect } from "react";
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
  const wrapperRef = useRef(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const title = `Read ${frontmatter.title} `;
  const url = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

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
        <div className={styles.selectRoot} ref={wrapperRef}>
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

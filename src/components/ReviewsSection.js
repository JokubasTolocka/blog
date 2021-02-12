import React from "react";
import Review from "./Review";
import styles from "./TechnologySection.module.scss";

const ReviewsSection = () => (
  <div>
    <h4 className={styles.title}>Reviews</h4>
    <div>
      <Review
        text="I have found Daydian to be the perfect way to start my day."
        author="Elizabeth, Reader"
      />
      <Review
        text="I love mountain biking and nature, Daydian combines the two. Nothing beats morning coffee and a fresh article."
        author="Matt, Reader"
      />
      <Review
        text="Finally having a platform to express myself and help people definitely made me so much more satisfied with where I am."
        author="Christina, Writer"
      />
    </div>
  </div>
);

export default ReviewsSection;

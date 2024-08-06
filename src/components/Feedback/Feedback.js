import React from "react";
import styles from "./Feedback.module.css";
import reviews from "./Data";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Feedback() {
  return (
    <>
      {/* Title */}
      <div className={styles.title}>Customers' Feedback</div>
      
      {/* Reviews Container */}
      <div className={styles.reviewsContainer}>
        {reviews.map((review) => (
          // Review item
          <div key={review.name} className={styles.review}>
            {/* Reviewer details */}
            <div className={styles.reviewer}>
              <img
                src={review.profile}
                alt={review.name}
                className={styles.reviewerAvatar}
              />
              <div>
                <h3 className={styles.reviewerName}>{review.name}</h3>
                <div className={styles.rating}>
                  {/* Star ratings */}
                  {Array.from({ length: 5 }, (_, index) => {
                    const ratingValue = index + 1;
                    return ratingValue <= review.rating ? (
                      <FaStar key={index} className={styles.filledStar} />
                    ) : ratingValue - 0.5 === review.rating ? (
                      <FaStarHalfAlt
                        key={index}
                        className={styles.filledStar}
                      />
                    ) : (
                      <FaStar key={index} className={styles.unfilledStar} />
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Review text */}
            <p className={styles.reviewText}>{review.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

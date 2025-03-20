import { useState } from "react";
import styles from "./starPattern.module.css";
const StarPattern = ({
  totalStars = 5,
  initialRating = 0,
  starSize = "24px",
  filledColor = "red",
  emptyColor = "black",
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(null);

  const handleMouseClick = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };
  const handleMouseLeave = () => {
    setHoverRating(null);
  };
  const handleOnMouseEnter = (value) => {
    setHoverRating(value);
  };
  const displayedRating = hoverRating !== null ? hoverRating : rating;
  return (
    <div className={styles.starPattern} onMouseLeave={handleMouseLeave}>
      {[...Array(totalStars)].map((_, index) => {
        return (
          <span
            key={index + 1}
            style={{
              fontSize: starSize,
              color: index + 1 <= displayedRating ? filledColor : emptyColor,
            }}
            onMouseEnter={() => handleOnMouseEnter(index + 1)}
            onClick={() => handleMouseClick(index + 1)}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
};

export default StarPattern;

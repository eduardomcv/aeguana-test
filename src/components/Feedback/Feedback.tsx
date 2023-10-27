import { useState } from "react";
import { Star } from "../Star";

import "./Feedback.scss";

export function Feedback() {
  const [rating, setRating] = useState(0);

  const stars = Array.from({ length: 5 }).map((_, index) => {
    function handleFeedbackClick() {
      setRating(index + 1);
    }

    return (
      <button key={index} onClick={handleFeedbackClick}>
        <Star filled={rating >= index + 1} />
      </button>
    );
  });

  return <div className="feedback-container">{stars}</div>;
}

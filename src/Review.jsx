import { useState } from "react";

const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const { name, review, image, position } = reviews[index];

  function randomReview() {
    setIndex(Math.floor(Math.random() * reviews.length));
  }
  function prevReview() {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function nextReview() {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="card">
      <div className="avatar">
        <img src={image} alt="img" />
      </div>

      <div className="details">
        <h3>{name}</h3>
        <span>{position}</span>
        <p>{review}</p>
      </div>

      <div className="buttons">
        <i onClick={prevReview} className="fas fa-arrow-left fa-2x"></i>
        <i onClick={nextReview} className="fas fa-arrow-right fa-2x  "></i>
      </div>

      <button onClick={randomReview}>Random Review</button>
    </div>
  );
};

export default Review;

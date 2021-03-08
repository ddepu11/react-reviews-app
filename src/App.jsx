import React, { useEffect, useState } from "react";
import "./App.css";
import Review from "./Review";
import reviews from "./reviews";

export default function App() {
  const [reviewsArr, setReviewsArr] = useState([]);

  useEffect(() => {
    setReviewsArr(reviews);
  }, []);

  return (
    <div className="container">
      <h2>Top Reviews</h2>
      <div className="line"></div>
      {reviewsArr.length !== 0 ? <Review reviews={reviewsArr} /> : ""}
    </div>
  );
}

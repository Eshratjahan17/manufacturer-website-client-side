import React from 'react';

const Review = ({ review }) => {
  console.log(review);
  return (
    <div class="card w-96 bg-base-100 shadow-xl border-2 border-secondary ">
      <div class="avatar absolute -right-0 -top-9 border-3">
        <div class="w-24 rounded  mt-5">
          <img src={review.picture} alt={review.name} />
        </div>
      </div>
      <div class="card-body mt-7">
        <h2 class="card-title text-secondary">{review.name}</h2>
        <p>{review.about}</p>
        <div className="flex items-center">
          <h4 className="text-secondary text-xl font-semibold">
            Ratings:<span>{review.ratings}</span>
          </h4>
          <div class="rating rating-md">
            <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
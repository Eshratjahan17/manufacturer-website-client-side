import React from 'react';

const Reviwes = () => {
  return (
    <div>
      <div
        id="reviwes"
        className="px-5 my-8  flex lg:flex-row justify-center gap-4 sm:flex-col sm:flex-auto "
      >
        <div class="card w-96 bg-base-100 shadow-xl border-2 border-secondary ">
          <div class="avatar absolute -right-0 -top-9 border-3">
            <div class="w-24 rounded  mt-5">
              <img src="https://api.lorem.space/image/face?hash=92048" />
            </div>
          </div>
          <div class="card-body mt-7">
            <h2 class="card-title text-secondary">Customer Name</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              culpa consequuntur voluptatibus voluptas dicta?
            </p>
            <div className="flex items-center">
              <h4 className="text-secondary text-xl font-semibold">
                Ratings:<span>5/5</span>
              </h4>
              <div class="rating rating-md">
                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviwes;
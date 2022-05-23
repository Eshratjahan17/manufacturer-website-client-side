import React from 'react';

const Products = () => {
  return (
    <div className="flex lg:flex-row justify-center gap-4 sm:flex-col sm:flex-auto">
      <div class="card w-96 bg-secondary shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-white">Shoes!</h2>
          <p className="text-white">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div class="card-actions justify-between">
            <div class="badge badge-outline text-white">Minimum Order:</div>
            <div class="badge badge-outline text-white">Available:</div>
          </div>
          <div className=" flex justify-center">
            <button class="btn bg-white text-secondary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
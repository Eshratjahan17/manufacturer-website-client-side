import React from 'react';

const Products = () => {
  return (
    <div className="my-9">
      <h1 className="text-center text-3xl text-secondary font-bold mt-9">
        Our Products
      </h1>
      <div class="divider w-1/4 mx-auto "></div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 place-content-center pr-2 pl-5  ">
        <div class="card w-96 bg-secondary shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
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
            <p className="text-white font-semibold">
              Price:$<span className="text-lg">100</span>
            </p>
            <div class="card-actions justify-between my-3">
              <div class="badge badge-outline text-white p-3 font-semibold">
                Minimum Order:<span className="text-lg">100</span>
              </div>
              <div class="badge badge-outline p-3 text-white font-semibold">
                Available:<span className="text-lg">10000</span>
              </div>
            </div>
            <div className=" flex justify-center">
              <button class="btn bg-primary text-white hover:bg-white hover:text-primary rounded-full mt-5">
                Buy Now
              </button>
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
    </div>
  );
};

export default Products;
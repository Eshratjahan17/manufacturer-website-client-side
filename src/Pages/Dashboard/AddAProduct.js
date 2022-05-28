import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAProduct = () => {

   
   
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.productName;
    
    const picture = data.productUrl;
    const about = data.about;
    const price = data.price;
    const available = data.available;
    const minimum = data.minimum;
    const brand = data.madein;
    const productInfo={name,picture,about,price,available,minimum,brand}
    

   
   fetch("https://dry-beyond-73074.herokuapp.com/addProduct", {
     method: "POST",
     body: JSON.stringify(productInfo),
     headers: {
       "content-type": "application/json",
     },
   })
     .then((res) => res.json())
     .then((data) =>{
       toast('Product Added SucessFully');
        reset({
          productName: " ",
          madein: " ",
          about: " ",
          price: " ",
          available: " ",
          minimum: " ",
          productUrl: " ",
        });
       

       
     } )


    
  }
  return (
    <div className="overflow-x-hidden bg-base-200">
      <h1 className="text-center text-3xl text-secondary font-bold mt-9  ">
        Add a Product
      </h1>
      <div>
        <form
          className="w-full mx-auto ml-28 mt-10 drop-shadow-md "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="form-control lg:w-1/2 sm:w-full mx-auto">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name here"
              class="input input-bordered lg:w-1/2 sm:w-full max-w-xs"
              {...register("productName")}
            />
          </div>
          <div class="form-control lg:w-1/2 sm:w-full mx-auto">
            <label class="label">
              <span class="label-text">Made In</span>
            </label>
            <input
              type="text"
              placeholder="Made In here"
              class="input input-bordered w-full max-w-xs"
              {...register("madein")}
            />
          </div>

          <div class="form-control lg:w-1/2 sm:w-full mx-auto">
            <label class="label">
              <span class="label-text">About</span>
            </label>
            <input
              type="text"
              placeholder="About here"
              class="input input-bordered w-full max-w-xs"
              {...register("about", {
                required: {
                  value: true,
                  message: "This filed is reqiured",
                },
              })}
            />
            <label class="label">
              {errors.address?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control lg:w-1/2 sm:w-full mx-auto">
            <label class="label">
              <span class="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price here"
              class="input input-bordered lg:w-1/2 sm:w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true,
                  message: "This filed is reqiured",
                },
              })}
            />
            <label class="label">
              {errors.price?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control lg:w-1/2 sm:w-full mx-auto">
            <label class="label">
              <span class="label-text">Available in Stock</span>
            </label>
            <input
              type="number"
              placeholder="Available Quantity here"
              class="input input-bordered w-full max-w-xs"
              {...register("available", {
                required: {
                  value: true,
                  message: "This filed is reqiured",
                },
              })}
            />
            <label class="label">
              {errors.available?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.available.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control lg:w-1/2 sm:w-full mx-auto">
            <label class="label">
              <span class="label-text">Minimum Order</span>
            </label>
            <input
              type="number"
              placeholder="Minimum Quantity here"
              class="input input-bordered w-full max-w-xs"
              {...register("minimum", {
                required: {
                  value: true,
                  message: "This filed is reqiured",
                },
              })}
            />
            <label class="label">
              {errors.minimum?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.minimum.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control lg:w-1/2 sm:w-full mx-auto">
            <label class="label">
              <span class="label-text">Product Image</span>
            </label>
            <input
              type="url"
              placeholder="Product image url here"
              class="input input-bordered w-full max-w-xs"
              {...register("productUrl", {
                required: {
                  value: true,
                  message: "Field is reqiured",
                },
              })}
            />
            <label class="label">
              {errors.productUrl?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.productUrl.message}
                </span>
              )}
            </label>
          </div>

          <input
            type="submit"
            value="Add Product"
            className="btn lg:w-1/3 sm:w-full lg:ml-64 flex justify-center rounded-full  hover:border-2 hover:bg-transparent hover:text-secondary bg-secondary text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
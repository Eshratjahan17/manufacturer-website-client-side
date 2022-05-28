import React from 'react';
import { useNavigate } from "react-router-dom";

const Tool = ({tool}) => {
  // console.log(tool);
  const navigate = useNavigate();
  const {_id,name,about,price,picture,minimum,available}=tool;
  const handletools=(id)=>{
    
    navigate(`/tools/${id}`);
  }
  return (
    <div>
      <div class="card w-96 h-full my-7 bg-secondary shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-white">{name}</h2>
          <p className="text-white">{about}</p>
          <p className="text-white font-semibold">
            Price:$<span className="text-lg">{price}</span>
          </p>
          <div class="card-actions justify-between my-3">
            <div class="badge badge-outline text-white p-3 font-semibold">
              Minimum Order:<span className="text-lg">{minimum}</span>
            </div>
            <div class="badge badge-outline p-3 text-white font-semibold">
              Available:<span className="text-lg">{available}</span>
            </div>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={() => handletools(_id)}
              to="/purchage"
              class="btn bg-primary text-white hover:bg-white hover:text-primary rounded-full mt-5"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
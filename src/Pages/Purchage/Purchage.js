import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

const Purchage = () => {
   let {id}=useParams();
   console.log(id);
   const [toolDetails,setToolDetails]=useState([]);
   useEffect(()=>{
     fetch(`http://localhost:5000/tools/${id}`)
     .then(res=>res.json())
     .then(data =>setToolDetails(data))
   },[])
 
  
  return (
    <div>
      <div>
        <div class="card w-96 bg-secondary shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src={toolDetails.picture} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-white">{toolDetails.name}</h2>
            <p className="text-white">{toolDetails.about}</p>
            <p className="text-white font-semibold">
              Price:$<span className="text-lg">{toolDetails.price}</span>
            </p>
            <div class="card-actions justify-between my-3">
              <div class="badge badge-outline text-white p-3 font-semibold">
                Minimum Order:
                <span className="text-lg">{toolDetails.minimum}</span>
              </div>
              <div class="badge badge-outline p-3 text-white font-semibold">
                Available:
                <span className="text-lg">{toolDetails.available}</span>
              </div>
            </div>
            <div className=" flex justify-center">
              <Link
                to="/purchage"
                class="btn bg-primary text-white hover:bg-white hover:text-primary rounded-full mt-5"
              >
                +
              </Link>
              <Link
                to="/purchage"
                class="btn bg-primary text-white hover:bg-white hover:text-primary rounded-full mt-5"
              >
               -
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchage;
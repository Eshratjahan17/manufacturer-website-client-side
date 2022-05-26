import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200  ">
        <div class="hero-content flex-col lg:flex-row w-5/6  ">
          <img
            src="https://media.istockphoto.com/photos/checking-the-windscreen-wiper-picture-id171587297?k=20&m=171587297&s=612x612&w=0&h=t6BZZaTJ7qdTVjj8qWt6HbuF_Q2I-utxdY-5CnleOL4="
            class="max-w-sm rounded-lg shadow-2xl"
          />

          <div className="ml-2">
            <h1 class="text-5xl font-bold">Best Solution With Us!</h1>
            <p class="py-6">
              automotive industry, all those companies and activities involved
              in the manufacture of motor vehicles, including most components,
              such as engines and bodies, but excluding tires, batteries, and
              fuel.
            </p>
            <Link to="/allProducts">
              <button class="btn btn-primary">
                Get Started With Our Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
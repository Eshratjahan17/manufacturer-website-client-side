import React from 'react';

const Blogs = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-5 gap-4">
      <div class="card w-96 bg-base-200 ">
        <div class="card-body items-center text-center ">
          <h2 class="card-title text-secondary">
            How To improve performance of react application?
          </h2>
          <p className="">
            <ol>
              <li>Using Immutable Data Structures</li>
              <li>Keeping component state local where necessary</li>
              <li>
                Memoizing React components to prevent unnecessary re-renders
              </li>
              <li>list virtualization in React applications</li>
            </ol>
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-200 ">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-secondary">
            what are the diffrent ways to manage a state in a react application?
          </h2>
          <p>
            <ol>
              <p>There are 5 ways to manage a state in react :</p>
              <li>Local state</li>
              <li>Global state</li>
              <li>Server State</li>
              <li>Url state</li>
              <li>Session state</li>
            </ol>
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-200 ">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-secondary">
            How does prototypical inheritance work?
          </h2>
          <p>
            prototypical inheritance refers to the ability to access object
            properties from another object. We use a JavaScript prototype to add
            new properties and methods to an existing object constructor. We can
            then essentially tell our JS code to inherit properties from a
            prototype
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-200 ">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-secondary">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p>
            I'll search using get method with query.in query i'll pass the name
            object ,thus i can search product by name.
          </p>
        </div>
      </div>
      <div class="card w-96 bg-base-200 ">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-secondary">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Unit test is basically isolating codes and testing if it is eorking
            properly or not.it is done during development .Unit testing ensures
            that all code meets quality standards before it's deployed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
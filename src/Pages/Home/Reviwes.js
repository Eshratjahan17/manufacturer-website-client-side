import React from 'react';

const Reviwes = () => {
  return (
    <div>
      <div className='px-5 my-8'>
        <div class="card w-96 bg-base-100 shadow-xl ">
          <div class="avatar absolute -right-0 -top-9 border-4">
            <div class="w-24 rounded  mt-5">
              <img src="https://api.lorem.space/image/face?hash=92048" />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Customer Name</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              culpa consequuntur voluptatibus voluptas dicta?{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviwes;
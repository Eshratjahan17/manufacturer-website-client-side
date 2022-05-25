import React from 'react';
import { Link } from 'react-router-dom';
import notfoundImg from '../../utilities/images/notfoundimg.jpeg';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <img className="h-3/6" src={notfoundImg} alt="" />
      <div>
        <Link to="/">
          <button class="btn btn-secondary text-white">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
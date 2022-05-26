import React from 'react';

const MyPortfolio = () => {
  return (
    <div className="">
      <div className="bg-secondary pl-9 py-5 ">
        <h1 className="text-3xl text-center font-semibold  text-white ">
          Eshrat Jahan
        </h1>
        <h3 className="text-sm text-white font-normal text-center ">
          eshratjahan701@gmail.com
        </h3>
      </div>
      <div className="bg-blue-100 text-center  py-11">
        <div className="mb-4">
          <h5 className="text-lg font-semibold ">Address:</h5>
          <p>SubidBazar,Sylhet</p>
        </div>
        <div className="mb-4">
          <h5 className="text-lg font-semibold ">Educational Background:</h5>
          <p>Bsc in Computer Science and engineering</p>
        </div>
        <div className="mb-4">
          <h5 className="text-lg font-semibold ">Skills:</h5>
          <ol>
            <li>Html</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Mongodb</li>
            <li>firebase</li>
            <li>Github</li>
            <li>Dev Tools</li>
          </ol>
        </div>
        <div className="mb-4">
          <h5 className="text-lg font-semibold ">Links Of projects:</h5>
          <p>1.https://warehouse-977a4.web.app/home</p>
          <p>2.https://event-management-booststrap.netlify.app/</p>
          <p>3.https://phone-stock.netlify.app/</p>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
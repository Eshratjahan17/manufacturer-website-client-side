import { useEffect, useState } from 'react';

const useData = () => {
  const [tools,setTools]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

     useEffect(() => {
       fetch("http://localhost:5000/addProduct")
         .then((res) => res.json())
         .then((data) => {
          const reversed= data.reverse().slice(0,6);
          setTools(reversed);
         });
     }, [tools]);


  return [tools, isLoading, setIsLoading];
};

export default useData;
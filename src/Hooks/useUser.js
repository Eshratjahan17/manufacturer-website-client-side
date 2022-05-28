import { useEffect, useState } from 'react';

const useUser = () => {
  const [users,setUsers]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://dry-beyond-73074.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) =>{
        setUsers(data);
        console.log(data);
      } );
  }, [users]);
  
  return [users,isLoading];
};

export default useUser;
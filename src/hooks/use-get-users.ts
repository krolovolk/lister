import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetUsers = () => {
  const [users, setUsers] = useState<Array<object>>([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch(error => {throw Error(error)})
  }, []);

  return { users }
}
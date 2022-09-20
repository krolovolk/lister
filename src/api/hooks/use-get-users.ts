import { useEffect, useState } from 'react';
import { listUsers } from '../api';
import { IUser } from '../types';

export const useGetUsers = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    listUsers.getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch(error => {throw Error(error)})
  }, []);

  return { users }
}
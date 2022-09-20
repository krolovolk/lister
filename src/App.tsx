import React, { useEffect, useState } from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import Header from './components/Header/Header';
import { List } from './components/List/List';
import { Button } from 'primereact/button';
import { IItem } from './types';
import { useGetUsers } from './api/hooks/use-get-users';


function App() {
  const items: IItem[] = [
    {id: 1, name: 'Abby', age: 36, mood: 'Fun'},
    {id: 2, name: 'Gabby', age: 56, mood: 'Pitty'},
    {id: 3, name: 'Cabby', age: 64, mood: 'Lounge'},
    {id: 4, name: 'Dabby', age: 27, mood: 'Great'},
  ];
  const { users } = useGetUsers();

  return (
    <>
      <Header />
      <h2>Dynamic List</h2>
      <List items={users}/>
      <h2>Static List</h2>
      <List items={items}/>
      <Button label="Click" icon="pi pi-check" iconPos="right" />
    </>
  );
}

export default App;

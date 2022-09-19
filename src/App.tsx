import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { List } from './components/List/List';
import { Button } from 'primereact/button';
import { IItem } from './types';


function App() {
  const items: IItem[] = [
    {id: 1, name: 'Abby', age: 36, mood: 'Fun'},
    {id: 2, name: 'Gabby', age: 56, mood: 'Pitty'},
    {id: 3, name: 'Cabby', age: 64, mood: 'Lounge'},
    {id: 4, name: 'Dabby', age: 27, mood: 'Great'},
  ];

  return (
    <>
      <Header />
      <List items={items}/>
      <Button label="Click" icon="pi pi-check" iconPos="right" />
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { List } from './components/List/List';
import { Button } from 'primereact/button';


function App() {
  return (
    <>
      <Header />
      <List />
      <Button label="Click" icon="pi pi-check" iconPos="right" />
    </>
  );
}

export default App;

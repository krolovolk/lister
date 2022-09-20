import React from 'react';
import Header from './components/Base-Layout/Header/Header';
import { List } from './components/List/List';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { IItem } from './types';
import { useGetUsers } from './api/hooks/use-get-users';
import { Column } from 'primereact/column';
import { Main, MainContainer } from './components/Base-Layout/styled';


function App() {
  const items: IItem[] = [
    {id: 1, name: 'Abby', age: 36, mood: 'Fun'},
    {id: 2, name: 'Gabby', age: 56, mood: 'Pitty'},
    {id: 3, name: 'Cabby', age: 64, mood: 'Lounge'},
    {id: 4, name: 'Dabby', age: 27, mood: 'Great'},
  ];
  const { users } = useGetUsers();

  return (
    <MainContainer>
      <Header />
      <Main>
        <h2>Dynamic List</h2>
        <List items={users}/>
        <h2>Table List</h2>
        <DataTable value={users} responsiveLayout='scroll' >
          <Column field="id" header="ID" sortable />
          <Column field="username" header="USER" sortable />
          <Column field="name" header="NAME" sortable />
          <Column field="email" header="EMAIL" sortable />
          <Column field="company.name" header="COMPANY" sortable />
        </DataTable>
        <h2>Static List</h2>
        <List items={items}/>
        <Button label="Click" icon="pi pi-check" iconPos="right" />
      </Main>
    </MainContainer>
  );
}

export default App;

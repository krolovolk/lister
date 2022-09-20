import React from 'react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useGetUsers } from '../api/hooks/use-get-users';
import { IItem } from '../types';
import { List } from '../components/List/List';

const CatalogPage = () => {
  const items: IItem[] = [
    {id: 1, name: 'Abby', age: 36, mood: 'Fun'},
    {id: 2, name: 'Gabby', age: 56, mood: 'Pitty'},
    {id: 3, name: 'Cabby', age: 64, mood: 'Lounge'},
    {id: 4, name: 'Dabby', age: 27, mood: 'Great'},
  ];
  const { users } = useGetUsers();

  return (
    <>
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
    </>
  );
};

export default CatalogPage;
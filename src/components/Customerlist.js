import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Customerlist() {

const [customers, setCustomers] = useState([]);
  
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => setCustomers(data.content))
    .catch(err => console.error(err));
  }

  console.log(customers);


  const columns= [
    { field: 'firstname', sortable: true, filter: true, width: 130},
    { field: 'lastname', sortable: true, filter: true, width: 140},
    { headerName: 'Address', field: 'streetaddress', sortable: true, filter: true, width: 140},
    { field: 'postcode', sortable: true, filter: true, width: 130},
    { field: 'city', sortable: true, filter: true, width: 130},
    { field: 'email', sortable: true, filter: true, width: 150},
    { field: 'phone', sortable: true, filter: true, width: 140}
  ];

  return(
    <React.Fragment>
      <div className= "ag-theme-material" style={{height:'700px',width:'85%',margin:'auto'}}>
        <AgGridReact
          columnDefs={columns}
          rowData={customers}
          pagination={true}
          paginationPageSize={10}
          suppressCellSelection ={true}
        />
      </div>
    </React.Fragment>
  );

}

export default Customerlist;
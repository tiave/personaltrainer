import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Customerlist() {

const [customers, setCustomers] = useState([]);
const [trainings, setTrainings] = useState([]);
  
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => setCustomers(data.content))
    .catch(err => console.error(err));
  }

  const fetchTrainings = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then(response => response.json())
    .then(data => setTrainings(data.content))
    .catch(err => console.error(err));
  }

  const addCustomer = (customer) => {
    fetch('https://customerrest.herokuapp.com/api/customers', {
        method: 'POST', 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(customer)
    })
        .then(response => {
            if (response.ok) {
                fetchCustomers();
            }
            else {
                alert('Something went wrong :-(');
            }
        })
        .catch(err => console.error(err))
    }

    const editCustomer = (url, updatedCustomer) => {
      fetch(url, {
        method: 'PUT',
        headers:  { 'Content-type': 'application/json' },
        body: JSON.stringify(updatedCustomer)
      })
      .then(response => {
        if (response.ok) {
          fetchCustomers();
        }
        else {
          alert('Something went wrong :-(');
        }
      })
      .catch(err => console.error(err));
    }

    const addTraining = newTraining => {
      fetch('https://customerrest.herokuapp.com/api/trainings', {
        method: 'POST', 
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newTraining)

      })
      .then(response => {
        if (response.ok) {
          fetchTrainings();
        }
        else {
          alert('Something went wrong :-(');
        }
      })
      .catch(err => console.error(err));
    }

    const deleteCustomer = (url) => {
      if (window.confirm('Are you sure?')) {
        fetch(url, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                fetchCustomers();
            }
            else {
                alert('Something went wrong :-(');
            }
        }) 
        .catch(err => console.error(err));
        }
    }


  const columns= [
    { field: 'firstname', sortable: true, filter: true, width: 120},
    { field: 'lastname', sortable: true, filter: true, width: 120},
    { headerName: 'Address', field: 'streetaddress', sortable: true, filter: true, width: 140},
    { field: 'postcode', sortable: true, filter: true, width: 120},
    { field: 'city', sortable: true, filter: true, width: 120},
    { field: 'email', sortable: true, filter: true, width: 150},
    { field: 'phone', sortable: true, filter: true, width: 140},
    {
      headerName: '',
      field: 'links.0.href',
      width: 100,
      cellRendererFramework: params =>
        <AddTraining addTraining={addTraining}
          customer={params.value}
        />
    },
    {
      headerName: '',
      field: 'links.0.href',
      width: 100,
      cellRendererFramework: params =>
        <EditCustomer editCustomer={editCustomer}
        link={params.data.links[0].href} 
        customer={params.data} />
    },
    {
      headerName: '',
      field: 'links.0.href',
      width: 100,
      cellRendererFramework: params => 
      <Button
          size="small"
          onClick={() => deleteCustomer(params.value)}
          color="error"
      >
          Delete
      </Button>
    }
  ];

  return(
    <React.Fragment>
    <AddCustomer addCustomer={addCustomer} />
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
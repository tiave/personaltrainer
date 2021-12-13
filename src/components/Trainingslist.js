import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import moment from 'moment';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Trainingslist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchTrainings();
      }, []);

      const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings') //get trainings
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err));
      }

      const deleteTraining = url => {
        if (window.confirm('Are you sure?')) {
          fetch('https://customerrrest.herokuapp.com/api/trainings/' + url, { method: 'DELETE' })
          .then(response => {
            if (response.ok) {
              fetchTrainings();
            }
            else {
              alert('Something went wrong :-(');
            }
          })
          .catch(err => console.error(err));
          };

        }

      const columns= [
        { field: 'date', sortable: true, filter: true, cellRenderer: (data) => {
          return moment(data.createdAt).format('DD.MM.YYYY');}
        },
        { field: 'time', sortable: true, filter: true, cellRenderer: (data) => {
          return moment(data.createdAt).format('h:mm:ss a');}
        },
        { field: 'duration', sortable: true, filter: true, width: 140},
        { field: 'activity', sortable: true, filter: true, width: 140},
        { headerName: 'First name',field: 'customer.firstname', sortable: true, filter: true, width: 120},
        { headerName: 'Last name', field: 'customer.lastname', sortable: true, filter: true, width: 120},
        {
          headerName: '',
          width: 100,
          field: 'id',
          cellRendererFramework: params =>
          <Button
          size="small"
          onClick={() => deleteTraining(params.value)}
          color="error"
          >
          Delete
          </Button>
        }

      ];
    
      return(
        <React.Fragment>
          <div className= "ag-theme-material" style={{height:'700px',width:'85%',margin:'auto'}}>
            <AgGridReact
              columnDefs={columns}
              rowData={trainings}
              pagination={true}
              paginationPageSize={10}
              suppressCellSelection ={true}
            />
          </div>
        </React.Fragment>
      );
    
}

export default Trainingslist;
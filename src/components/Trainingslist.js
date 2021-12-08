import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Trainingslist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchTrainings();
      }, []);

      const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .catch(err => console.error(err));
      }

      console.log(trainings);
      const columns= [
        { field: 'date', sortable: true, filter: true},
        { field: 'duration', sortable: true, filter: true, width: 140},
        { field: 'activity', sortable: true, filter: true, width: 140},
        { field: 'content', sortable: true, filter: true, width: 130}
       
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
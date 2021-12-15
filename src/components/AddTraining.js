import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// näyttää yksittäisen asiakkaan treenit
function AddTraining(props) {

  const [open, setOpen] = useState(false);
  const [CTraining, setCTraining] = useState({
      date: '',
      duration: '',
      activity: '',
      customer: props.customer,
  });

  
  const inputChanged = (event) => {
    setCTraining({...CTraining, [event.target.name]: event.target.value});
  }

  /* const inputDateChanged = (event) => {
    setCTraining({...CTraining, date: new Date(event.target.value).toISOString() })
  } */
  
  const handleSave = () => {
    props.addTraining(CTraining);
    handleClose();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div>
        <Button size="small" onClick={handleClickOpen}>
          Add training
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Training</DialogTitle>
          <DialogContent>
          <TextField
              name="date"
              type="datetime-local"
              value={CTraining.date}
              onChange={inputChanged}
              margin="dense"
              label="Date"
              fullWidth
              variant="standard"
              InputLabelProps={{shrink: true}}
            />
             <TextField
              name="duration"
              value={CTraining.duration}
              onChange={inputChanged}
              margin="dense"
              label="Duration"
              fullWidth
              variant="standard"
            />
             <TextField
              name="activity"
              value={CTraining.activity}
              onChange={inputChanged}
              margin="dense"
              label="Activity"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );

  }

export default AddTraining;
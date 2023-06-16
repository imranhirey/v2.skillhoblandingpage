import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

const UserDialog = ({ open, onClose,data,onsave ,onchange}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    // Perform save action with the collected data (name, email, phone)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    // Close the dialog
    onClose();
  };

  const handleCancel = () => {
    // Close the dialog without saving
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {data.name}
      </DialogTitle>
      <DialogContent>

        {data.fields.map((field, index) => (
            <TextField
            style={{
                marginBottom: "1rem"
            }}
                key={index}
                autoFocus={index === 0}
                margin="dense"
                id={field.name}
                label={field.name}

                type={field.type}
                fullWidth
                required={field.required}
                placeholder={field.placeholder}
                onChange={onchange}
                />
        ))}



       
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="secondary">
          Cancel
        </Button>
        <Button  onClick={onsave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;

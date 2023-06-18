import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm({formdetails, setFormDetails}) {


  let handleChange = (e) => {
    let { name, value } = e.target
    setFormDetails({
      ...formdetails,
      [name]: value
    })
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
          onChange={handleChange}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleChange}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           onChange={handleChange}
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           onChange={handleChange}
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="phone"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           onChange={handleChange}
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="Full Address"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           onChange={handleChange}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           onChange={handleChange}
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           onChange={handleChange}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           onChange={handleChange}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
          />
        </Grid>
       
       
      </Grid>
    </React.Fragment>
  );
}
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '@layouts/components/courseregstration/AddressForm';
import PaymentForm from '@layouts/components/courseregstration/PaymentForm';
import Review from '@layouts/components/courseregstration/Review';
import Header from '@layouts/partials/Header';
import Footer from '@layouts/partials/Footer';
import courses from '@lib/utils/courseslist';
import { useRouter } from 'next/router';
import { Divider } from '@mui/material';
import Legaldocs from '@layouts/components/Legaldocs';
import apicaller from 'api';




// TODO remove, this demo shouldn't need to reset the theme.

export default function Checkout() {
  let [course, setCourse] = React.useState(null);
  let route= useRouter();
  React.useEffect(() => {
    let id=window.location.pathname.split('/')[2];
   courses.map((course) => {
        if (course.id == id ) {
            setCourse(course);
        }
   })
  }, [])
  const [activeStep, setActiveStep] = React.useState(0);

  let [formdetails, setFormDetails] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',


  })

const steps = ['Basic Information', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formdetails={formdetails} setFormDetails={setFormDetails} />;
    case 1:
      return <Review course={course} formdetails={formdetails} />;
    default:
      throw new Error('Unknown step');
  }
}
  let handlesubmit = async(e) => {
    e.preventDefault()
    setActiveStep(activeStep + 1);
    /**
     * {
  "courseid": "123456789",
  "coursename": "Introduction to Programming",
  "registredby": {
    "fname": "John",
    "lname": "Doe",
    "email": "johndoe@example.com",
    "phone": 1234567890,
    "address": "123 Main Street",
    "timestamp": "2023-06-18T12:34:56.789Z"
  }
}

     */

    let data = {
      courseid: course.id,
      coursename: course.title,
      registredby: {
        fname: formdetails.firstName,
        lname: formdetails.lastName,
        email: formdetails.email,
        phone: formdetails.phone,
        address: formdetails.address + ' ' + formdetails.city + ' ' + formdetails.state + ' ' + formdetails.zip + ' ' + formdetails.country,
        timestamp: new Date().toISOString()
      }

      
    }

    apicaller.registercourse(data).then((res) => {
      alert(`
      thank you for your registration we will contact you soon
      `)
    })

      .catch((err) => {
        alert(`
        something went wrong please try again later or contact us at 07359619442 or email us at support@skillhob.com 
        `)
      })

   
  }

  const handleNext = () => {
   if (formdetails.firstName && formdetails.lastName && formdetails.email && formdetails.phone && formdetails.address && formdetails.city && formdetails.state && formdetails.zip && formdetails.country) {
      setActiveStep(activeStep + 1);
    }
    else {
      alert('Please fill all the fields')
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
     <>
      <CssBaseline />
      <Header/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h5" variant="h5" align="center">
         {
            course?.title +' Registration Form'
         }
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography style={{
                textAlign: 'center',
                color: 'green',
                fontSize: '20px',
                
                
              }} variant="h5" gutterBottom>
               thank you for your registration 
              </Typography>
              <Typography variant="subtitle1">
               one of our team member will contact you soon and provide you further details about the course and make you an appointment for the interview.

               
               <Divider 
                style={{  
                  marginTop: '20px',
                  marginBottom: '20px',
                  backgroundColor: 'black',
                  height: '2px',
                }}
               />

               <Legaldocs/>

              </Typography>

              <Button 
              >
                <Link href="/">
                  Go to Home
                </Link>
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: 'white',
                    borderRadius: '0px',
                  }}
                  onClick={(e)=>{
                    if(activeStep === steps.length - 1){
                      handlesubmit(e)
                    }else{
                      handleNext()
                    }
                  }}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
       
      </Container>
      
      <Footer/>
      
      </>
  );
}
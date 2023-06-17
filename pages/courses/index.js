import React from 'react';
import { Typography, Grid, Button, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import Header from '@layouts/partials/Header';
import Footer from '@layouts/partials/Footer';
import courses from '@lib/utils/courseslist';
import { useRouter } from 'next/router';

const Courses = () => {
  let route=useRouter();
  const courseStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginBottom: '2rem',
  };

  const cardMediaStyle = {
    height: 200,
  };

  const applyButtonStyle = {
    marginTop: 'auto',
  };

 

  return (
  <>
  <Header/>
  <div style={{
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 1rem',
    

  }} >
      

      <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} key={course.id}>
            <Card style={courseStyle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  style={cardMediaStyle}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {course.description}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Course Duration:</strong> {course.duration}
                  </Typography>
                  {course.learningCenter && (
                    <Typography variant="body1">
                      <strong>Learning Center:</strong> {course.learningCenter}
                    </Typography>
                  )}
                  {course.fee && (
                    <Typography variant="body1">
                      <strong>Course Fee:</strong> {course.fee}
                    </Typography>
                  )}
                  {course.upfrontPayment && (
                    <Typography variant="body1">
                      <strong>Upfront Payment:</strong> {course.upfrontPayment}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
             
             <Button
                variant="outlined"
                onClick={() => route.push(`/courses/${course.id}`)}
             > 
              Check it out
             </Button>
              
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  <Footer/>
  </>
  );
};

export default Courses;

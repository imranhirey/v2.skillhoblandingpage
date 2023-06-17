import React, { useEffect } from 'react';
import { Typography, Button, Card, CardActionArea, CardMedia, CardContent, Divider } from '@mui/material';
import Header from '@layouts/partials/Header';
import Footer from '@layouts/partials/Footer';
import courses from '@lib/utils/courseslist';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';

const SingleCoursePage = () => {
  let [course, setCourse] = React.useState(null);
  let route= useRouter();
  useEffect(() => {
    let id=window.location.pathname.split('/')[2];
   courses.map((course) => {
        if (course.id == id ) {
            setCourse(course);
        }
   })
  }, [])

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
    backgroundColor: '#4caf50',
    color: 'white',
  };

  const syllabusButtonStyle = {
    marginRight: '1rem',
    backgroundColor: '#00bcd4',
    color: 'white',
  };
  if (course == null) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Header />


      <Divider
        style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#e0e0e0',
            margin: '2rem 0',
        }}
      />
      <Typography variant="h4" align="center" gutterBottom>
        Course Details 
        </Typography>


        
          
    

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', marginTop: '2rem' }}>
      <Button 
      onClick={()=>{
        route.push('/courses')
      }}
       startIcon={<ArrowBack/>}  variant="outlined" href="/courses" style={{
                marginBottom: '2rem',
               
      }}>
                Back to Courses
            </Button>
        <Card style={courseStyle}>
          <CardActionArea>
            <CardMedia component="img" image={course.image} alt={course.title} style={cardMediaStyle} />
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
              {course.maximumStudents && (
                <Typography variant="body1">
                  <strong>Maximum Students:</strong> {course.maximumStudents}
                </Typography>
              )}
              {course.openSeats && (
                <Typography variant="body1">
                  <strong>Open Seats:</strong> {course.openSeats}
                </Typography>
              )}
              
            </CardContent>
          </CardActionArea>
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem 0' }}>
            <Button variant="contained" href={course.syllabusLink} style={syllabusButtonStyle}>
              View Syllabus
            </Button>
            <Button variant="contained" href="#" style={applyButtonStyle}>
              Apply Now
            </Button>
          </div>
        </Card>
      
      </div>
      <Footer />
    </>
  );
};

export default SingleCoursePage;

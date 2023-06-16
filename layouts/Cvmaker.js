import cvintities from "@lib/utils/cvintities";
import { markdownify } from "@lib/utils/textConverter";
import { Box, Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import Header from "./partials/Header";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import UserDialog from "./components/InputDialog";
import { set } from "date-fns";

const steps = [
  {
    label: "Personal Information",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Your Experience",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Your Skills",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Your Education",
    description: `Try out different ad text to see what brings in the most customers`,
  },
];

const Cvmaker = ({ data }) => {
  const { frontmatter, content } = data;
  let [started, setsatrted] = useState(false);
  let [currentsetp, setcurrentsetp] = useState(0);
  let [open, setopen] = useState(false);

  let [usersinfo, setusersinfo] = useState({
    PersonalInformation: [],
    Education: [],
    Experience: [],
    Skills: [],
    Languages: [],
    Interests: [],
  });
  let [tempoorarydata, settempoorarydata] = useState({});

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <section className="section">
      <div className="container">
        {!started ? (
          <>
            <div className="flex h-[40vh] items-center justify-center">
              <div className="text-center">
                {markdownify(content, "div", "content")}

                <button
                  onClick={() => setsatrted(true)}
                  className="mt-8 rounded-md bg-blue-500 px-8 py-3 text-white"
                >
                  Let's Start
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            *{" "}
            <Box sx={{ maxWidth: 400 }}>
              <UserDialog
                onchange={(e) => {
                  settempoorarydata({
                    ...tempoorarydata,
                    [e.target.id]: e.target.value,
                  });
                }}
                onsave={() => {
                  if (currentsetp == cvintities.length - 1) {
                    console.log(usersinfo);
                  } else {
                   
                    if (currentsetp == 0) {
                      setusersinfo({
                        ...usersinfo,
                        [cvintities[currentsetp].name]: tempoorarydata,
                      });
                      
                    } else {
                      // push the data to the usersinfo
                      setusersinfo({
                        ...usersinfo,
                        [cvintities[currentsetp].name]: [
                          ...usersinfo[cvintities[currentsetp].name],
                          tempoorarydata,
                        ],
                      });
                    }
                    settempoorarydata({});
                    setopen(false);
                    
                  }
                }}
                onClose={() => {
                  setopen(false);
                }}
                open={open}
                data={cvintities[currentsetp]}
              />

              <Stepper activeStep={activeStep} orientation="vertical">
                {cvintities.map((inity, index) => (
                  <Step key={inity.name}>
                    <StepLabel
                     
                    >
                      {inity.name}
                    </StepLabel>
                    <StepContent>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          {inity.name == "Personal Information" ? (
                            <>
                              <Button
                                onClick={() => {
                                  setopen(true);
                                }}
                              >
                                Add Personal Information
                              </Button>
                              <Button 
                              onClick={()=>{
                                console.log(usersinfo);
                                setcurrentsetp(currentsetp + 1);
                                setActiveStep((prevActiveStep) => prevActiveStep + 1);

                              }}
                              >
                                Next
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                onClick={() => {
                                  setopen(true);
                                }}
                              >
                                Add {inity.name}
                              </Button>
                              <Button 
                              onClick={()=>{
                                console.log(usersinfo);
                                setActiveStep((prevActiveStep) => prevActiveStep + 1);

                              }}
                              >
                                Next
                              </Button>
                            </>
                          )}
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                </Paper>
              )}
            </Box>
            <Button>show me the result</Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Cvmaker;

/**






 */

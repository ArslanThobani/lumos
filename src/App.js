import './globalStyle.css';
import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { RadioButtonUnchecked } from "@mui/icons-material";
import Navbar from './Navbar';

// import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
  },

  rootOutput: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    backgroundColor: "#f2f2f2",
    padding: "10px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#fff',
    padding: "50px",
    borderRadius: "5px",
    boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.16)",
  },
  title: {
    fontWeight: 700,
    fontSize: "2rem",
    color: "#333",
    // marginBottom: '30px',
  },
  field: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginbottom: '80px',
    width: "100%",
  },
  textField: {
    display: "flex",
    flexDirection: "column",
    // marginBottom: '100px',
    padding: "20px",
    width: "100%",
    size: "small",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
    marginTop: "20px",
    width: "50%",
  },
}));

function RegistrationForm() {
  const classes = useStyles();
  const [expandedKeys, setExpandedKeys] = useState(null);
  const [formData, setFormData] = useState({});
  // const [currentField, setCurrentField] = useState("companyName");
  const [currentField, setCurrentField] = useState(0);
  const listRef = useRef(null);

  const map1 = new Map();

  map1.set(
    "Automated Defect Detection",
    "You can use AI-powered computer vision systems to automatically detect defects in your products during the manufacturing process. The system can analyze images of the products and identify any abnormalities or defects such as cracks, discoloration, or other visual imperfections. This can help you catch defects early in the process and reduce waste."
  );
  map1.set(
    "Predictive Maintenance",
    "You can also use AI to monitor your machines and equipment to detect potential issues before they become serious. By analyzing data from sensors and other sources, AI can identify patterns and anomalies that indicate potential equipment failures. This can help you schedule maintenance proactively, avoid downtime, and minimize the risk of product defects caused by faulty equipment."
  );
  map1.set(
    "Statistical Process Control",
    "You can use statistical process control (SPC) techniques to monitor the quality of your products and identify any trends or patterns that may indicate a problem. AI-powered SPC systems can analyze large amounts of data in real-time to detect variations and deviations from normal patterns. This can help you catch quality issues early and take corrective action before they become a major problem."
  );
  map1.set(
    "Root Cause Analysis",
    "When quality issues do occur, you can use AI-powered root cause analysis tools to identify the underlying causes of the problem. By analyzing data from multiple sources, including production data, customer feedback, and other sources, AI can help you identify the root cause of the issue and take corrective action to prevent it from happening again."
  );
  map1.set(
    "Automated Testing",
    "You can also use AI to automate testing of your products. This can help you test products more quickly and efficiently, while reducing the risk of human error. AI-powered testing systems can perform a variety of tests, such as strength tests or impact tests, to ensure that your products meet quality standards."
  );

  const map2 = new Map();

  map2.set("Automated Food Ordering", [
    "The cost of implementing an automated food ordering system would depend on the complexity of the system, as well as the cost of any hardware or software required. There is also a risk that customers may not be comfortable with using an automated system, resulting in a decrease in customer satisfaction.",
    "Implementing an automated food ordering system could create business value by reducing order processing time and increasing efficiency, leading to increased customer satisfaction and improved profitability.",
    "Data sources for this use case could include customer order history, restaurant menus, delivery locations etc. Specific examples could include online databases such as Yelp or Zomato for restaurant menus and delivery locations, or internal databases containing customer order history.",
  ]);
  map2.set("Predictive Ordering", [
    "The cost of implementing a predictive ordering system would depend on the complexity of the algorithm used to make predictions, as well as any hardware or software required to run it. There is also a risk that customers may not be comfortable with having their orders predicted by AI algorithms which could lead to decreased user engagement with the app.",
    "Implementing predictive ordering can create business value by allowing restaurants to anticipate demand more accurately which can lead to improved efficiency in operations and increased profitability due to reduced wastage from over-ordering ingredients etc..",
    "Data sources for this use case could include customer order history, restaurant menus etc., along with external data sources such as weather forecasts which can help predict demand based on seasonality trends etc.. Specific examples could include online databases such as Yelp or Zomato for restaurant menus and delivery locations, or internal databases containing customer order history combined with external data sources such as weather forecasts from services like Dark Sky API etc..",
  ]);
  map2.set("Route Optimization", [
    "The cost of implementing route optimization would depend on the complexity of the algorithm used for route optimization along with any hardware/software required to run it efficiently. There is also a risk that customers may experience delays if routes are not optimized correctly due to incorrect assumptions about traffic conditions etc., resulting in decreased user satisfaction levels.",
    "Implementing route optimization can create business value by reducing travel times , improving fleet utilization , increasing efficiency , leading ultimately leading towards increased profitability.",
    "Data sources for this use case would include real-time traffic information , road accessibility information , location coordinates (latitude & longitude)etc . Specific examples could include Google Maps API & Open Street Map API’s providing real-time traffic information & road accessibility information respectively along with GPS coordinates from devices like smartphones/tablets carried by delivery boys.",
  ]);
  map2.set("Personalized Recommendations", [
    "The costs associated with personalized recommendations will depend upon how complex algorithms are used & what kind of hardware/software is needed . Additionally there is always a risk that customers might find these recommendations intrusive / annoying thus leading towards decreased user engagement levels.",
    "Personalized recommendations have potential benefits like increased user engagement levels through better targeting thus resulting into higher sales volumes & improved profits margins over time.",
    "For personalized recommendation systems data sources will typically consist off past purchase histories combined together with other demographic / psychographic attributes related too users preferences / interests (e g age group , gender )etc .. Examples might involve using internal datasets related too past purchase histories combined together alongside external datasets related too demographics / psychographics sourced from services like Facebook Ads Manager APIs",
  ]);
  // const listItems = Array.from(listRef.current.querySelectorAll("li"));
  // const maxWidth = Math.max(...listItems.map((li) => li.clientWidth));
  // listRef.current.style.minWidth = `${maxWidth}px`

  // console.log(map1)
  const handleNextField = () => {
    // setCurrentField(currentField + 1)
    console.log(currentField);
    switch (currentField) {
      case "companyName":
        console.log(currentField);
        setCurrentField(() => "implAIBefore");
        console.log(currentField);
        break;

      case "industry":
        setCurrentField("product");
        break;

      case "product":
        setCurrentField("businessModel");
        break;

      case "businessModel":
        setCurrentField("productLine");
        break;

      case "productLine":
        setCurrentField("audience");
        break;

      case "audience":
        setCurrentField("differentiateFactor");
        break;

      case "differentiateFactor":
        setCurrentField("goal");
        break;

      case "goal":
        setCurrentField("challenges");
        break;

      case "challenges":
        setCurrentField("implAIBefore");
        break;

      default:
        break;
    }
    // setCurrentField(currentField + 1);
  };

  function handleInputChange(event) {
    console.log(formData);
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // submit form data to backend
    console.log("In submit..");
    // const response = await fetch("http://138.246.3.237:8000/get_use_cases_chat_gpt", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // const data = await response.json();
    // console.log(data);
    setCurrentField("output");
  };

  function getSolutionComponents(map1) {
    console.log("In Solution Component");

    const handleKeyClick = (key) => {
      setExpandedKeys(key === expandedKeys ? null : key);
    };

    return (
      <List ref={listRef}>
        {Array.from(map1.keys()).map((key) => (
          <React.Fragment key={key}>
            <ListItem padding="20px">
              <ListItemButton onClick={() => handleKeyClick(key)}>
                <Typography variant="h6" component="span">
                  {key}
                </Typography>
              </ListItemButton>
            </ListItem>
            <Collapse
              in={key === expandedKeys}
              timeout="auto"
              unmountOnExit
              sx={{ position: "relative" }}
            >
              <ListItem padding="20px">
                <Typography paragraph={true} variant="body1" component="div">
                  {map1.get(key)}
                </Typography>
              </ListItem>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    );
    // return comps
  }

  // useEffect(() => {
  //   // Set the minimum width of the list to the width of the widest list item
  //   const listItems = Array.from(listRef.current.querySelectorAll("li"));
  //   const maxWidth = Math.max(...listItems.map((li) => li.clientWidth));
  //   listRef.current.style.minWidth = `${maxWidth}px`;
  // }, [map1]);

  const handleNextUsecase = () => {
    if (currentField < 3) {
      setCurrentField(currentField + 1);
    } else {
      setCurrentField("companyName");
    }
  };

  return (
    <div>
    <Navbar />
    <div className={classes.root}>
      {Number.isInteger(currentField) && (
        
          <Box m={5} >
          <Box style={{ position: 'fixed', top: 100 }}>
        <Typography variant="h5">{Array.from(map1.keys())[currentField]}</Typography>
      </Box>
      <Box mt={20} mr={1} ml={1} style={{ overflow: 'auto', maxHeight: 'calc(100vh - 16rem)' }}>
            <Typography
              variant="body2"
              component="p"
              style={{ marginTop: "1rem" }}
            >
              {map1.get(Array.from(map1.keys())[currentField])}
            </Typography>

            <Typography variant="h6" component="h6">
              Potential Costs and Risks
            </Typography>

            <Typography variant="body2" component="h2">
              {map2.get(Array.from(map2.keys())[currentField])[0]}
            </Typography>

            <Typography variant="h6" component="h6">
              Evaluation
            </Typography>

            <Typography variant="body2" component="h2">
              {map2.get(Array.from(map2.keys())[currentField])[1]}
            </Typography>

            <Typography variant="h6" component="h6">
              Data Sources
            </Typography>

            <Typography variant="body2" component="h2">
              {map2.get(Array.from(map2.keys())[currentField])[2]}
            </Typography>

            
            </Box>
            <Button
              variant="contained"
              color="primary"
              margin="normal"
              aligh="right"
              onClick={handleNextUsecase}
              style={{ marginTop: "1rem", marginLeft:"15rem" }}
            >
              Next Usecase
            </Button>
          </Box>
   
      )}
      {!Number.isInteger(currentField) && (
        <Box>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1 className={classes.title}>Start</h1>
          {currentField === "companyName" && (
            <div className={classes.field}>
              <TextField
                id="companyName"
                label="What is the name of your company?"
                name="companyName"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "industry" && (
            <div className={classes.field}>
              <TextField
                id="industry"
                label="What industry/sector does it belong to?"
                name="industry"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "product" && (
            <div className={classes.field}>
              <TextField
                id="product"
                label="What products/services do you offer?"
                name="product"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "businessModel" && (
            <div className={classes.field}>
              <TextField
                id="businessModel"
                label="What is your business model?"
                name="businessModel"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "productLine" && (
            <div className={classes.field}>
              <TextField
                id="productLine"
                label="Product Line"
                name="productLine"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "audience" && (
            <div className={classes.field}>
              <TextField
                id="audience"
                label="Who are your customers/clients?"
                name="audience"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "differentiateFactor" && (
            <div className={classes.field}>
              <TextField
                id="differentiateFactor"
                label="What differentiates your business from your competitors' business?"
                name="differentiateFactor"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "goal" && (
            <div className={classes.field}>
              <TextField
                id="goal"
                label="What is your company's mission or goal?"
                name="goal"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "challenges" && (
            <div className={classes.field}>
              <TextField
                id="challenges"
                label="What are the specific pain points or challenges your business is facing?"
                name="challenges"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "goalAI" && (
            <div className={classes.field}>
              <TextField
                id="goalAI"
                label="What outcome do you hope to achieve through AI adoption?"
                name="goalAI"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "limitInfra" && (
            <div className={classes.field}>
              <TextField
                id="limitInfra"
                label="Do you have any limitations with respect to talent/expertise in AI, IT or other infrastructure?"
                name="limitInfra"
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleNextField}
              >
                Next
              </Button>
            </div>
          )}

          {currentField === "implAIBefore" && (
            <div className={classes.field}>
              <FormLabel id="demo-radio-buttons-group-label">
                Have you implemented AI solutions before in your business?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                margin="normal"
              >
                Submit
              </Button>
            </div>
          )}
        </form>
        </Box>
      )}
    </div>
    </div>
  );
}

export default RegistrationForm;

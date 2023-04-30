import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import {
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
  const [currentField, setCurrentField] = useState("companyName");
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
    setCurrentField(99);
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

  return (
    <div className={classes.root}>
      {currentField === 99 && (
        <div className={classes.field}>
          {console.log("Under display output part")}
          {getSolutionComponents(map1)}
        </div>
      )}
      {currentField !== 99 && (
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
              
                <FormLabel id="demo-radio-buttons-group-label">Have you implemented AI solutions before in your business?</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value={true} control={<Radio />} label="Yes" />
                  <FormControlLabel value={false} control={<Radio />} label="No" />
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
      )}
    </div>
  );
}

export default RegistrationForm;

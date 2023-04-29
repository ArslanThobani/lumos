import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Collapse, List, ListItem, ListItemButton, Typography } from "@mui/material";

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
  const [formData, setFormData] = useState(null);
  const [currentField, setCurrentField] = useState(99);
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [scale, setScale] = useState("");

  const map1 = new Map();

  map1.set('Automated Defect Detection', 'You can use AI-powered computer vision systems to automatically detect defects in your products during the manufacturing process. The system can analyze images of the products and identify any abnormalities or defects such as cracks, discoloration, or other visual imperfections. This can help you catch defects early in the process and reduce waste.');
  map1.set('Predictive Maintenance', 'You can also use AI to monitor your machines and equipment to detect potential issues before they become serious. By analyzing data from sensors and other sources, AI can identify patterns and anomalies that indicate potential equipment failures. This can help you schedule maintenance proactively, avoid downtime, and minimize the risk of product defects caused by faulty equipment.');
  map1.set('Statistical Process Control', 'You can use statistical process control (SPC) techniques to monitor the quality of your products and identify any trends or patterns that may indicate a problem. AI-powered SPC systems can analyze large amounts of data in real-time to detect variations and deviations from normal patterns. This can help you catch quality issues early and take corrective action before they become a major problem.');
  map1.set('Root Cause Analysis', 'When quality issues do occur, you can use AI-powered root cause analysis tools to identify the underlying causes of the problem. By analyzing data from multiple sources, including production data, customer feedback, and other sources, AI can help you identify the root cause of the issue and take corrective action to prevent it from happening again.');
  map1.set('Automated Testing', 'You can also use AI to automate testing of your products. This can help you test products more quickly and efficiently, while reducing the risk of human error. AI-powered testing systems can perform a variety of tests, such as strength tests or impact tests, to ensure that your products meet quality standards.');
  
  // console.log(map1)
  const handleNextField = () => {
    setCurrentField(currentField + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit form data to backend
    console.log("In submit..")
    setCurrentField(1);
  };

  const listRef = useRef(null);

  useEffect(() => {
    // Set the minimum width of the list to the width of the widest list item
    const listItems = Array.from(listRef.current.querySelectorAll("li"));
    const maxWidth = Math.max(...listItems.map((li) => li.clientWidth));
    listRef.current.style.minWidth = `${maxWidth}px`;
  }, [map1]);

  function getSolutionComponents(map1) {
    console.log("In Solution Component")
    // const comps = [];
    // map.forEach((value, key) => comps.push(
    //   <div>
    //     <h3>{key}</h3>
    //     <p>{value}</p>
    //   </div>
    // ))
  
    // const [expandedKeys, setExpandedKeys] = useState([]);
  
    const handleKeyClick = (key) => {
      setExpandedKeys(key === expandedKeys ? null : key);
    };
  
    return (
      // <List dense="True">
      //   {Array.from(map1.keys()).map((key) => (
      //     <ListItem key={key} disablePadding divider="true">
      //       <ListItemButton alignItems='flex-start' onClick={() => handleKeyClick(key)}>
      //         <Typography variant="h6" component="span">
      //           {key}
      //         </Typography>
      //       </ListItemButton>
      //       <Collapse in={expandedKeys.includes(key)} timeout="auto" unmountOnExit>
      //         <Typography variant="body1" component="div">
      //           {map1.get(key)}
      //         </Typography>
      //       </Collapse>
      //     </ListItem>
      //   ))}
      // </List>
      <List ref={listRef}>
      {Array.from(map1.keys()).map((key) => (
        <React.Fragment key={key}>
          <ListItem>
            <ListItemButton onClick={() => handleKeyClick(key)}>
              <Typography variant="h6" component="span">
                {key}
              </Typography>
            </ListItemButton>
          </ListItem>
          <Collapse in={key === expandedKeys} timeout="auto" unmountOnExit sx={{ position: "relative" }}>
            <ListItem>
              <Typography variant="body1" component="div">
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

  return (
    <div className={classes.root}>
      {currentField === 99 && (
        <div className={classes.field}>
          {console.log("Under display output part")}
          {getSolutionComponents(map1)}
        </div>
      )}
      {currentField < 99 && (
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.title}>Start</h1>
        {currentField === 1 && (
          <div className={classes.field}>
            <TextField
              id="name"
              label="Company Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
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

        {currentField === 2 && (
          <div className={classes.field}>
            <TextField
              id="industry"
              label="Industry"
              type="industry"
              value={industry}
              onChange={(event) => setIndustry(event.target.value)}
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
        {currentField === 3 && (
          <div className={classes.field}>
            <TextField
              id="scale"
              label="Scale"
              type="scale"
              value={scale}
              onChange={(event) => setScale(event.target.value)}
              variant="outlined"
              size="small"
              margin="normal"
            />
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

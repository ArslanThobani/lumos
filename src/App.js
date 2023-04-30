import "./globalStyle.css";
import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import {
  Box,
  CircularProgress,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { RadioButtonUnchecked } from "@mui/icons-material";
import Navbar from "./Navbar";
import Spinner from "./Spinner";

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
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.16)",
    width: "375px",
    height: "400px",
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
    padding: "5px",
    width: "100%",
    size: "normal",
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
  const [loading, setLoading] = useState(false);
  // const [currentField, setCurrentField] = useState(0);
  const listRef = useRef(null);

  const map1 = new Map();
  const map2 = new Map();

  // const listItems = Array.from(listRef.current.querySelectorAll("li"));
  // const maxWidth = Math.max(...listItems.map((li) => li.clientWidth));
  // listRef.current.style.minWidth = `${maxWidth}px`

  // console.log(map1)
  const handleNextField = () => {
    // setCurrentField(currentField + 1)
    console.log(currentField);
    switch (currentField) {
      case "companyName":
        // console.log(currentField);
        setCurrentField(() => "industry");
        // console.log(currentField);
        break;

      case "industry":
        setCurrentField("product");
        break;

      case "product":
        setCurrentField("businessModel");
        break;

      case "businessModel":
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

    const response = await fetch(
      "http://localhost:8000/get_use_cases_chat_gpt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    console.log(data);
    setCurrentField(0);
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

  // useEffect(() => {


  // }, [loading])

  return (
    <>
    <div style={{ backgroundColor: "#a2d2ffd" }}>
      <Navbar />
      <div className={classes.root}>
        {Number.isInteger(currentField) && (
          <Box m={5}>
            <Box style={{ position: "fixed", top: 100 }}>
              <Typography variant="h5">
                {Array.from(map1.keys())[currentField]}
              </Typography>
            </Box>
            <Box
              mt={20}
              mr={1}
              ml={1}
              style={{ overflow: "auto", maxHeight: "calc(100vh - 16rem)" }}
            >
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
              style={{ marginTop: "1rem", marginLeft: "15rem" }}
            >
              Next Usecase
            </Button>
          </Box>
        )}
        {!Number.isInteger(currentField) && (
          <Box>
            <form className={classes.form} onSubmit={handleSubmit}>
              {currentField === "companyName" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    What is the name of your company?
                  </Typography>
                  <TextField
                    id="companyName"
                    name="companyName"
                    onChange={handleInputChange}
                    variant="standard"
                    size="small"
                    // margin="normal"
                    alignItems="center"
                    required="true"
                    margin="normal"
                  /><br/>
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="100px"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "industry" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    What industry/sector does it belong to?
                  </Typography>
                  <br />
                  <Select
                    style={{ width: "200px" }}
                    name="industry"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Select an option</MenuItem>
                    <MenuItem value="Agriculture">Agriculture</MenuItem>
                    <MenuItem value="Food Delivery">Food Delivery</MenuItem>
                    <MenuItem value="Construction">Construction</MenuItem>
                  </Select>
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="100px"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "product" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    What products/services do you offer?
                  </Typography>
                  <br></br>
                  <TextField
                    id="product"
                    name="product"
                    onChange={handleInputChange}
                    variant="standard"
                    size="small"
                    // margin="normal"
                    alignItems="center"
                    required="true"
                    margin="normal"
                    multiline
                  />{" "}
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="3rem"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "businessModel" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    What is your business model?
                  </Typography><br></br>
                  <TextField
                    id="businessModel"
                    name="businessModel"
                    onChange={handleInputChange}
                    variant="standard"
                    size="small"
                    // margin="normal"
                    alignItems="center"
                    required="true"
                    margin="normal"
                    multiline
                  /><br /><br />
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="100px"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "audience" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    Who are your customers/clients?
                  </Typography><br></br>
                  <TextField
                    id="audience"
                    name="audience"
                    onChange={handleInputChange}
                    variant="standard"
                    size="small"
                    // margin="normal"
                    alignItems="center"
                    required="true"
                    margin="normal"
                    multiline
                  /><br></br><br></br>
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="100px"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "differentiateFactor" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    What differentiates your business from your competitors'
                    business?
                  </Typography><br></br>
                  <TextField
                    id="differentiateFactor"
                    name="differentiateFactor"
                    onChange={handleInputChange}
                    variant="standard"
                    size="small"
                    // margin="normal"
                    alignItems="center"
                    required="true"
                    margin="normal"
                    multiline
                  /><br /><br/>
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="100px"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "goal" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    What is your company's mission or goal?
                  </Typography><br></br>
                  <TextField
                    id="goal"
                    name="goal"
                    onChange={handleInputChange}
                    variant="standard"
                    size="small"
                    // margin="normal"
                    alignItems="center"
                    required="true"
                    margin="normal"
                    multiline
                  /><br /><br />
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="100px"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "challenges" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    What are the specific pain points or challenges your
                    business is facing?
                  </Typography><br></br>
                  <TextField
                    id="challenges"
                    name="challenges"
                    onChange={handleInputChange}
                    variant="standard"
                    size="small"
                    // margin="normal"
                    alignItems="center"
                    required="true"
                    margin="normal"
                    multiline
                  /><br /><br />
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="100px"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "goalAI" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    What outcome do you hope to achieve through AI adoption?
                  </Typography>
                  <TextField
                    id="goalAI"
                    name="goalAI"
                    onChange={handleInputChange}
                    variant="standard"
                    size="small"
                    // margin="normal"
                    alignItems="center"
                    required="true"
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="100px"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "limitInfra" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    Do you have any limitations with respect to talent/expertise
                    in AI, IT or other infrastructure?
                  </Typography><br></br>
                  <TextField
                    id="limitInfra"
                    name="limitInfra"
                    onChange={handleInputChange}
                    variant="standard"
                    size="small"
                    // margin="normal"
                    alignItems="center"
                    required="true"
                    margin="normal"
                    multiline
                  /><br /><br />
                  <Button
                    variant="contained"
                    color="primary"
                    margin="normal"
                    onClick={handleNextField}
                    marginTop="100px"
                  >
                    Next
                  </Button>
                </Box>
              )}

              {currentField === "implAIBefore" && (
                <Box m={2} ml={2} className={classes.field}>
                  <Typography variant="h5" position={"relative"} align="center">
                    Have you implemented AI solutions before in your business?
                  </Typography> <br></br>
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
                  <br></br>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    margin="normal"
                  >
                    Submit
                  </Button>
                </Box>
              )}
            </form>
          </Box>
        )}
      </div>
    </div>
    </>
  );
}

export default RegistrationForm;

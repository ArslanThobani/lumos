import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

// import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
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
  const [formData, setFormData] = useState(null);
  const [currentField, setCurrentField] = useState(1);
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [scale, setScale] = useState("");

  const map1 = new Map();

  map1.set('', '');
  map1.set('', '');
  map1.set('', '');
  map1.set('', '');
  
  const handleNextField = () => {
    setCurrentField(currentField + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit form data to backend
    setCurrentField(1);
  };

  return (
    <div className={classes.root}>
      {currentField === 99 && (
        <div className={classes.field}>
          
        </div>
      )}

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
    </div>
  );
}

export default RegistrationForm;

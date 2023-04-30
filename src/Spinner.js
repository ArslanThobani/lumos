import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";

function Spinner() {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    // simulate a long running task
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        {isLoading ? <CircularProgress size={24} /> : "Load Data"}
      </Button>
    </div>
  );
}

export default Spinner;
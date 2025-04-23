import { Button, Box, Typography } from "@mui/material";
import { useState } from "react";

function File() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* <Typography variant="body1" sx={{ mb: 1 }}>
        Upload Certificate
      </Typography> */}

      <Button
        component="label"
        sx={{ color: "black", border: "1px solid black" }}
      >
        Upload Certificate
        <input type="file" hidden onChange={handleFileChange} />
      </Button>

      {file && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          Selected: {file.name}
        </Typography>
      )}
    </Box>
  );
}

export default File;

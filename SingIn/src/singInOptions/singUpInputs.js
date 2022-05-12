import React from "react";
import { Card,CardContent, TextField,} from "@mui/material";

const singUpInputs = ({ handleOnChange, children }) => {
  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: "15px" }}>
      <CardContent>
        <TextField
          required
          label="Enter first name"
          name="firstName"
          style={{ marginBottom: "15px", paddingRight: "10px" }}
          onChange={(event) => handleOnChange(event)}
        />
        <TextField
          required
          label="Enter last name"
          name="lastName"
          style={{ marginBottom: "10px", paddingRight: "10px" }}
          onChange={(event) => handleOnChange(event)}
        />
        <TextField
          required
          label="Enter email"
          name="email"
          style={{ marginBottom: "10px", paddingRight: "10px" }}
          onChange={(event) => handleOnChange(event)}
        />
        <TextField
          required
          label="Enter password"
          type="password"
          name="password"
          autoComplete="current-password"
          style={{ marginBottom: "10px", paddingRight: "10px" }}
          onChange={(event) => handleOnChange(event)}
        />
        {children}
      </CardContent>
    </Card>
  );
};

export default singUpInputs;

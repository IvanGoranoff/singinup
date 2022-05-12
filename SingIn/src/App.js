import React, { useState } from "react";
import SingInInputs from "./singInOptions/singInInputs";
import SingUpInputs from "./singInOptions/singUpInputs";
import {CardActions, Button} from "@mui/material";

const App = () => {
  const [isSingIn, setIsSingIn] = useState(true);
  const [userInfo, setUserInfo] = useState();

  const handleSingIn = (singInBool) => {
    setIsSingIn(singInBool);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submited info  ${userInfo?.firstName} ${userInfo?.lastName} ${userInfo?.email} ${userInfo?.name} ${userInfo?.password}`,
    );
  };
  const returnInputs = () => {
    if (isSingIn) {
      return (
        <SingInInputs
          handleSingIn={handleSingIn}
          handleOnChange={handleOnChange}
        >
          <Button type="submit" variant="outlined">
            Sing in
          </Button>
          <CardActions>
            <div>
              <p>Don't have an account?</p>
              <Button onClick={() => handleSingIn(false)} variant="outlined">
                Sing up
              </Button>
            </div>
          </CardActions>
        </SingInInputs>
      );
    }
    if (!isSingIn) {
      return (
        <SingUpInputs handleOnChange={handleOnChange}>
          <Button type="submit" variant="outlined">
            Sing up
          </Button>
          <CardActions>
            <div>
              <p>Already have an account?</p>
              <Button onClick={() => handleSingIn(true)} variant="outlined">
                Sing in
              </Button>
            </div>
          </CardActions>
        </SingUpInputs>
      );
    }
  };
  const handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <form onSubmit={handleOnSubmit}>{returnInputs()}</form>
      </div>
    </>
  );
};

export default App;

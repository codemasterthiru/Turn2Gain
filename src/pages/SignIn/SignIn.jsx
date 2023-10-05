import React from "react";
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material';
import "./style.scss";
import { Header } from "../Header";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright Â© "}
      <Link color="inherit" href="turn2gain.com">
        Turn2Gain
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const onSubmit = event => {
  event.preventDefault();
  const target = event.target;
  const email = target.getElementsByTagName("input")[0].value;
  const password = target.getElementsByTagName("input")[1].value;
  const login = { email, password };
  if (email === "thiru" && password === "turntogain") {
    localStorage.setItem("login", JSON.stringify(login));
    window.location.href = "/home";
  }
};

export function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={"paper"}>
        <Header />
        <form className={"form"} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            className="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className="password"
          />
          <FormControlLabel
            className="remember-me"
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={"submit"}
          >
            Sign In
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

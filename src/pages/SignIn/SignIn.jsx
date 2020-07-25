import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
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
    window.location.href = "#/home";
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

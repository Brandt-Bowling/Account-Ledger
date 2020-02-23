import React, { useState } from "react";
import logo from "./logo.svg";
import {
  makeStyles,
  createStyles,
  Theme,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        minHeight: "100vh"
      },
      [theme.breakpoints.up("md")]: {
        minWidth: "200px",
        maxWidth: "400px",
        minHeight: "100vh"
      }
    },
    paper: {
      padding: 24
    },
    form: {
      width: "100%"
    }
  })
);

type CategoryEntry = {
  [key: string]: { amount: string };
};

const App: React.FC = () => {
  const classes = useStyles();
  const inputs = [
    "Credit Cards",
    "Charity",
    "Savings",
    "Sinking Funds",
    "End of Month Balance"
  ];
  let initialState: CategoryEntry = {};

  // The following will output the shape {Credit Cards: {amount: 0}} ect..
  inputs.forEach(input => {
    initialState[input] = { amount: "" };
  });

  const [entries, setEntry] = useState(initialState);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleChange = (value: string, name: string) => {
    setEntry(prevEntries => {
      return { ...prevEntries, [name]: { amount: value } };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const total = Object.keys(entries).reduce((previousValue, currentValue) => {
      return parseInt(entries[currentValue].amount) + previousValue;
    }, 0);
    setTotalAmount(total);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container justify="center">
        <Grid
          container
          alignItems="center"
          className={classes.container}
          justify="center"
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container justify="center" text-align="center" spacing={2}>
                <form onSubmit={handleSubmit} className={classes.form}>
                  <Grid item xs={12}>
                    <Typography variant="h5">Account Buffer</Typography>
                  </Grid>
                  {Object.keys(entries).map(entry => {
                    return (
                      <Label
                        key={entry}
                        name={entry}
                        value={entries[entry].amount}
                        handleChange={handleChange}
                      />
                    );
                  })}
                  <Grid container text-align="left" align-items="flex-end">
                    <ResultLabel name="Buffer Amount" amount={totalAmount} />
                    <Grid item xs={12}>
                      <Button type="submit" fullWidth variant="contained">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

const Label = (props: {
  name: string;
  value: string;
  handleChange: (value: string, name: string) => void;
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
        type="number"
        fullWidth
        text-align="right"
        label={props.name}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.handleChange(e.target.value, props.name)
        }
        margin="normal"
        variant="standard"
      />
    </Grid>
  );
};

const ResultLabel = (props: { name: string; amount: number }) => {
  return (
    <Grid item xs={8}>
      <Typography component="p">
        {props.name}: ${props.amount}
      </Typography>
    </Grid>
  );
};

export default App;

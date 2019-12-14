import React, { useState } from "react";
import logo from "./logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  container: {
    padding: 24,
    maxWidth: "50vw"
  },
  paper: {
    //   marginTop: "30%",
    //   width: 400,
    //   height: 400
    padding: 24
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  const inputs = [
    "Credit Cards",
    "Charity",
    "Savings",
    "Sinking Funds",
    "End of Month Balance",
    "Buffer",
    "Buffer after Rent"
  ];
  const initialState = inputs.map(input => {
    return { name: input, amount: 0 };
  });

  const [entries, setEntry] = useState(initialState);

  const handleChange = (value: string, name: string) => {
    console.warn(`value: `, value);
    console.warn(`name: `, name);
    setEntry(prevEntries => {
      return { ...prevEntries, [name]: value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // const value;
    console.warn(event.target);
    console.warn(event.currentTarget);
    event.preventDefault();
  };

  return (
    <Grid container justify="center">
      <Grid container className={classes.container} justify="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container justify="center" spacing={2}>
              <form onSubmit={handleSubmit}>
                <Grid item xs={12}>
                  <Typography variant="h5">Account Buffer</Typography>
                </Grid>
                {inputs.map((name, index) => (
                  <Label
                    key={name}
                    name={name}
                    amount={entries[index].amount}
                    handleChange={handleChange}
                  ></Label>
                ))}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Label = (props: {
  name: string;
  amount: number;
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
        value={props.amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.handleChange(e.target.value, props.name)
        }
        margin="normal"
        variant="standard"
      />
    </Grid>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ResultLabel } from './ResultLabel';
import { Label } from './Label';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        minHeight: '100vh',
      },
      [theme.breakpoints.up('md')]: {
        minWidth: '200px',
        maxWidth: '1000px',
        minHeight: '100vh',
      },
    },
    paper: {
      padding: 24,
      width: '75%',
    },
    form: {
      width: '100%',
    },
  }),
);

type CategoryEntry = {
  [key: string]: { amount: string };
};

const App: React.FC = () => {
  const classes = useStyles();
  const inputs = [
    'Credit Cards',
    'Charity',
    'Savings',
    'Sinking Funds',
    'End of Month Balance',
  ];
  let initialState: CategoryEntry = {};

  // The following will output the shape {Credit Cards: {amount: 0}} ect..
  inputs.forEach((input) => {
    initialState[input] = { amount: '0' };
  });

  const [entries, setEntry] = useState(initialState);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const total = inputs.reduce((prev, curr) => {
      return parseInt(entries[curr].amount) + prev;
    }, 0);
    setTotalAmount(total);
  }, [entries, inputs]);

  const handleChange = (value: string, name: string) => {
    console.warn(`name ${name} value ${value}`);
    setEntry((prevEntries) => {
      return { ...prevEntries, [name]: { amount: value } };
    });
  };

  const handleDelete = (name: string) => {
    return inputs.filter((category) => category !== name);
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
          <Paper className={classes.paper}>
            <Typography variant="h5">Account Buffer</Typography>
            {inputs.map((category) => {
              return (
                <Label
                  key={category}
                  name={category}
                  value={entries[category].amount}
                  handleChange={handleChange}
                />
              );
            })}
            <ResultLabel name="Total" amount={totalAmount} />
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;

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
  name: string;
  amount: string;
};

const App: React.FC = () => {
  const classes = useStyles();
  const inputs = [
    'End of Month Balance',
    'Freedom Unlimited (Brandt)',
    'Freedom Unlimited (Hannah)',
    'Freedom',
    'Amazon',
    'Charity | Tithes',
    'Fun Money (Brandt)',
    'Fun Money (Hannah)',
    'Gifts',
    'Doctor Appts',
    'Misc',
  ];

  const initialState: CategoryEntry[] = inputs.map((input) => {
    return {
      name: input,
      amount: '0',
    };
  });

  const [entries, setEntries] = useState(initialState);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const total = entries.reduce((prev, curr) => {
      return parseInt(curr.amount) + prev;
    }, 0);
    setTotalAmount(total);
  }, [entries, inputs]);

  const handleChange = (value: string, name: string) => {
    const updated = entries.map((entry) => {
      if (entry.name !== name) {
        return entry;
      }

      return { ...entry, amount: value };
    });
    const newState = [...updated];
    setEntries(newState);
  };

  const handleDelete = (name: string) => {
    const remainingEntries = entries.filter((entry) => entry.name !== name);
    setEntries(remainingEntries);
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
            {entries.map((entry) => {
              return (
                <Label
                  key={entry.name}
                  name={entry.name}
                  value={entry.amount}
                  handleChange={handleChange}
                  handleDelete={handleDelete}
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

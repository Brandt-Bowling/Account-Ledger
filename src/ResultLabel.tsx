import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

export const ResultLabel = (props: { name: string; amount: number }) => {
  return (
    <Grid item xs={10}>
      <Typography variant="subtitle1">{props.name}</Typography>
      <NumberFormat
        value={props.amount}
        prefix="$"
        thousandSeparator=","
        decimalScale={2}
        decimalSeparator="."
        fixedDecimalScale={true}
        displayType="text"
      />
    </Grid>
  );
};

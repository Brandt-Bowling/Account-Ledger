import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";

export const ResultLabel = (props: { name: string; amount: number }) => {
  return (
    <Grid item xs={8}>
      <Typography component="p">
        {props.name}: ${props.amount}
      </Typography>
    </Grid>
  );
};

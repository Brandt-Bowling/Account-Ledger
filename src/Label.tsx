import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

export const Label = (props: {
  name: string;
  value: string;
  handleChange: (value: string, name: string) => void;
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
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

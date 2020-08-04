import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CustomNumber from './CustomNumber';

export const Label = (props: {
  name: string;
  value: string;
  handleChange: (value: string, name: string) => void;
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        InputProps={{
          inputComponent: CustomNumber as any,
        }}
        fullWidth
        type="text"
        label={props.name}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.handleChange(e.target.value, props.name)
        }
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.select()}
        margin="normal"
        variant="outlined"
      />
    </Grid>
  );
};

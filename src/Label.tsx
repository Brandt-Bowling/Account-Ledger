import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CustomNumber from './CustomNumber';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export const Label = (props: {
  name: string;
  value: string;
  handleChange: (value: string, name: string) => void;
  handleDelete: (name: string) => void;
}) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={11}>
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
      <Grid item xs={1}>
        <IconButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            props.handleDelete(props.name)
          }
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CustomNumber from './CustomNumber';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextFieldProps } from 'material-ui';

interface LabelProps extends TextFieldProps {
  name: string;
  value: string;
  hasDelete?: boolean;
  handleChange: (value: string, name: string) => void;
  handleDelete?: (name: string) => void;
}

export const Label = (props: LabelProps) => {
  const { name, value, hasDelete = true, handleChange, handleDelete, ...rest } = props;
  return (
    <React.Fragment>
      <Grid item xs={11}>
        <TextField
          InputProps={{
            inputComponent: CustomNumber as any,
          }}
          {...rest}
          type="text"
          fullWidth
          label={name}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value, props.name)
          }
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.select()}
          margin="normal"
          variant="outlined"
        />
      </Grid>
      {hasDelete === true && (
        <Grid item xs={1}>
          <IconButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (handleDelete) {
                handleDelete(name)
                
              }
            }
            }
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      )}
    </React.Fragment>
  );
};

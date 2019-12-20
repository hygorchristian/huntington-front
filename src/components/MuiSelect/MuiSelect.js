import React, { useRef, useState, useEffect } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Container } from './styles';

function MuiSelect({
 children, value, handleChange, label, ...props
}) {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel ref={inputLabel}>
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        <MenuItem value="">
          <em>Nenhum</em>
        </MenuItem>
        { children }
      </Select>
    </FormControl>
);
}


export default MuiSelect;

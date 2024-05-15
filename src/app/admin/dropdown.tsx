'use client';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Dropdown({
  name,
  options,
}: {
  name: string;
  options: any;
}) {
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={options}
      renderInput={(params) => <TextField {...params} label={name} />}
    />
  );
}

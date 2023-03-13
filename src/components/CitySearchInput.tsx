import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';


interface CitySearchInputProps {

    
    setInput: (input: string) => void;
  }

function CitySearchInput(props:CitySearchInputProps) {

    
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Enter City Name" variant="outlined" onChange={(e)=>props.setInput(e.target.value)} />
    </Box>
  )
}

export default CitySearchInput
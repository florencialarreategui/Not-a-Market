import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Navbar = ({clickBoton, cambioInput}) =>{

return (

    <Box
    sx={{
      height: 70,
      backgroundColor: '#ed6c02',
      display: "flex",
      p:2,
      justifyContent: 'space-evenly'

    }}>

<Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
       Not a Market
      </Typography>
    <Box>
      <TextField id="filled-basic" label="Filled" variant="filled"  onChange={cambioInput}/>
      <Button  size="small" onClick ={clickBoton}>Buscar</Button>
    </Box>
  </Box>


);
};

export default Navbar;
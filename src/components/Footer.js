import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () =>{

    return(
        <Box
        sx={{
          height: 100,
          backgroundColor: '#e65100',
          '&:hover': {
            backgroundColor: 'warning.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
 <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           Hecho por Flor
          </Typography>



      </Box>

    );


};

export default Footer;
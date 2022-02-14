import Box from '@mui/material/Box';
const Footer = () =>{

    return(
        <Box
        sx={{
          height: 100,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />

    );


};

export default Footer;
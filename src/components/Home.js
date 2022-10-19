import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import imagen from "../imagenes/not-a-market.png";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Box
        sx={{
          bgcolor: "#ff9800",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
           <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 18,
        }}>
        <img src={imagen} />
        </Box>
        </Typography> 
      
      </Box>
    </div>
  );
};

export default Home;

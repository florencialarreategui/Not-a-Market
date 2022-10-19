import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BsFillCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ clickBoton, cambioInput }) => {
  return (
    <Box
      sx={{
        height: 70,
        backgroundColor: "#ed6c02",
        display: "flex",
        p: 2,
        justifyContent: "space-between",
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h2"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        <Link to="/">
          {" "}
          <Box sx={{ color: "secondary.main" }}>
            {" "}
            Not a Market <BsFillCartXFill />
          </Box>
        </Link>
      </Typography>

      <Box
        sx={{
          display: "flex",
          p: 1,
          justifyContent: "space-around",
          mr: 5,
        }}
      >
        <TextField
          label="¿Qué buscás?"
          variant="filled"
          color="secondary"
          focused
          onChange={cambioInput}
          sx={{
            marginRight: 3,
          }}
        />
        <Link to="/productos">
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={clickBoton}

          >
            Buscar
          </Button>{" "}
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;

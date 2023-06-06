import { Button, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import logo from "../../assets/images/2021-philFIDA-logo.png";

function menuItems() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/sign-in");
  };

  const handleClickAppForm = () => {
    navigate("/app-form");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        mr: 30,
        mt: 5,
      }}
    >
      {/* <motion.img
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: [-1000, -20], opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        src={logo}
        alt="logo"
        style={{
          // float: "right",
          width: "150px",
          height: "150px",
          marginLeft: "30px",
          marginRight: "660px",
          marginTop: "15px",
        }}
      /> */}
      <motion.div
        // sx={{ display: "flex", justifyContent: "end" }}
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: [250, 0], opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Button
          variant="text"
          sx={{
            color: "white",
            // top: "50px",
            width: "150px",
            fontSize: "15px",
            fontFamily: "poppins",
            mr: 0.5,
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "black",
              backgroundColor: "#60ec60",
            },
          }}
        >
          GO BACK
        </Button>

        <Button
          variant="text"
          sx={{
            color: "white",
            // top: "50px",
            width: "150px",
            fontSize: "15px",
            fontFamily: "poppins",
            mr: 0.5,
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "black",
              backgroundColor: "#60ec60",
            },
          }}
        >
          HOW TO APPLY
        </Button>

        {/* <NavLink to="/app-form"> */}
        <Button
          variant="text"
          sx={{
            color: "white",
            // top: "50px",
            width: "150px",
            fontSize: "15px",
            fontFamily: "poppins",
            // backgroundColor: "rgba(128, 128, 128, 0.5)",
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "black",
              backgroundColor: "#60ec60",
            },
          }}
          onClick={handleClickAppForm}
        >
          APPLY NOW!
        </Button>
        {/* </NavLink> */}

        {/* <NavLink to="/sign-in"> */}
        <Button
          variant="text"
          sx={{
            color: "white",
            // top: "50px",
            width: "150px",
            fontSize: "15px",
            fontFamily: "poppins",
            backgroundColor: "rgba(128, 128, 128, 0.5)",
            ml: 0.5,
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "black",
              backgroundColor: "#60ec60",
            },
          }}
          onClick={handleClickLogin}
        >
          LOG IN!
        </Button>
      </motion.div>
    </Box>
  );
}

export default menuItems;

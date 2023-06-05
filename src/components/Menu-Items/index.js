import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// import Logo from "../../assets/PHILFIDALOGO.png"

function menuItems() {
  return (
    <Box sx={{ display: "flex", justifyContent: "end", mr: 25 }}>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: [300, 0], opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Button
          variant="text"
          sx={{
            color: "white",
            top: "50px",
            width: "250px",
            fontSize: "15px",
            fontFamily: "poppins",
            mr: 4,
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "black",
              backgroundColor: "#60ec60",
            },
          }}
        >
          HOW TO APPLY
        </Button>
        <NavLink to="/app-form">
          <Button
            variant="text"
            sx={{
              color: "white",
              top: "50px",
              width: "250px",
              fontSize: "15px",
              fontFamily: "poppins",
              backgroundColor: "rgba(128, 128, 128, 0.5)",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "#60ec60",
              },
            }}
          >
            APPLY NOW!
          </Button>
        </NavLink>
      </motion.div>
    </Box>
  );
}

export default menuItems;

import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AppFormModal from "../Modal/appform-modal";

function MenuItems() {
  const [openAppForm, setOpenAppForm] = useState(false);

  const handleOpenAppForm = () => {
    setOpenAppForm(true);
  };

  const handleCloseAppForm = () => {
    setOpenAppForm(false);
  };

  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/sign-in");
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
      <motion.div
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

        <Button
          variant="text"
          sx={{
            color: "white",
            width: "150px",
            fontSize: "15px",
            fontFamily: "poppins",
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "black",
              backgroundColor: "#60ec60",
            },
          }}
          onClick={handleOpenAppForm}
        >
          APPLY NOW!
        </Button>
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
      <AppFormModal open={openAppForm} handleClose={handleCloseAppForm} />
    </Box>
  );
}

export default MenuItems;

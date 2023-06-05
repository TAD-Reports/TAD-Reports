/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { Box, Button } from "@mui/material";
import "./container.css";
// import { NavLink } from "react-router-dom";
import MenuItems from "../../components/Menu-Items";
import BodyContent from "../../assets/images/da-for-landingpage.jpg";

export default function LandingPage() {
  return (
    <Box className="Background">
      <Box>
        <MenuItems />

        <Box sx={{ ml: 70 }}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ x: [-1000, -250], opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            style={{
              marginTop: "150px",
              marginRight: "50px",
              color: "white",
              fontSize: "40px",
            }}
          >
            Welcome to PhilFIDA
          </motion.h1>
        </Box>

        <Box sx={{ ml: 40 }}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ x: [-1000, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              marginTop: "20px",
              color: "white",
              fontWeight: "normal",
              fontSize: "20px",
            }}
          >
            At PhilFIDA, we are passionate about fibercrops, supporting
            <br />
            farmers, and promoting the use of fiber products. Our task
            <br />
            agency is dedicated to fostering growth and sustainability
            <br />
            in the fiber industry. Whether you're a farmer looking to
            <br />
            enhance your crop yield, a manufacturer seeking quality
            <br />
            fiber materials, or an enthusiast interested in learning
            <br />
            about the wonders of fiber, we're here to help. Join us in
            <br />
            this fiber revolution!
            <br />
          </motion.h2>
        </Box>
      </Box>

      <Box
        className="salem"
        sx={{
          display: "flex",
          justifyContent: "end",
          position: "absolute",
          alignContent: "end",
        }}
      >
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: [300, 10], opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src={BodyContent}
            alt="BodyContent"
            style={{
              marginLeft: "57.5vw",
              position: "absolute",
              marginTop: "-35vh",
              width: "600px",
              height: "300px",
              objectFit: "cover",
            }}
          />
        </motion.div>
      </Box>

      <Box
        sx={{
          marginTop: "50px",
          position: "absolute",
          display: "flex",
          height: "50px",
          alignItems: "left",
        }}
      >
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: [-10, 300], opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* <NavLink to="/sign-in"> */}
          <Button
            type="input"
            variant="contained"
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              width: "200px",
              height: "50px",
              marginLeft: "25px",
              backgroundColor: "#76a66e",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "#60ec60",
              },
            }}
          >
            LOG IN!
          </Button>
          {/* </NavLink> */}
          <div
            style={{
              marginTop: "20px",
              fontSize: "15px",
              color: "white",
              marginLeft: "35px",
            }}
          >
            <h4>(For authorized personnel only)</h4>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: [-10, 300], opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button
            type="input"
            variant="contained"
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              width: "200px",
              height: "50px",
              marginLeft: "50px",
              backgroundColor: "#76a66e",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "#60ec60",
              },
            }}
          >
            Go Back
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}

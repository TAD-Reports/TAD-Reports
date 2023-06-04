/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Grid } from "@mui/material";
import "./container.css";
import { NavLink } from "react-router-dom";
import MenuItems from "../../components/Menu-Items";
import BodyContent from "../../assets/images/da-for-landingpage.jpg";
import BackgroundImage from "../../assets/images/Background-Landingpage.jpg";


export default function LandingPage() {
  return (
    <Box>
      <Box
        className="Background"
        style={{
          backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7) 90%), url(${BackgroundImage})`,
          backgroundSize: "cover",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
        }}
      />
      <Grid
        container
        style={{ borderWidth: "2px", width: "800px" }}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <MenuItems />

        <motion.h1
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: [-10, 350], opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{
            marginTop: "150px",
            marginRight: "50px",
            color: "white",
            fontSize: "70px",
          }}
        >
          Welcome to PhilFIDA
        </motion.h1>

        <motion.h2
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: [-10, 350], opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            marginTop: "20px",
            marginRight: "50px",
            color: "white",
            fontWeight: "normal",
          }}
        >
          At PhilFIDA, we are passionate about fibercrops, supporting<br />
          farmers, and promoting the use of fiber products. Our task<br />
          agency is dedicated to fostering growth and sustainability<br />
          in the fiber industry. Whether you're a farmer looking to<br />
          enhance your crop yield, a manufacturer seeking quality<br />
          fiber materials, or an enthusiast interested in learning<br />
          about the wonders of fiber, we're here to help. Join us in<br />
          this fiber revolution!
          <br />
        </motion.h2>
      </Grid>

      <Box
        sx={{
          display: "flex-end",
          justifyContent: "flex-end",
          position: "absolute",
          alignContent: "flex-end",
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
              marginTop: "-385px",
              marginLeft: "1236px",
              marginBottom: "10",
              width: "1000px",
              height: "500px",
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
          <NavLink to="/sign-in">
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
            LOG IN!
          </Button>
          </NavLink>
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

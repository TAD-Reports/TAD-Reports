/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Grid
} from "@mui/material";
import "./container.css";
import Background from "../../assets/images/da-for-landingpage.jpg"
import MenuItems from "../../components/Menu-Items"

export default function LandingPage() {
  return (
    <Grid className="landing-page-container" >
      <MenuItems />
      <Box 
        sx={{
        color: "white",
        fontFamily: "Poppins",
        marginTop: "120px"
      }}
      >
        <motion.h1
          sx={{ fontSize: "20px", display: "inline-block", width: "200px" }}
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: [10, 250], opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}>
          WELCOME TO PHILFIDA
        </motion.h1>

        <motion.div
          sx={{
            display: "inline-block",
            fontSize: "1px",
            fontWeight: "normal",
            // ml: "300" 
          }}
          >
          <motion.p
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: [10, 250], opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}>
            PhilFIDA (Philippine Fiber Industry Development Authority) is an agency under the Department of<br />
            Agriculture in the Philippines,dedicated to the advancement of the fiber industry. With a focus on<br />
            fibercrops, fiber products, and related agendas, PhilFIDA works towards the development, promotion,<br />
            and sustainability of the sector. Through research, production support, market development,and policy<br />
            formulation, PhilFIDA collaborates with stakeholders to enhance fibercrop varieties, provide<br />
            technical assistance to farmers,expand market access for fiber products, and establish regulations<br />
            that support the growth of the industry. As an integral part of theDepartment of Agriculture, PhilFIDA<br />
            plays a vital role in driving the growth and competitiveness of the Philippine fiber industry.<br />
          </motion.p>
          <motion.img
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: [250, 10], opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={Background}
            alt="Background"
            style={{
              float: "right",
              width: "550px",
              height: "275px",
              marginLeft: "20px",
              marginRight: "250px",
              marginTop: "-270px" 
            }}
          />
        </motion.div>
      </Box>
    </Grid>
  );
}

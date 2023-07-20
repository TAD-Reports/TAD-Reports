import * as React from "react";
import PropTypes from "prop-types";
import { Box, Card, Divider, Typography } from "@mui/material";

function TotalReportCard({ title, value, icon: Icon }) {
  return (
    <Card
      sx={{
        // backgroundColor: (themeMode) =>
        //   themeMode.palette.mode === "dark" ? "#695992" : "#eee",
        background: (themeMode) =>
          themeMode.palette.mode === "dark" ? "#61508c" : "#fff",
      }}
    >
      <Box px={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            width: "70px",
            height: "70px",
            mt: "-20px",
            borderRadius: "10px",
            zIndex: 1000,
            background:
              "linear-gradient(-160deg, rgba(17, 234, 223, 0.9), rgba(17, 234, 25, 0.9))",
            border: "solid 1px lightgray",
          }}
        >
          <Icon
            sx={{
              color: "#4c4c4c",
              fontSize: "50px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            justifyContent: "right",
            textAlign: "right",
            py: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: (themeMode) =>
                themeMode.palette.mode === "dark" ? "lightgray" : "gray",
            }}
          >
            {title || ""}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              color: (themeMode) =>
                themeMode.palette.mode === "dark" ? "#fff" : "black",
              ml: 1,
            }}
          >
            {value}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 4 }} />
    </Card>

    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //     background: (themeMode) =>
    //       themeMode.palette.mode === "dark" ? "#61508c" : "#fff",
    //     borderRadius: "10px",
    //     border: (themeMode) =>
    //       themeMode.palette.mode === "dark" ? "solid 2px gray" : "none",
    //     p: 2,
    //   }}
    // >
    //   <Box>
    //     <Typography
    //       sx={{
    //         fontSize: "15px",
    //         color: (themeMode) =>
    //           themeMode.palette.mode === "dark" ? "lightgray" : "#43934c",
    //       }}
    //     >
    //       {title}
    //     </Typography>
    //     <Typography
    //       sx={{
    //         fontWeight: "bold",
    //         fontSize: "18px",
    //         color: (themeMode) =>
    //           themeMode.palette.mode === "dark" ? "#fff" : "#43934c",
    //         ml: 1,
    //       }}
    //     >
    //       {value}
    //     </Typography>
    //   </Box>
    //   <Icon
    //     sx={{
    //       color: (themeMode) =>
    //         themeMode.palette.mode === "dark" ? "lightgray" : "#43934c",
    //       fontSize: "50px",
    //     }}
    //   />
    // </Box>
  );
}

TotalReportCard.defaultProps = {
  title: "",
  value: "",
  icon: {},
};

TotalReportCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.elementType,
};

export default TotalReportCard;

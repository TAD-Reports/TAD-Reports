import React from "react";
// import { useStateContext } from "../contexts/ContextProvider";

import DescriptionIcon from "@mui/icons-material/Description";
import MoneyIcon from "@mui/icons-material/Money";

import { Box, Card, Grid, Typography } from "@mui/material";
import { TbSeeding, TbVirusOff, TbButterfly } from "react-icons/tb";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { LiaBaconSolid } from "react-icons/lia";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { PiTreePalmBold } from "react-icons/pi";
import { GiPlantSeed } from "react-icons/gi";
import TotalReportCard from "components/philfida/Cards/TotalReportCard";
import NavigationCard from "../../../components/philfida/Cards/NavigationCard";
import PageContainer from "../../../components/philfida/LayoutContainers/PageContainer";

export default function Dashboard() {
  return (
    <PageContainer>
      <Box mb={5}>
        <Typography variant="h2" fontWeight="bold">
          Welcome to PhilFIDA Reports Compilation
        </Typography>
      </Box>
      <Grid container spacing={4} mb={2}>
        <Grid item xs={6}>
          <TotalReportCard title="Total Data" value="21" icon={MoneyIcon} />
        </Grid>
        <Grid item xs={6}>
          <TotalReportCard
            title="Total Reports"
            value="58"
            icon={DescriptionIcon}
          />
        </Grid>
      </Grid>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          height: "25vh",
          // background: (themeMode) =>
          //   themeMode.palette.mode === "dark" ? "#61508c" : "linear-gradient(160deg, rgba(17, 234, 25, 0.9), rgba(234, 137, 63, 0.8))",
          background: (themeMode) =>
            themeMode.palette.mode === "dark"
              ? "linear-gradient(160deg, rgba(96, 127, 219, 0.9), rgba(146, 91, 107, 0.8))"
              : "#fff",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            background: (themeMode) =>
              themeMode.palette.mode === "dark" ? "#2f314b" : "#eee",
            width: "72vw",
            border: (themeMode) =>
              themeMode.palette.mode === "dark"
                ? "solid 1px gray"
                : "solid 1px lightgray",
            py: 1,
          }}
        >
          <NavigationCard
            cardColor="b8dc51"
            pathName="nursery"
            title="nursery"
            icon={TbSeeding}
          />
          <NavigationCard
            cardColor="33d4de"
            pathName="distribution"
            title="distribution"
            icon={HandshakeOutlinedIcon}
          />
          <NavigationCard
            cardColor="e08686"
            pathName="pmsurvived"
            title="pm survived"
            icon={GiPlantSeed}
          />
          <NavigationCard
            cardColor="fc7aff"
            pathName="expansionandrehab"
            title="expansion and rehabilitation"
            icon={LiaBaconSolid}
          />
          <NavigationCard
            cardColor="b0f2a5"
            pathName="cotton"
            title="cotton"
            icon={TiWeatherWindyCloudy}
          />
          <NavigationCard
            cardColor="fafc8a"
            pathName="cocoon"
            title="cocoon"
            icon={TbButterfly}
          />
          <NavigationCard
            cardColor="ab6969"
            pathName="training"
            title="training"
            icon={SchoolOutlinedIcon}
          />
          <NavigationCard
            cardColor="67a6f1"
            pathName="iec"
            title="iec material"
            icon={HiOutlineDocumentDuplicate}
          />
          <NavigationCard
            cardColor="f9a252"
            pathName="expansioncoconut"
            title="expansion under coconut"
            icon={PiTreePalmBold}
          />
          <NavigationCard
            cardColor="289602"
            pathName="diseasemanagement"
            title="abaca disease management"
            icon={TbVirusOff}
          />
        </Box>
      </Card>
    </PageContainer>
  );
}

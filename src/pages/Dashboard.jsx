import React from "react";
// import { useStateContext } from "../contexts/ContextProvider";
import PageContainer from "../components/LayoutContainers/PageContainer";
import { Grid } from "@mui/material";
import GrassIcon from '@mui/icons-material/Grass';
import GppGoodIcon from "@mui/icons-material/GppGood";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { GiCottonFlower } from "react-icons/gi";
import { GiShakingHands } from "react-icons/gi";
import { GiCobweb } from "react-icons/gi";
import SchoolIcon from "@mui/icons-material/School";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import { GiCoconuts } from "react-icons/gi";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

import NavigationCard from "../components/Cards/NavigationCard";

const Dashboard = () => {
  return (
    <PageContainer>
      <Grid container spacing={0}>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="b8dc51"
            pathName="nursery"
            title="nursery"
            icon={GrassIcon}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="33d4de"
            pathName="distribution"
            title="distribution"
            icon={GiShakingHands}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="e08686"
            pathName="pmsurvived"
            title="planting material survived"
            icon={GppGoodIcon}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="fc7aff"
            pathName="expansionandrehab"
            title="expansion and rehabilitation"
            icon={ApartmentIcon}
          />
        </Grid>

        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="b0f2a5"
            pathName="cotton"
            title="cotton"
            icon={GiCottonFlower}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="fafc8a"
            pathName="cocoon"
            title="cocoon"
            icon={GiCobweb}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="ab6969"
            pathName="training"
            title="training"
            icon={SchoolIcon}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="67a6f1"
            pathName="iec"
            title="iec material"
            icon={FolderCopyIcon}
          />
        </Grid>

        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="f9a252"
            pathName="expansioncoconut"
            title="expansion under coconut project"
            icon={GiCoconuts}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <NavigationCard
            cardColor="289602"
            pathName="diseasemanagement"
            title="abaca disease management project"
            icon={CoronavirusIcon}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Dashboard;

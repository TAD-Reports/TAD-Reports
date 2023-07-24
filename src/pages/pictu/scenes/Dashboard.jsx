/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import { Box, Button, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import GroupIcon from "@mui/icons-material/Group";
import themes from "../../../themes/co-theme";
import Header from "../../../components/co/Header";
import BarChart from "../../../components/pictu/Charts/BarChart";
import StatBox from "../../../components/co/StatBox";

const { tokens } = themes;

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to Pictu Dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.theme[100],
              color: colors.grey[100],
              "&:hover": {
                color: "black",
                backgroundColor: colors.redAccent[700],
              },
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
              boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.4)"
        >
          <StatBox
            title="12"
            subtitle="Total Users"
            progress="0.33"
            increase="+33.4%"
            icon={
              <GroupIcon sx={{ color: colors.theme[100], fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.4)"
        >
          <StatBox
            title="24"
            subtitle="TAD Users"
            progress="0.66"
            increase="+66.7%"
            icon={
              <GroupIcon sx={{ color: colors.theme[100], fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.4)"
        >
          <StatBox
            title="63"
            subtitle="IFED Users"
            progress="0.43"
            increase="+43%"
            icon={
              <GroupIcon sx={{ color: colors.theme[100], fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.4)"
        >
          <StatBox
            title="5"
            subtitle="HR Users"
            progress="0.05"
            increase="+5%"
            icon={
              <GroupIcon sx={{ color: colors.theme[100], fontSize: "26px" }} />
            }
          />
        </Box>

        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="25px"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.4)"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Users
          </Typography>
          <Box height="260px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

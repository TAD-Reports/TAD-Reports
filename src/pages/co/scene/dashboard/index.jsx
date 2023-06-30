/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import { Box, Button, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import themes from "../../../../themes/co-theme";
import mockTransaction from "../../../../data/mockData";
import Header from "../../../../components/co/Header";
import LineChart from "../../../../components/co/LineChart";
import BarChart from "../../../../components/co/BarChart";
import StatBox from "../../../../components/co/StatBox";
import ProgressCircle from "../../../../components/co/ProgressCircle";

const { tokens } = themes;
const { mockTransactions } = mockTransaction;

export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DASHBOARD"
          subtitle="Welcome to job application dashboard"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[400],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
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
            subtitle="New Applicants"
            progress="0.33"
            increase="+33.4%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.redAccent[400], fontSize: "26px" }}
              />
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
            subtitle="Reviewed Applications"
            progress="0.66"
            increase="+66.7%"
            icon={
              <FactCheckIcon
                sx={{ color: colors.redAccent[400], fontSize: "26px" }}
              />
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
            subtitle="Files Received"
            progress="0.43"
            increase="+43%"
            icon={
              <PictureAsPdfIcon
                sx={{ color: colors.redAccent[400], fontSize: "26px" }}
              />
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
            subtitle="Emails Sent"
            progress="0.05"
            increase="+5%"
            icon={
              <EmailIcon
                sx={{ color: colors.redAccent[400], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="25px"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.4)"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.greenAccent[300]}
              >
                Applications
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                36 total applications for the last 12 months
              </Typography>
            </Box>
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          borderRadius="25px"
          overflow="hidden"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.4)"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Applications
            </Typography>
          </Box>
          <Box
            maxHeight="calc(100% - 64px)"
            overflow="auto"
            borderRadius="0 0 15px 15px"
          >
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[300]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.blueAccent[400]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius="25px"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.4)"
        >
          <Typography variant="h5" fontWeight="600">
            Available Tasks
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[300]}
              sx={{ mt: "15px" }}
            >
              43 new Tasks
            </Typography>
            <Typography>5 in progress</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
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
            Most Active Employees
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

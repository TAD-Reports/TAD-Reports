import { Box } from "@mui/material";
import Header from "../../../../jobappcomponents/Header";
import BarChart from "../../../../jobappcomponents/BarChart";

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}

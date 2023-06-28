import { Box } from "@mui/material";
import Header from "../../../../jobappcomponents/Header";
import LineChart from "../../../../jobappcomponents/LineChart";

export default function Line() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}

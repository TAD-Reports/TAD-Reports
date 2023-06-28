import { Box } from "@mui/material";
import Header from "../../../../components/co/Header";
import LineChart from "../../../../components/co/LineChart";

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

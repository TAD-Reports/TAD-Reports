import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import PageContainer from "../../../components/philfida/LayoutContainers/PageContainer";
import applicantLogo from "../../../assets/applicantLogo.png";
import ApplicantsTable from "../../../components/co/Tables/ApplicantsTable";

function ApplicantsData() {
  return (
    <PageContainer>
      <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
        <img
          src={applicantLogo}
          alt="joblogo"
          style={{
            height: "120px",
            width: "120px",
          }}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", ml: 4 }}>
          APPLICANTS DATABASE
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <TextField
          label="Search"
          size="small"
          sx={{ width: "300px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ py: 2 }}>
        <ApplicantsTable />
      </Box>

      <Box>
        <Button
          sx={{
            ml: 2,
            mt: 1,
            padding: "8px 15px",
            backgroundColor: "#76a66e",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#9dff8c",
              color: "#2f2f2f",
            },
          }}
        >
          IMPORT DATA
          <AddIcon sx={{ marginLeft: "10px" }} />
        </Button>
      </Box>
    </PageContainer>
  );
}

export default ApplicantsData;

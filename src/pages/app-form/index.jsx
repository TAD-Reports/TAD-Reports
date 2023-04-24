import Logo from "../../assets/images/philfida.png";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PreviewIcon from "@mui/icons-material/Preview";
import SaveIcon from "@mui/icons-material/Save";

function AppForm() {
  return (
    <Box className="App">
      <Card sx={{ height: "90%", width: "80%", overflowY: "auto", p: 2 }}>
        <Box
          className="header"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: -8,
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ height: "5vw", width: "5vw", mr: 4 }}
          />
          <Typography>
            Philippine Fiber Industry Development Authority
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }} my={2}>
          <Typography component="h5" variant="h5" sx={{ fontWeight: "bold" }}>
            JOB APPLICATION FORM
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: 10,
            my: 2,
          }}
        >
          <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
            <DownloadIcon sx={{ mr: 1 }} />
            Download PDS
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
            <UploadIcon sx={{ mr: 1 }} />
            Upload PDS
          </Button>
        </Box>
        <Box className="modal-content" sx={{ flexGrow: 1 }} px={10} my={2}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="LAST NAME"
                name="lastName"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="FIRST NAME"
                name="firstName"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="MIDDLE NAME (Optional)"
                name="middleName"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="SUFFIX (Optional)"
                name="suffix"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>

            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold", mr: 4 }}
              >
                POSITION APPLIED
              </Typography>
              <TextField
                name="sosition"
                variant="outlined"
                sx={{ width: "50%", pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold", mr: 4 }}
              >
                SALARY GRADE
              </Typography>
              <TextField
                name="salary"
                variant="outlined"
                sx={{ width: "50%" }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          className="modal-content"
          mx={10}
          py={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography component="h5" variant="h5" sx={{ fontWeight: "bold" }}>
            EDUCATIONAL BACKGROUND
          </Typography>
        </Box>
        <Box className="modal-content" sx={{ flexGrow: 1 }} my={2} mx={10}>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }} />
            <Grid item xs={3} />
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                YEAR ATTENDED
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                COURSE
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                ATTACH FILE
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                VIEW FILE
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={2}>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                COLLEGE (School Name)
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="college"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="yearAttended"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="course"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                <AttachFileIcon />
              </Button>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                <PreviewIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={2}>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                MASTERAL (School Name)
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="college"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="yearAttended"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="course"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                <AttachFileIcon />
              </Button>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                <PreviewIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={2}>
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                DOCTORAL (School Name)
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="college"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                name="yearAttended"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="course"
                variant="outlined"
                sx={{ pr: 7 }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                <AttachFileIcon />
              </Button>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: "#616161" }}>
                <PreviewIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="modal-action"
          sx={{ textAlign: "right", height: 100 }}
          mx={10}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ mr: 2, mt: 5, backgroundColor: "#616161" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ mr: 2, mt: 5, backgroundColor: "#616161" }}
          >
            <SaveIcon sx={{ mr: 1 }} />
            Save and Apply
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default AppForm;

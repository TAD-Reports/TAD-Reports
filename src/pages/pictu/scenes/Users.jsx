import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../../components/co/Header";
import Service from "../../../services/account-service";
import Table from "../../../components/pictu/Table/Users";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setLoading(true);
    setError("");
    Service.searchUsers(search)
      .then((e) => {
        setUsers(e.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Box sx={{ m: 3 }}>
      <Grid container spacing={0} sx={{ mb: 3 }}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Header title="Users" subtitle="View and Update Users" />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
        >
          <TextField
            label="Search"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ my: 1 }}
            onChange={(evt) => setSearch(evt.target.value)}
            value={search}
          />
        </Grid>
      </Grid>
      <Box>
        <Table data={users} loadingState={loading} dataReload={handleSearch} />
      </Box>

      {error}
    </Box>
  );
}

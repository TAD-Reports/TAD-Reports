import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SaveIcon from "@mui/icons-material/Save";
import Service from "../../../services/account-service";
import SelectRole from "../Textfields/select-role";
import SelectRegion from "../Textfields/select-region";

export default function UsersUpdateModal({
  selected,
  open,
  onClose,
  onSuccess,
}) {
  const [account, setAccount] = React.useState({ ...selected });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const [activeStatus, setActiveStatus] = React.useState(false);
  const [unactiveStatus, setUnactiveStatus] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClose = () => {
    onClose?.();
  };

  const handleSave = () => {
    setError("");
    setLoading(true);
    const newAccount = {
      ...account,
    };
    Service.updateUser(account.uuid, newAccount)
      .then(() => {
        setAccount({});
        onSuccess?.();
        alert("Update Successful");
      })
      .catch((err) => {
        setError(err?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const setStatusActive = () => {
    setAccount({ ...account, status: 1 });
    setActiveStatus(true);
    setUnactiveStatus(false);
  };

  const setStatusUnactive = () => {
    setAccount({ ...account, status: 0 });
    setActiveStatus(false);
    setUnactiveStatus(true);
  };

  const disableButton = () => account.status === 1;

  React.useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      // eslint-disable-next-line no-unused-expressions
      disableButton() ? setStatusActive() : setStatusUnactive();
    }
  }, []);

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    height: "85vh",
    width: "65vw",
    overflowY: "auto",
    pt: 2,
    pb: 5,
    px: 10,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box mt={4}>
          <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Update User
          </Typography>
        </Box>
        <Box mb={8}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                name="firstname"
                variant="filled"
                size="small"
                fullWidth
                disabled={loading}
                defaultValue={account?.firstname}
                onChange={(evt) =>
                  setAccount({ ...account, firstname: evt.target.value })
                }
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                name="lastname"
                variant="filled"
                size="small"
                fullWidth
                disabled={loading}
                defaultValue={account?.lastname}
                onChange={(evt) =>
                  setAccount({ ...account, lastname: evt.target.value })
                }
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                variant="filled"
                size="small"
                fullWidth
                disabled={loading}
                defaultValue={account?.username}
                onChange={(evt) =>
                  setAccount({ ...account, username: evt.target.value })
                }
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                variant="filled"
                size="small"
                fullWidth
                sx={{ mb: 4 }}
                disabled={loading}
                onChange={(evt) =>
                  setAccount({ ...account, password: evt.target.value })
                }
                InputProps={{
                  endAdornment: (
                    <Box
                      role="button"
                      tabIndex={0}
                      onClick={() => setShowPassword(!showPassword)}
                      onKeyPress={() => setShowPassword(!showPassword)}
                      sx={{ margin: 0, cursor: "pointer" }}
                    >
                      {showPassword ? (
                        <VisibilityIcon size={18} />
                      ) : (
                        <VisibilityOffIcon size={18} />
                      )}
                    </Box>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <SelectRegion
                name="Region"
                defaultValue={account?.region}
                onChange={(evt) =>
                  setAccount({ ...account, region: evt.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 3 }}>
              <SelectRole
                name="role"
                defaultValue={account?.role}
                onChange={(evt) =>
                  setAccount({ ...account, role: evt.target.value })
                }
              />
            </Grid>
            <Grid item xs={3} sx={{ mx: 1, mb: 5 }}>
              <Typography sx={{ ml: 1, fontSize: "12px", color: "Gray" }}>
                Status
              </Typography>
              <Button
                variant="contained"
                color={account.status === 1 ? "success" : "secondary"}
                size="sm"
                disabled={activeStatus}
                sx={{ mr: 2, width: "100px" }}
                onClick={setStatusActive}
              >
                Active
              </Button>
              <Button
                variant="contained"
                color={account.status === 0 ? "success" : "secondary"}
                size="sm"
                disabled={unactiveStatus}
                sx={{ width: "100px" }}
                onClick={setStatusUnactive}
              >
                Unactive
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            textAlign: "right",
            width: "100%",
          }}
        >
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{ py: 1, px: 2, mr: 2, backgroundColor: "#5b993b" }}
          >
            <SaveIcon sx={{ mr: 1 }} />
            Save
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ mr: 2, backgroundColor: "#616161" }}
          >
            Cancel
          </Button>
        </Box>
        {error}
      </Box>
    </Modal>
  );
}

UsersUpdateModal.defaultProps = {
  open: false,
  onClose: () => {},
  onSuccess: () => {},
  selected: null,
};
// Typechecking props of the MDAlert
UsersUpdateModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  selected: PropTypes.object,
};

import React from "react";
import { Box, IconButton, Modal } from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

export default function DistributionUpdateModal({ open, onClose }) {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            height: "80vh",
            width: "80vw",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: "80vw",
              position: "absolute",
              textAlign: "right",
            }}
          >
            <IconButton>
              <CloseIcon
                color="error"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

DistributionUpdateModal.defaultProps = {
  open: false,
  onClose: () => {},
  // selected: null,
};
// Typechecking props of the MDAlert
DistributionUpdateModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  // selected: PropTypes.object,
};

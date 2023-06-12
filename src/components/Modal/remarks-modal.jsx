import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function RemarksModal({ open, handleClose, saveRemarks }) {
  const [remarks, setRemarks] = useState("");

  const handleSave = () => {
    saveRemarks(remarks);
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" component="h2">
              Remarks
            </Typography>
          </Box>
          <Box>
            <TextField
              sx={{ mt: 1 }}
              value={remarks}
              onChange={(evt) => setRemarks(evt.target.value)}
              name="remarks"
              variant="filled"
              multiline
              rows={4}
              maxRows={4}
              fullWidth
            />
          </Box>
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <button
              type="button"
              className="custom-btn btn-12"
              onClick={handleSave}
            >
              <span>Save</span>
              <span>Submit</span>
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

RemarksModal.defaultProps = {
  saveRemarks: () => {},
  handleClose: () => {},
};

RemarksModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  saveRemarks: PropTypes.func,
};

export default RemarksModal;

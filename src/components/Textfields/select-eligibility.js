import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const options = ["Select Eligibility", "Professional", "Sub-Professional"];

export default function SplitButton({
  importFunction,
  onEligibilityChange,
  eligibilityType,
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [bool, setBool] = React.useState(true);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    onEligibilityChange(options[selectedIndex]);
    if (eligibilityType === "Select Eligibility") {
      setBool(true);
    } else {
      setBool(false);
    }
  }, [options[selectedIndex], eligibilityType]);

  console.log(eligibilityType);
  console.log(bool);

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          type="button"
          className="upload-btn"
          htmlFor="fileUpload"
          disabled={bool}
          sx={{
            backgroundColor: "#E0E0E0",
            color: "black",
            textAlign: "left",
            width: "12vw",
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "#fff",
              backgroundColor: "gray",
            },
          }}
        >
          <Typography
            variant="label"
            component="label"
            htmlFor="fileUpload"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {options[selectedIndex]}
            <AttachFileIcon sx={{ ml: 1 }} />
          </Typography>
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          sx={{
            backgroundColor: "#616161",
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "#46008B",
              backgroundColor: "#E0E0E0",
            },
          }}
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
        <input
          id="fileUpload"
          type="file"
          accept="pdf, png, jpeg"
          multiple={false}
          onChange={(e) => importFunction(e)}
          style={{ display: "none" }}
        />
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

SplitButton.defaultProps = {
  importFunction: () => {},
  onEligibilityChange: () => {},
  eligibilityType: "",
};

SplitButton.propTypes = {
  importFunction: PropTypes.func,
  onEligibilityChange: PropTypes.func,
  eligibilityType: PropTypes.string,
};

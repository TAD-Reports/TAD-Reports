/* eslint-disable no-param-reassign */
import { Grid, CircularProgress, Fab, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Check, Save } from "@mui/icons-material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { red, blue, green } from "@mui/material/colors";
import Service from "../../services/service";
import RemarksModal from "../Modal/remarks-modal";

const tableActions = ({ params, rowId, setRowId, moduleName }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openRemarksModal, setOpenRemarksModal] = useState(false);

  const handleOpenRemarksModal = () => {
    setOpenRemarksModal(true);
  };

  const handleCloseRemarksModal = () => {
    setOpenRemarksModal(false);
  };

  const handleSaveRemarks = (remarks) => {
    params.row.remarks = remarks;
    // eslint-disable-next-line no-use-before-define
    formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: params.row,
    onSubmit: async () => {
      setLoading(true);
      try {
        const confirmed = window.confirm(
          "Are you sure you want to update this row?"
        );
        if (!confirmed) {
          return; // User cancelled the removal
        }
        await Service.updateAPI(params.row.uuid, params.row, moduleName);
        setSuccess(true);
        setRowId(null);
      } catch (err) {
        console.log(err?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (rowId === params.row.id && success) {
      setSuccess(false);
    }
  }, [rowId, success]);

  const handleCheck = () => {
    const confirmed = window.confirm("Do you want to edit this row again?");
    if (!confirmed) {
      return; // User cancelled the removal
    }
    setSuccess(false);
  };

  const handleRemove = (row) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this row?"
    );
    if (!confirmed) {
      return; // User cancelled the removal
    }

    setLoading(true);
    Service.deleteAPI(row.uuid, moduleName)
      .then((e) => {
        alert(e.data.message);
        // dataReload();
        // setRemarks("");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={3} sx={{ m: 0.5, ml: 0, position: "relative" }}>
        <Tooltip title="Remove" placement="top">
          <Fab
            color="secondary"
            sx={{
              width: 35,
              height: 35,
              bgcolor: "#D58F8F",
            }}
            onClick={() => handleRemove(params.row)}
          >
            <DeleteIcon />
          </Fab>
        </Tooltip>

        {loading && (
          <CircularProgress
            size={47}
            sx={{
              color: red[500],
              position: "absolute",
              top: 18,
              left: 18,
              zIndex: 1,
            }}
          />
        )}
      </Grid>
      <Grid item xs={3} sx={{ m: 0.5, position: "relative" }}>
        {success || rowId === params.row.id ? (
          <Fab
            color="primary"
            sx={{
              width: 35,
              height: 35,
              bgcolor: green[500],
              "&:hover": { bgcolor: green[700] },
            }}
            onClick={handleCheck}
          >
            <Check />
          </Fab>
        ) : (
          <Tooltip title="Update" placement="top">
            <span>
              <Fab
                color="primary"
                sx={{
                  width: 35,
                  height: 35,
                }}
                disabled={rowId !== params.id || loading}
                onClick={formik.handleSubmit}
              >
                <Save />
              </Fab>
            </span>
          </Tooltip>
        )}
        {loading && (
          <CircularProgress
            size={47}
            sx={{
              color: green[500],
              position: "absolute",
              top: 18,
              left: 18,
              zIndex: 1,
            }}
          />
        )}
      </Grid>

      <Grid item xs={3} sx={{ m: 0.5, position: "relative" }}>
        <Tooltip title="Add Remarks" placement="top">
          <Fab
            color="primary"
            sx={{
              width: 35,
              height: 35,
              bgcolor: "#7298B2",
            }}
            onClick={handleOpenRemarksModal}
          >
            <EditNoteIcon />
          </Fab>
        </Tooltip>

        {loading && (
          <CircularProgress
            size={47}
            sx={{
              color: blue[500],
              position: "absolute",
              top: 18,
              left: 18,
              zIndex: 1,
            }}
          />
        )}
      </Grid>
      <RemarksModal
        open={openRemarksModal}
        handleClose={handleCloseRemarksModal}
        saveRemarks={handleSaveRemarks}
      />
    </Grid>
  );
};

export default tableActions;

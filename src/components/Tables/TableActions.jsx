import { Grid, CircularProgress, Fab, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Check, Save } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import Service from "../../services/pmsurvived-service";

const tableActions = ({ params, rowId, setRowId, moduleName }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: params.row,
    onSubmit: async () => {
      setLoading(true);
      console.log("values:");
      console.log(params.row);
      try {
        const confirmed = window.confirm(
          "Are you sure you want to update this row?"
        );
        if (!confirmed) {
          return; // User cancelled the removal
        }
        await Service.updateAPI(rowId, params.row, moduleName);
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
    <Grid container spacing={0}>
      <Grid item xs={5} sx={{ m: 0.5, position: "relative" }}>
        <Tooltip title="Remove" placement="left">
          <Fab
            color="secondary"
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#D58F8F",
            }}
            onClick={() => handleRemove(params.row)}
          >
            <DeleteIcon />
          </Fab>
        </Tooltip>

        {loading && (
          <CircularProgress
            size={52}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Grid>
      <Grid item xs={5} sx={{ m: 0.5, position: "relative" }}>
        {success || rowId === params.row.id ? (
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
              bgcolor: green[500],
              "&:hover": { bgcolor: green[700] },
            }}
          >
            <Check />
          </Fab>
        ) : (
          <Tooltip title="Update" placement="left">
            <Fab
              color="primary"
              sx={{
                width: 40,
                height: 40,
              }}
              disabled={params.id !== rowId || loading}
              onClick={formik.handleSubmit}
            >
              <Save />
            </Fab>
          </Tooltip>
        )}
        {loading && (
          <CircularProgress
            size={52}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default tableActions;

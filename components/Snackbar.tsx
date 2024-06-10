import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FileInfoContext } from '@/context/FileInfoContext';

export default function SimpleSnackbar() {
    const { setShowSnackbar,showSnackbar}:any = React.useContext(FileInfoContext);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
    open={showSnackbar}
    autoHideDuration={6000}
    onClose={handleClose}
    message="File Uploaded Successfully"
    action={action}
    ContentProps={{
      sx: { backgroundColor: '#0f766e' }
    }}
  />
  );
}

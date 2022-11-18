import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";

const CreateModal = ({ OpenButton, children, ButtonContent, ModalContent }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const CenterContent = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflowY: "scroll !important",
  };

  return (
    <div>
      <OpenButton handleOpen={handleOpen} content={ButtonContent} />
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableScrollLock={true}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={CenterContent}>
            <ModalContent handleClose={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateModal;

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import GenerateModalButton from "./GenerateModalButton";
import { Box } from "@mui/material";

const CreateModal = ({
  OpenButton = GenerateModalButton,
  children,
  ButtonContent,
  ModalContent,
  ContentProps,
  MakeOpen = false,
}) => {
  const [open, setOpen] = React.useState(MakeOpen);
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
    overflow: "hidden",
  };

  const ContentButton = (
    <>
      {ButtonContent}
      {children}
    </>
  );

  return (
    <div>
      <OpenButton handleOpen={handleOpen} content={ContentButton} />
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableScrollLock={true}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          zIndex: 100,
        }}
      >
        <Fade in={open}>
          <Box sx={CenterContent}>
            <ModalContent handleClose={handleClose} {...ContentProps} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateModal;

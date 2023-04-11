import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import CreateModal from "../components/Modal/CreateModal";
import CreateGroup from "../components/Group/CreateGroup";
import emptyIcon from "../assets/icons/empty.svg";

const Wallet = () => {
  const { palette, width } = useTheme();
  const WalletStyle = {
    margin: "0 auto 0 auto",
    marginTop: { xs: "4vh", md: "10vh" },
    width: width,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "30px",
  };

  return (
    <Box sx={WalletStyle}>
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
        columnGap={"15px"}
        sx={{ width: "100%" }}
      >
        <CreateModal
          ModalContent={CreateGroup}
          ButtonContent={
            <Button variant="contained" size="large" startIcon={<AddIcon />}>
              Create Group
            </Button>
          }
        />
      </Stack>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          minHeight: "50vh",
          marginTop: "10px",
          background: palette.secondary.light,
          width: "100%",
          borderRadius: "10px",
        }}
        spacing={3}
      >
        <img src={emptyIcon} alt="notFound" style={{ width: "120px" }} />
        <Stack justifyContent={"center"} alignItems={"center"} spacing={1}>
          <Typography variant="h6">You do not have a group</Typography>
          <CreateModal
            ModalContent={CreateGroup}
            ButtonContent={
              <Button variant="contained" size="large" startIcon={<AddIcon />}>
                Create Group
              </Button>
            }
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Wallet;

import React from "react";
import LinearProgessCustomize from "../../components/LinearProgessCustomize";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Man4Icon from "@mui/icons-material/Man4";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ReplyIcon from "@mui/icons-material/Reply";
import { useTheme } from "@emotion/react";

import {
  Avatar,
  Box,
  Button,
  Chip,
  FormControl,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ShareBtn from "../ShareBtn";
import CreateModal from "../Modal/CreateModal";
import GenerateModalButton from "../Modal/GenerateModalButton";
import Payment from "../Payment/Payment";

const ProjectDetailsProfile = ({ offer }) => {
  const { palette } = useTheme();
  const ProjectDetailsProfileStyle = {
    width: "cacl(100% - 20px)",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "15px",
    borderRadius: "15px",
  };

  const PROJECTURL = window.location.href;
  const localisation =
    offer?.localisation === undefined
      ? { name: { official: "dd" } }
      : JSON.parse(offer?.localisation);
  return (
    <Box sx={ProjectDetailsProfileStyle}>
      <Stack
        sx={{
          width: "calc(100% - 20px)",
        }}
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={offer?.company?.name}
            src={offer?.company?.logo}
            sx={{ width: "110px", height: "110px", margin: "15px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            rowGap: "10px",
            flexDirection: "column",
            minWidth: "calc(100% - 120px)",
          }}
        >
          <Typography
            sx={{
              fontSize: "2.3em",
              fontWeight: "bold",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            {offer?.company?.name}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgessCustomize value={30} />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "1.3em", fontWeight: "bold" }}>
                  {new Date(offer?.end_date).getDate()} days &{" "}
                  {new Date(offer?.end_date).getMonth()} month
                </Typography>
                <Typography sx={{ color: "gray" }}>REMANING</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "1.3em", fontWeight: "bold" }}>
                  {offer?.total_investment_to_raise} xof to go
                </Typography>
                <Typography sx={{ color: "gray" }}>77% FUNDED</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>

      <Box sx={{ width: "calc(100% - 20px)", margin: "5px 15px" }}>
        <Typography
          sx={{ width: "100%", fontSize: "1.8em", fontWeight: "bold" }}
        >
          {offer?.investment_motive}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "calc(100% - 20px)",
          margin: "15px 15px",
          display: "flex",
          justifyContent: "flex-start",
          alginItems: "center",
          columnGap: "20px",
        }}
      >
        <Chip icon={<LocationOnIcon />} label={localisation.name.official} />
        <Chip label="RETAIL" />
      </Box>

      <Box sx={{ width: "calc(100% - 20px)", margin: "15px 15px" }}>
        <Typography
          sx={{
            fontSize: "1.5em",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Help fund this loan
        </Typography>
        <Stack
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignContent: "center",
          }}
          justifyContent="space-between"
          alignItems={"center"}
          rowGap="20px"
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignContent: "center",
              columnGap: "15px",
            }}
          >
            <Box sx={{ width: "47.5%" }}>
              <FormControl fullWidth>
                {/* min amount is : 25$ */}
                <TextField type={"number"} size="small" label="100$" />
              </FormControl>
            </Box>
            <Box sx={{ width: "47.5%" }}>
              <CreateModal
                OpenButton={GenerateModalButton}
                ModalContent={Payment}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ width: "100%" }}
                >
                  Lend now
                </Button>
              </CreateModal>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignContent: "center",
              columnGap: "15px",
              rowGap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link href="#story">
              <Button
                startIcon={<Man4Icon />}
                variant="outlined"
                sx={{ width: { xs: "calc(100% / 3) - 1px", md: "auto" } }}
              >
                Borrower Story
              </Button>
            </Link>
            <Link href="#details">
              <Button
                variant="outlined"
                startIcon={<FormatListBulletedIcon />}
                sx={{ width: { xs: "calc(100% / 3) - 1px", md: "auto" } }}
              >
                Loan Details
              </Button>
            </Link>
            <CreateModal
              OpenButton={GenerateModalButton}
              ModalContent={ShareBtn}
              ContentProps={{ url: PROJECTURL }}
              ButtonContent={
                <Button
                  variant="outlined"
                  startIcon={<ReplyIcon />}
                  sx={{ width: { xs: "calc(100% / 3) - 1px", md: "auto" } }}
                >
                  Share Project
                </Button>
              }
            ></CreateModal>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default ProjectDetailsProfile;

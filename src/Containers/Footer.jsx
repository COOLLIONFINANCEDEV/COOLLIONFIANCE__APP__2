import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
const Footer = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        minHeight: "60vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "10vh",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: "90%",
          backgroundColor: palette.primary.main,
          color: palette.secondary.main,
          height: "100%",
          borderRadius: "10px",
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "10vh 0 0 0",
          rowGap: "50px",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "90%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",

            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexWrap: "wrap",

              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              GET TO KNOW US
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              How Kiva works
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              FAQs
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              Partner with us
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexWrap: "wrap",

              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              EXPLORE
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              Protocol
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              Gifts
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              Happening now
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              Developer API
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexWrap: "wrap",

              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              LEND
            </Typography>
            <Typography color="secondary">
              Make a loan, change a life.
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              Lend now
            </Typography>
            <Typography
              sx={{
                "&:hover": { textDecoration: "underline" },
                textTransform: "capitalize",
              }}
            >
              Monthly Good
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexWrap: "wrap",

              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              BORROW
            </Typography>
            <Typography color="secondary">
              Loans for entrepreneurs doing amazing things.
            </Typography>
            <Button fontSize="medium" color="secondary" variant="contained">
              Apply Now
            </Button>
          </Box>
        </Box>

        <Box sx={{ width: "80%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                columnGap: "10px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Follow Us
              </Typography>
              <IconButton size="medium" color="secondary" variant="contained">
                <FacebookTwoToneIcon fontSize="medium" />
              </IconButton>
              <IconButton size="medium" color="secondary" variant="contained">
                <InstagramIcon fontSize="medium" />
              </IconButton>
              <IconButton size="medium" color="secondary" variant="contained">
                <LinkedInIcon fontSize="medium" />
              </IconButton>
              <IconButton size="medium" color="secondary" variant="contained">
                <TwitterIcon fontSize="medium" />
              </IconButton>{" "}
              <IconButton size="medium" color="secondary" variant="contained">
                <YouTubeIcon fontSize="medium" />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                columnGap: "10px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Landing Page
              </Typography>
              <IconButton size="medium" color="secondary" variant="contained">
                <LanguageIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Box>
          <Divider color={palette.secondary.main} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "0.8em", margin: "10px 0 10px 0" }}>
              © 2015 - 2022 Upwork® Global Inc.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

import { useTheme } from "@emotion/react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
const Footer = () => {
  const { palette, width } = useTheme();
  return (
    <Box
      sx={{
        minHeight: "60vh",
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "10vh auto 0 auto",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: "100%",
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
            width: "90%",
            height: "90%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",

            alignItems: "flex-start",
            flexDirection: "row",
            rowGap: "30px",
            columnGap: "20px",
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
            <FooterBlock
              Title={"GET TO KNOW US"}
              Items={[
                "About us",
                "How Cool Lion Finance works",
                "FAQS",
                "Partner With Us",
              ]}
            />
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
            <FooterBlock
              Title={"EXPLORE"}
              Items={["Happening Now", "Almost Funded"]}
            />
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
            <FooterBlock
              Title={"LEND"}
              Items={["Make a loan, change a life.", "Lend now"]}
            />
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

        <Box sx={{ width: "90%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
                columnGap: { xs: "auto", sm: "10px" },
                rowGrap: "10px",
                flexWrap: "wrap",
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
              <Button
                endIcon={<LanguageIcon />}
                sx={{ fontWeight: "bold" }}
                color="secondary"
                size="large"
              >
                Landing Page
              </Button>
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
              © 2022- 2023 Cool Lion Finance ®.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const FooterItems = ({ Items }) => {
  return (
    <>
      {Items.map((item) => {
        return (
          <Typography
            key={item}
            sx={{
              "&:hover": { textDecoration: "underline" },
              textTransform: "capitalize",
            }}
          >
            {item}
          </Typography>
        );
      })}
    </>
  );
};

const FooterBlock = ({ Title, Items }) => {
  return (
    <>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
        {Title}
      </Typography>
      <FooterItems Items={Items} />
    </>
  );
};

export default Footer;

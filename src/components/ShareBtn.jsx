import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareBtn = ({ url }) => {
  return (
    <Stack
      direction="row"
      justifyContent={"center"}
      alignItems="center"
      flexWrap={"wrap"}
      spacing={2}
      sx={{
        width: "100%",
        margin: "10px 10px",
      }}
    >
      <IconButton sx={{ width: "100px" }}>
        <TwitterShareButton url={url}>
          <TwitterIcon round={true} />
          <Typography sx={{ textTransform: "capitalize" }}>Twitter</Typography>
        </TwitterShareButton>
      </IconButton>

      <IconButton sx={{ width: "100px" }}>
        <EmailShareButton url={url}>
          <EmailIcon round={true} />
          <Typography sx={{ textTransform: "capitalize" }}>Emaiil</Typography>
        </EmailShareButton>
      </IconButton>

      <IconButton sx={{ width: "100px" }}>
        <FacebookShareButton url={url}>
          <FacebookIcon round={true} />
          <Typography sx={{ textTransform: "capitalize" }}>Facebook</Typography>
        </FacebookShareButton>
      </IconButton>

      <IconButton sx={{ width: "100px" }}>
        <InstapaperShareButton url={url}>
          <InstapaperIcon round={true} />
          <Typography sx={{ textTransform: "capitalize" }}>
            Instapaper
          </Typography>
        </InstapaperShareButton>
      </IconButton>

      <IconButton sx={{ width: "100px" }}>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round={true} />
          <Typography sx={{ textTransform: "capitalize" }}>Linkedin</Typography>
        </LinkedinShareButton>
      </IconButton>

      <IconButton sx={{ width: "100px" }}>
        <RedditShareButton url={url}>
          <RedditIcon round={true} />
          <Typography sx={{ textTransform: "capitalize" }}>Reddit</Typography>
        </RedditShareButton>
      </IconButton>

      <IconButton sx={{ width: "100px" }}>
        <WhatsappShareButton url={url}>
          <WhatsappIcon round={true} />
          <Typography sx={{ textTransform: "capitalize" }}>Whatsapp</Typography>
        </WhatsappShareButton>
      </IconButton>

      <IconButton sx={{ width: "100px" }}>
        <TelegramShareButton url={url}>
          <TelegramIcon round={true} />
          <Typography sx={{ textTransform: "capitalize" }}>Telegram</Typography>
        </TelegramShareButton>
      </IconButton>

      <IconButton sx={{ width: "100px" }}>
        <ViberShareButton url={url}>
          <ViberIcon round={true} />
          <Typography sx={{ textTransform: "capitalize" }}>Viber</Typography>
        </ViberShareButton>
      </IconButton>
    </Stack>
  );
};

export default ShareBtn;

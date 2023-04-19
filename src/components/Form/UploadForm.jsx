import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ConvertFileInBase64 from "../../Helpers/Token/ConvertFileInBase64";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UploadForm = ({ imageSelected, DefaultImage, title, error }) => {
  const [baseImage, setBaseImage] = React.useState(DefaultImage);
  const uploadImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await ConvertFileInBase64(file);
    setBaseImage(base64);
    imageSelected(base64);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        rowGap: "5px",
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {DefaultImage ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AccountCircleIcon sx={{ fontSize: 100 }} />
        </Box>
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src={baseImage ? baseImage : ""}
          style={{ borderRadius: "20%", width: "25%", margin: "auto" }}
        />
      )}
      <Button
        variant="outlined"
        component="label"
        color={error ? "error" : "primary"}
        sx={{ width: "100%", height: "100px", borderRadius: "100px" }}
        startIcon={<PhotoCamera />}
      >
        <Typography textAlign={"center"} component={"span"} fontSize={"0.8rem"}>
          {title} <br /> (Must be a .jpg, .jpeg or .png)
        </Typography>
        <input
          hidden
          ccept=".jpg, .jpeg, .png,"
          multiple
          type="file"
          onChange={uploadImg}
        />
      </Button>
    </div>
  );
};

export default UploadForm;

import { PhotoCamera } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import ConvertFileInBase64 from "../../Helpers/Token/ConvertFileInBase64";

const UploadForm = ({ imageSelected }) => {
  const [baseImage, setBaseImage] = React.useState("");

  const uploadImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await ConvertFileInBase64(file);
    setBaseImage(base64);
    imageSelected(base64);
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        rowGap: "5vh",
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        src={baseImage}
        style={{ borderRadius: "20%", width: "25%", margin: "auto" }}
      />
      <Button
        variant="outlined"
        component="label"
        sx={{ width: "100%", height: "150px" }}
        startIcon={<PhotoCamera />}
      >
        Choose image <br /> (Must be a .gif, .jpg or .png)
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={uploadImg}
        />
      </Button>
    </form>
  );
};

export default UploadForm;

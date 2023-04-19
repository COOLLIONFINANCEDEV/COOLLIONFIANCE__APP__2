import { FileCopy, PhotoCamera } from "@mui/icons-material";
import { Button, Chip } from "@mui/material";
import React from "react";
import ConvertFileInBase64 from "../../Helpers/Token/ConvertFileInBase64";

const UploadMulitpleImage = ({ imageSelected, title }) => {
  const [image, setImage] = React.useState([]);
  const uploadImg = async (e) => {
    Object.values(e.target.files).forEach(async (file) => {
      const base64 = await ConvertFileInBase64(file);
      const imageSchema = {
        title: file.name,
        image: base64,
      };
      const newList = image;
      newList.push(imageSchema);
      imageSelected(newList);
      setImage(newList);
    });
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
      {image.map((item, key) => (
        <Chip
          icon={<FileCopy />}
          key={key}
          label={item?.title}
          clickable
          color={"primary"}
        />
      ))}
      <Button
        variant="outlined"
        component="label"
        sx={{ width: "100%", height: "auto" }}
        startIcon={<PhotoCamera />}
      >
        {title} <br /> (Must be a .gif, .jpg or .png)
        <input
          hidden
          accept="image/*"
          multiple={false}
          type="file"
          onChange={uploadImg}
        />
      </Button>
    </div>
  );
};

export default UploadMulitpleImage;

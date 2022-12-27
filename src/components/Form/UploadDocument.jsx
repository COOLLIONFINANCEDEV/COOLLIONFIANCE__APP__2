import {
  DeleteOutline,
  FileCopy,
  HighlightOffOutlined,
} from "@mui/icons-material";
import Delete from "@mui/icons-material/Delete";
import { Box, Button, Chip, Typography } from "@mui/material";
import React from "react";
import ConvertFileInBase64 from "../../Helpers/Token/ConvertFileInBase64";

const UploadDocument = ({ imageSelected }) => {
  const Values = [
    {
      title: "company incooperation document",
      image: null,
    },
    {
      title: "photocopy of the manager's identity document",
      image: null,
    },
    {
      title: "tax existence document",
      image: null,
    },
    {
      title: "a bank account",
      image: null,
    },
    {
      title: "a financial statement for the last three years",
      image: null,
    },
  ];
  const [baseImage, setBaseImage] = React.useState(Values);
  const [step, Setstep] = React.useState(0);
  const uploadImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await ConvertFileInBase64(file);
    console.log(step, base64);
    Setstep((state) => state + 1);
    setBaseImage((state) => {
      state[step].image = base64;
      return state;
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
      {baseImage.map((item) => {
        console.log(item);
        return (
          <>
            <Chip
              icon={<FileCopy />}
              label={item.title}
              clickable
              color={item.image === null ? "secondary" : "primary"}
              // onDelete={handleDelete}
            />
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
          </>
        );
      })}
      <Button
        variant="outlined"
        component="label"
        sx={{ width: "100%", height: "150px" }}
        disabled={step === 5 ? true : false}
        // startIcon={<FileCopyIcon />} s
      >
        Choose file
        <br /> (Must be a .pdf,.docx)
        <input
          hidden
          accept=".doc,.docx"
          multiple
          type="file"
          onChange={uploadImg}
        />
      </Button>
    </div>
  );
};

export default UploadDocument;

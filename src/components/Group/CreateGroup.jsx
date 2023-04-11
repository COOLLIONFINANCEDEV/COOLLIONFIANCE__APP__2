import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const CreateGroup = () => {
  return (
    <>
      <Box
        sx={{
          minWidth: "30vw",
          minHeight: "30vh",
          borberRadius: "10px",
        }}
      >
        <Stack rowGap="20px">
          <Typography variant="h6" color={"primary"}>
            Create a New Group
          </Typography>

          <Typography>
            Fill out the fields below to create your own group.
          </Typography>
        </Stack>

        <Stack rowGap="" sx={{ marginTop: "10px" }} component={"form"}>
          <Typography sx={{ fontSize: "0.8rem" }} component="span">
            Group Name
          </Typography>
          <TextField
            type={"tel"}
            id="phone"
            name="phone"
            placeholder="phone number"
            sx={{ width: "100%" }}
            size="small"
          />

          <Typography
            sx={{ fontSize: "0.8rem", marginTop: "10px" }}
            component="span"
          >
            Descritpion
          </Typography>
          <TextField
            type={"number"}
            id="amount"
            name="amount"
            placeholder="Amount"
            sx={{ width: "100%" }}
            size="small"
          />
          <Button
            sx={{ width: "100%", marginTop: "20px" }}
            variant={"contained"}
            type="submit"
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default CreateGroup;

import { CheckBox } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const DataSettings = () => {
  const DataSettingsStyle = {
    width: "90%",
    margin: "5vh auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "7vh",
  };

  const DataSettingBlockSetting = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    columnGap:'15px'
  };

  const GapBlock = {
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    flexDirection:'column',
    width:'100%',
    rowGap:'2vh'
  }
  return (
    <Box sx={DataSettingsStyle}>
      <Box>
        <Typography variant="h4">Data settings</Typography>
        <Typography variant="p">
          Manage your data settings on coolionfinance or close your account
        </Typography>
      </Box>
      {/* <Box sx={GapBlock}>
        <Typography variant="h6">Cookie preferences</Typography>
        <Box sx={DataSettingBlockSetting}>
          <CheckBox />
          <Typography variant="p">
            Opt out of non-essential analytics and marketing cookies. This
            setting will be applied automatically whenever you sign into your
            account and will override any session-based cookie settings.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">
          Advertising data sharing preferences
        </Typography>
        <Box sx={DataSettingBlockSetting}>
          <CheckBox />
          <Typography variant="p">
            Opt out of sharing your data with third parties for advertising
            purposes. Learn more in the "How coolionfinance Uses Your Personal
            Information" section of coolionfinance's privacy policy.
          </Typography>
        </Box>
      </Box>
      <Button variant='contained' sx={{width:'40%'}}>
        Save data settings
      </Button> */}
    <Box sx={GapBlock}>
        <Typography variant="h6">
        Account termination
        </Typography>
        <Box sx={DataSettingBlockSetting}>
          <Typography variant="p">
          Permanently delete your coolionfinance account and all personally identifying information associated with your account. When you delete your account, you'll authorize any current balance and future repayments on your outstanding loans to be donated to coolionfinance. If you'd like your current balance returned to you, please withdraw funds prior to deleting your account. After deleting your account you'll be unable to access your past lending activity.
          </Typography>
        </Box>
        <Button variant='contained' sx={{width:'40%'}}>Close account</Button>
      </Box>
      
    </Box>
  );
};

export default DataSettings;

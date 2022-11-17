import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ChatBot from "react-simple-chatbot";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@emotion/react";

const ChatBotCustome = () => {
  const { palette, shadows } = useTheme();
  const [ChatBotIcon, setChatBotIcon] = React.useState(false);


  const handleIconChatBot = React.useCallback(() => {
    setChatBotIcon(true);
  }, []);

  const handleIconChatBotOut = React.useCallback(() => {
    setChatBotIcon(false);
  }, []);

  const handleIconChatBotCloseAndOpenChatBot = React.useCallback(() => {
    setChatBotIcon(null);
  }, []);

  
  const containerStyle = {
    position: "fixed",
    bottom: "0",
    right: "0",
    zIndex: "9999",
  };

  const ChatBotStyle = {
    margin: "0 30px 50px 0",
  };

  const bubbleStyle = {
    backgroundColor: palette.primary.main,
  };

  const ChatBotIconStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 30px 50px 0",
    boxShadow: shadows[10],
  };

  const ChatBotIconStyleHover = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: palette.secondary.light,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 30px 50px 0",
    border: "1px solid",
    borderColor: palette.secondary.main,
    transition: "5s all",
    boxShadow: shadows[10],
  };

  const ChatBotStep = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
  ];
  return (
    <Box sx={containerStyle}>
      <Box>
        {ChatBotIcon === null && (
          <ChatBot
            style={ChatBotStyle}
            steps={ChatBotStep}
            headerComponent={<HeaderChatBot closeChatBot={setChatBotIcon} />}
            bubbleStyle={bubbleStyle}
            opened={false}
          />
        )}
      </Box>
      <Box
        onMouseOver={handleIconChatBot}
        onMouseOut={handleIconChatBotOut}
        onClick={handleIconChatBotCloseAndOpenChatBot}
      >
        {ChatBotIcon === false && (
          <Box sx={ChatBotIconStyle}>
            <IconButton
              color="secondary"
              
              sx={{ width: "100%", height: "100%" }}
            >
              <ChatBubbleIcon  />
            </IconButton>
          </Box>
        )}

        {ChatBotIcon === true && (
          <Box sx={ChatBotIconStyleHover}>
            <IconButton
              color="primary"
              fontSize="medium"
              sx={{ width: "100%", height: "100%" }}
            >
              <SendIcon fontSize="medium" />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const HeaderChatBot = ({ closeChatBot }) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: palette.primary.main,
        padding: "10px 10px 0px 10px",
      }}
    >
      <Typography color="secondary">Cool Lion Finance Chat</Typography>
      <Box sx={{ transform: "translateX(-15px)" }}>
        <IconButton color="secondary" onClick={() => closeChatBot(false)}>
          <ClearIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBotCustome;

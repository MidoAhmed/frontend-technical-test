import React, { useState } from "react";
import styles from "./MessageInput.module.scss";
import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface MessageInputProps {
  onSendMessage: (newMessage: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    onSendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className={styles.inputContainer}>
      <TextField
        label="Send message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        sx={{
          width: "100%",
        }}
        InputProps={{
          sx: {
            borderRadius: "40px",
          },
        }}
      />

      <IconButton
        type="button"
        sx={{
          position: "absolute",
          right: 0,
          padding: "15px",
        }}
        onClick={handleSendMessage}
      >
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default MessageInput;

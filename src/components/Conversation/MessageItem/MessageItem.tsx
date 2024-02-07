import React, { useContext } from "react";
import styles from "./MessageItem.module.scss";
import { ListItem } from "@mui/material";
import { Message } from "../../../types/message";
import { LoggedUserContext } from "../../../context/LoggedUserContext";

interface MessageItemProps {
  message: Partial<Message>;
  senderNickname: string;
}

const MessageItem = ({ message, senderNickname }: MessageItemProps) => {
  const loggedUserId = useContext(LoggedUserContext);
  return (
    <ListItem
      key={message.id}
      sx={{
        justifyContent:
          message.authorId === loggedUserId ? "flex-end" : "flex-start",
      }}
    >
      <div className={styles.message}>
        <span className={styles.messageAuthor}>
          {message.authorId !== loggedUserId && senderNickname}
        </span>
        <p
          className={`${styles.messageBody} ${
            message.authorId === loggedUserId ? styles.me : styles.other
          }`}
        >
          {message.body}
        </p>
      </div>
    </ListItem>
  );
};

export default MessageItem;

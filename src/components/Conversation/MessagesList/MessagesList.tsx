import React from "react";
import styles from "./MessagesList.module.scss";
import { List } from "@mui/material";
import MessageItem from "../MessageItem/MessageItem";
import { Message } from "../../../types/message";

interface MessageListProps {
  messages: Partial<Message>[];
  senderNickname: string;
}

const MessageList = ({ messages, senderNickname }: MessageListProps) => {
  return (
    <List className={styles.messages}>
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          senderNickname={senderNickname}
        />
      ))}
    </List>
  );
};

export default MessageList;

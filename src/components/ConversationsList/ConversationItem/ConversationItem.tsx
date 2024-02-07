import React from "react";
import styles from "./ConversationItem.module.scss";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { format } from "date-fns";
import Link from "next/link";
import { Conversation } from "../../../types/conversation";

interface ConversationItemProps {
  conversation: Conversation;
}

const ConversationItem = ({ conversation }: ConversationItemProps) => {
  return (
    <Link href={`/conversation/${conversation.id}`} key={conversation.id}>
      <ListItem className={styles.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={conversation.senderNickname} />
        </ListItemAvatar>
        <ListItemText
          primary={conversation.senderNickname}
          secondary={format( new Date(conversation.lastMessageTimestamp), "MMMM dd")}
        />
      </ListItem>
    </Link>
  );
};

export default ConversationItem;

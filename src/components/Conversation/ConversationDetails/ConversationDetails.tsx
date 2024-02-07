import React from "react";
import styles from "./ConversationDetails.module.scss";
import { isToday, format } from "date-fns";
import { Conversation } from "../../../types/conversation";

interface ConversationDetailsProps {
  conversation: Conversation;
}

const ConversationDetails = ({ conversation }: ConversationDetailsProps) => {
  return (
    <div className={styles.conversationInfo}>
      <h5> {conversation?.senderNickname} - You </h5>
      <span>
        {conversation &&
          `Last message: ${
            isToday(new Date(conversation.lastMessageTimestamp))
              ? `today at ${format(
                  new Date(conversation.lastMessageTimestamp),
                  "hh:mm a"
                )}`
              : format(new Date(conversation.lastMessageTimestamp), "MMMM dd")
          }`}
      </span>
    </div>
  );
};

export default ConversationDetails;

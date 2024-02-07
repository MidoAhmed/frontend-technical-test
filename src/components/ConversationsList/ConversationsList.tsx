import React, { useContext, useCallback } from "react";
import styles from "./ConversationsList.module.scss";
import { List } from "@mui/material";
import { Conversation } from "../../types/conversation";
import { ConversationService } from "../../services/conversationService";
import Empty from "../Empty/Empty";
import { LoggedUserContext } from "../../context/LoggedUserContext";
import ConversationItem from "./ConversationItem/ConversationItem";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const ConversationsList = () => {
  const loggedUserId = useContext(LoggedUserContext);

  const fetchConversations = useCallback(() => {
    return ConversationService.getConversations(loggedUserId);
  }, [loggedUserId]);

  const {
    data,
    loading,
    error,
    refetch,
  } = useFetch([fetchConversations], []);
  const [conversations] = data || [];

  if (loading) return <Loading />;

  if (error) return <Error error={error} onRefresh={refetch} />;


  return (
    <div className={styles.container}>
      {conversations?.length > 0 ? (
        <List>
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
            />
          ))}
        </List>
      ) : (
        <Empty description="No conversations found for this user." />
      )}
    </div>
  );
};

export default ConversationsList;

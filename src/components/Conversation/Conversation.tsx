import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useReducer,
} from "react";
import styles from "./Conversation.module.scss";
import { Message } from "../../types/message";
import { ConversationService } from "../../services/conversationService";
import { getUnixTimestamp } from "../../utils/getUnixTimestamp";
import { LoggedUserContext } from "../../context/LoggedUserContext";
import { MessageService } from "../../services/messageService";
import MessageInput from "./MessageInput/MessageInput";
import ConversationDetails from "./ConversationDetails/ConversationDetails";
import MessagesList from "./MessagesList/MessagesList";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import useFetch from "../../hooks/useFetch";
import { type Conversation as ConversationType } from "../../types/conversation";
import { LinearProgress } from "@mui/material";
import { conversationReducer, initialState } from "./conversationReducer";

interface ConversationProps {
  conversationId: number;
}

const Conversation = ({ conversationId }: ConversationProps) => {
  const loggedUserId = useContext(LoggedUserContext);
  const [state, dispatch] = useReducer(conversationReducer, initialState);

  const fetchConversationDetails = useCallback(() => {
    return ConversationService.getConversation(conversationId);
  }, [conversationId]);

  const fetchMessages = useCallback(() => {
    return MessageService.getMessagesByConversationId(conversationId);
  }, [conversationId]);

  const { data, loading, error, refetch } = useFetch<(ConversationType | Message)[]>([fetchConversationDetails, fetchMessages], [conversationId]);
  const [conversations, allMessages] = (data as [ConversationType[], Message[]]) || [];
  const [conversationDetails]: ConversationType[] = conversations || [];

  useEffect(() => {
    if (allMessages) dispatch({ type: "SET_MESSAGES", payload: allMessages });
  }, [allMessages]);

  const handleOnSendMessage = useCallback(async (message:string) => {
    dispatch({ type: "SENDING_IN_PROGRESS" });
    const newMessageData: Partial<Message> = {
      authorId: loggedUserId,
      conversationId,
      timestamp: getUnixTimestamp(),
      body: message,
    };

    try {
      const result = await MessageService.sendMessage(newMessageData);
      const newMessage = result.data;
      dispatch({ type: "MESSAGE_SENT", payload: newMessage });
    } catch (error) {
      console.error(error);
    }

  }, [conversationId, loggedUserId]);


  if (loading) return <Loading />;

  if (error)
    return (
      <Error error={error} onRefresh={refetch} btnText="Refresh Conversation" />
    );

  return (
    <div className={styles.container}>
      <ConversationDetails conversation={conversationDetails} />

      <MessagesList
        messages={state.messages}
        senderNickname={conversationDetails?.senderNickname}
      />

      {state.sendingInProgress && <LinearProgress />}

      <MessageInput onSendMessage={handleOnSendMessage} />
    </div>
  );
};

export default Conversation;

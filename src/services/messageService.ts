import { Message } from "../types/message";
import axiosInstance from "./axiosConfig";

// Fetch all messages
const getMessages = () => {
  return axiosInstance.get<Message[]>(`/messages`);
};

// Fetch messages for the given conversationId from  API
const getMessagesByConversationId = (conversationId: number) => {
  return axiosInstance.get<Message[]>(`/messages/${conversationId}`);
};

// Fetch message by message id from the API
const getMessage = (messageId: number) => {
  return axiosInstance.get<Message>(`/messages/${messageId}`);
};

// Send a message to the API
const sendMessage = (message: Partial<Message>) => {
  return axiosInstance.post<Message>(`/messages`, message);
};

export const MessageService = {
  getMessages,
  getMessage,
  getMessagesByConversationId,
  sendMessage,
};

import { Conversation } from "../types/conversation";
import axiosInstance from "./axiosConfig";

// Fetch all conversations for the given user id from the API
const getConversations = (id: number) => {
  return axiosInstance.get<Conversation[]>(`/conversations/${id}`);
};

// Fetch conversation by conversation id from the API
const getConversation = (conversationId: number) => {
  return axiosInstance.get<Conversation[]>(`/conversation/${conversationId}`);
};

export const ConversationService = {
  getConversations,
  getConversation,
};

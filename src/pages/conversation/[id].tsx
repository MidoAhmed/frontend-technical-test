import React from "react";
import styles from "../../styles/conversation.module.scss";
import { useRouter } from "next/router";
import Conversation from "../../components/Conversation/Conversation";

const ConversationPage = (props) => {
    console.log('props', props)
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Conversation conversationId={Number(id)} />
    </div>
  );
};

export default ConversationPage;

import { ChatBox, Layout } from "@/components";
import { ChannelContext, MessageContext, UserContext } from "@/context";
import { Channel, Message, User } from "@/types";
import { useState } from "react";

export default function App() {
  const [userId, setUserId] = useState<string>(User.Joyse);
  const [channelId, setChannelId] = useState<string>(Channel.General);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOld, setIsOld] = useState(false);

  return (
    <ChannelContext.Provider value={{ channelId, setChannelId }}>
      <UserContext.Provider value={{ userId, setUserId }}>
        <MessageContext.Provider value={{ messages, setMessages, isOld, setIsOld }}>
          <Layout>
            <ChatBox />
          </Layout>
        </MessageContext.Provider>
      </UserContext.Provider>
    </ChannelContext.Provider>
  );
}

import { ChatBox, Layout } from "@/components";
import { ChannelContext, MessageContext, UserContext } from "@/context";
import { Channel, Message, User } from "@/types";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useState } from "react";

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BASE_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default function App() {
  const [userId, setUserId] = useState<string>(User.Joyse);
  const [channelId, setChannelId] = useState<string>(Channel.General);
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <ApolloProvider client={client}>
      <ChannelContext.Provider value={{ channelId, setChannelId }}>
        <UserContext.Provider value={{ userId, setUserId }}>
          <MessageContext.Provider value={{ messages, setMessages }}>
            <Layout>
              <ChatBox />
            </Layout>
          </MessageContext.Provider>
        </UserContext.Provider>
      </ChannelContext.Provider>
    </ApolloProvider>
  );
}

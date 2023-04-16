import { ChatBox, Layout } from "@/components";
import { ChannelContext, MessageContext, UserContext } from "@/context";
import { Channel, Message, User } from "@/types";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useState } from "react";

const client = new ApolloClient({
  uri: "https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const [userId, setUserId] = useState<string>(User.Joyse);
  const [channelId, setChannelId] = useState<string>(Channel.General);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOld, setIsOld] = useState(false);

  return (
    <ApolloProvider client={client}>
      <ChannelContext.Provider value={{ channelId, setChannelId }}>
        <UserContext.Provider value={{ userId, setUserId }}>
          <MessageContext.Provider value={{ messages, setMessages, isOld, setIsOld }}>
            <Layout>
              <ChatBox />
            </Layout>
          </MessageContext.Provider>
        </UserContext.Provider>
      </ChannelContext.Provider>
    </ApolloProvider>
  );
}

import { ChatBox, Layout } from "@/components";
import { ChannelContext, UserContext } from "@/context";
import { Channel, User } from "@/types";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useState } from "react";

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BASE_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default function App() {
  const [userId, setUserId] = useState<string>(User.Joyse);
  const [channelId, setChannelId] = useState<string>(Channel.General);

  return (
    <ApolloProvider client={client}>
      <ChannelContext.Provider value={{ channelId, setChannelId }}>
        <UserContext.Provider value={{ userId, setUserId }}>
          <Layout>
            <ChatBox />
          </Layout>
        </UserContext.Provider>
      </ChannelContext.Provider>
    </ApolloProvider>
  );
}

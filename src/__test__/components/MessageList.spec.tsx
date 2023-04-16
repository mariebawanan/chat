import { MessageList } from "@/components";
import { ChannelContext, MessageContext } from "@/context";
import { MockedProvider } from "@apollo/client/testing";
import { fireEvent, render } from "@testing-library/react";
import { vi } from "vitest";
import {
  message1,
  message2,
  mockEmptyLatestMessages,
  mockFetchMoreOldMessages,
  mockLatestMessages,
  mockLatestMessagesError,
} from "../mocks";

describe("<MessageList />", () => {
  it("should render active channel", async () => {
    const list = render(
      <MockedProvider mocks={[mockLatestMessages]} addTypename={false}>
        <MessageList />
      </MockedProvider>
    );

    const channelId = await list.findByText(/General/i);
    expect(channelId).toBeInTheDocument();
  });

  it("should render message list", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[mockLatestMessages]} addTypename={false}>
        <MessageContext.Provider
          value={{
            messages: mockLatestMessages.result.data.fetchLatestMessages,
            setMessages: () => {},
            isOld: false,
            setIsOld: () => {},
          }}
        >
          <MessageList />
        </MessageContext.Provider>
      </MockedProvider>
    );

    const container = await findByTestId("messages-container");
    expect(container).toBeInTheDocument();
  });

  it("should render empty message", async () => {
    const { findByText } = render(
      <MockedProvider mocks={[mockEmptyLatestMessages]} addTypename={false}>
        <MessageList />
      </MockedProvider>
    );

    const emptyMessage = await findByText(/No messages in General/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  it("should render error fetching messages", async () => {
    const { findByText } = render(
      <MockedProvider mocks={[mockLatestMessagesError]} addTypename={false}>
        <MessageList />
      </MockedProvider>
    );

    const emptyMessage = await findByText(/Error/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  it("should fetch older messages", async () => {
    const setMessages = vi.fn();
    const { findByText } = render(
      <MockedProvider
        mocks={[mockLatestMessages, mockFetchMoreOldMessages]}
        addTypename={false}
      >
        <ChannelContext.Provider value={{ channelId: "General", setChannelId: () => {} }}>
          <MessageContext.Provider
            value={{
              messages: [message2, message1],
              setMessages,
              isOld: false,
              setIsOld: () => {},
            }}
          >
            <MessageList />
          </MessageContext.Provider>
        </ChannelContext.Provider>
      </MockedProvider>
    );

    const readOlderMessages = await findByText(/Read older messages/i);
    expect(readOlderMessages).toBeInTheDocument();

    fireEvent.click(readOlderMessages);
    expect(setMessages).toHaveBeenCalled();
  });
});

import { Message } from "@/components";
import { UserContext } from "@/context";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { message1, messageError, messagePostError, mockLatestMessages } from "../mocks";

describe("<Message />", () => {
  it("should render own message", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[mockLatestMessages]} addTypename={false}>
        <UserContext.Provider value={{ userId: "user-id-1", setUserId: () => {} }}>
          <Message message={message1} />
        </UserContext.Provider>
      </MockedProvider>
    );

    const ownContainer = await findByTestId("own-message");
    expect(ownContainer).toBeInTheDocument();

    const userName = screen.getByText(/user-id-1/i);
    expect(userName).toBeInTheDocument();
  });

  it("should render other's message", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[mockLatestMessages]} addTypename={false}>
        <UserContext.Provider value={{ userId: "user-id-2", setUserId: () => {} }}>
          <Message message={message1} />
        </UserContext.Provider>
      </MockedProvider>
    );

    const ownContainer = await findByTestId("other-message");
    expect(ownContainer).toBeInTheDocument();

    const userName = screen.getByText(/user-id-1/i);
    expect(userName).toBeInTheDocument();
  });

  it("should render a failed message if owner is current user", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[messagePostError]} addTypename={false}>
        <UserContext.Provider
          value={{ userId: messageError.userId, setUserId: () => {} }}
        >
          <Message message={messageError} />
        </UserContext.Provider>
      </MockedProvider>
    );

    const failedContainer = await findByTestId("message-failed");
    expect(failedContainer).toBeInTheDocument();
  });

  it("should NOT render a failed message if owner is NOT current user", async () => {
    render(
      <MockedProvider mocks={[messagePostError]} addTypename={false}>
        <UserContext.Provider value={{ userId: "user-id-2", setUserId: () => {} }}>
          <Message message={messageError} />
        </UserContext.Provider>
      </MockedProvider>
    );

    const userName = screen.queryByTestId("user-id-2");
    expect(userName).toBeNull();
  });
});

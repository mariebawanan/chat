import { MessageInput } from "@/components";
import { MockedProvider } from "@apollo/client/testing";
import { fireEvent, render } from "@testing-library/react";
import { mockLatestMessages } from "../mocks/latestMessages.mock";
import { messagePost } from "../mocks/messagePost.mock";

describe("<MessageInput />", () => {
  it("should render successfully", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[mockLatestMessages]} addTypename={false}>
        <MessageInput />
      </MockedProvider>
    );

    const input = await findByTestId("message-input");
    expect(input).toBeInTheDocument();

    const button = await findByTestId("send-button");
    expect(button).toBeInTheDocument();
  });

  it("should send valid messages", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[messagePost]} addTypename={false}>
        <MessageInput />
      </MockedProvider>
    );
    const input = await findByTestId("message-input");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Hello!" } });
    expect(input).toHaveValue("Hello!");

    // Send the message
    const button = await findByTestId("send-button");
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });

  it("validates empty messages", async () => {
    const { findByTestId, getByTestId } = render(
      <MockedProvider mocks={[mockLatestMessages]} addTypename={false}>
        <MessageInput />
      </MockedProvider>
    );
    const input = await findByTestId("message-input");
    expect(input).toBeInTheDocument();

    // Empty value
    fireEvent.change(input, { target: { value: "" } });
    expect(input).toHaveValue("");

    // Send the message
    const button = await findByTestId("send-button");
    fireEvent.click(button);

    // Error message should appear
    const error = getByTestId("error-message");
    expect(error).toHaveTextContent(/Please enter a message./i);
  });
});

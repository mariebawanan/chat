import { ChatBox } from "@/components";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { mockLatestMessages } from "../mocks/latestMessages.mock";

describe("<ChatBox />", () => {
  it("should render successfully", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[mockLatestMessages]} addTypename={false}>
        <ChatBox />
      </MockedProvider>
    );

    const container = await findByTestId("chatbox-container");
    expect(container).toBeInTheDocument();
  });
});

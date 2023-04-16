import App from "@/App";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { mockLatestMessages } from "../mocks/latestMessages.mock";

describe("App", () => {
  it("should render successfully", async () => {
    render(
      <MockedProvider mocks={[mockLatestMessages]} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const siteTitle = screen.getByText(/1-Day Chat App/i);
    expect(siteTitle).toBeInTheDocument();
  });
});

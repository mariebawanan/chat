import { ChannelList } from "@/components";
import { ChannelContext } from "@/context";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<ChannelList />", () => {
  it("renders section", async () => {
    render(<ChannelList />);
    expect(screen.getByText(/Channels/i)).toBeInTheDocument();
  });

  it("renders options and defaults to first channel", async () => {
    const { findByTestId } = render(<ChannelList />);
    const options = await findByTestId("channel-options");
    expect(options).toBeInTheDocument();
    expect(options).toHaveTextContent(/General/i);
  });

  it("changes channel on click", async () => {
    render(
      <ChannelContext.Provider
        value={{ channelId: "Technology", setChannelId: () => {} }}
      >
        <ChannelList />
      </ChannelContext.Provider>
    );
    const option = screen.getByText(/Technology/i);
    fireEvent.click(option);
    expect(option).toHaveClass("active");
  });
});

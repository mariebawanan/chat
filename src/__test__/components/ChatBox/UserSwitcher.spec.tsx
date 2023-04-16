import { UserSwitcher } from "@/components";
import { userList } from "@/components/Sidebar/UserSwitcher";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<UserSwitcher />", () => {
  it("renders section", async () => {
    render(<UserSwitcher />);
    expect(screen.getByText(/Your User/i)).toBeInTheDocument();
  });

  it("renders user dropdown", async () => {
    render(<UserSwitcher />);
    const userSelect = document.querySelector("select");
    expect(userSelect).toBeInTheDocument();
  });

  it("renders first user as default", async () => {
    const switcher = render(<UserSwitcher />);
    const select = await switcher.findByTestId("user-switcher");
    expect(select).toHaveValue(userList[0].label);
  });

  it("changes user on change", async () => {
    const switcher = render(<UserSwitcher />);
    const select = await switcher.findByTestId("user-switcher");

    // Select next user
    const nextUser = screen.getByText(userList[1].label);
    fireEvent.click(select);
    expect(nextUser).toBeVisible();

    fireEvent.click(select, { target: { value: userList[1].label } });
    expect(select).toHaveValue(userList[1].label);
  });
});

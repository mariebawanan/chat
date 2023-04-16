import { Dropdown } from "@/components";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

const mockOptions = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
];

describe("Dropdown", () => {
  it("should trigger on change", async () => {
    const onChange = vi.fn();
    const { findByTestId } = render(
      <Dropdown
        title="dropdown-test"
        options={mockOptions}
        value={mockOptions[0].value}
        onChange={onChange}
      />
    );

    const dropdown = await findByTestId("dropdown-test");
    fireEvent.click(dropdown);

    const nextOption = screen.getByText(mockOptions[1].label);
    expect(nextOption).toBeVisible();

    fireEvent.change(dropdown, { target: { value: "option-2" } });
    expect(onChange).toHaveBeenCalled();
  });
});

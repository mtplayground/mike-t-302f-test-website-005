import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders as a link when href is provided", () => {
    render(
      <Button aria-label="Open waitlist" href="https://example.com/waitlist">
        Join
      </Button>,
    );

    expect(screen.getByRole("link", { name: "Open waitlist" })).toHaveAttribute(
      "href",
      "https://example.com/waitlist",
    );
  });

  it("renders as a button and handles clicks without submitting by default", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Save</Button>);

    const button = screen.getByRole("button", { name: "Save" });

    expect(button).toHaveAttribute("type", "button");

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

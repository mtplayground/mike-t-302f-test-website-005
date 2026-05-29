import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AccordionItem } from "./AccordionItem";

describe("AccordionItem", () => {
  it("connects the trigger and panel with accessible state", () => {
    render(
      <AccordionItem defaultOpen id="ownership" title="Who owns the code?">
        You own the repository and code history.
      </AccordionItem>,
    );

    const trigger = screen.getByRole("button", { name: "Who owns the code?" });
    const panel = screen.getByText("You own the repository and code history.");

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(trigger).toHaveAttribute("aria-controls", "ownership-panel");
    expect(panel).toHaveAttribute("id", "ownership-panel");
    expect(panel).toHaveAttribute("aria-labelledby", "ownership-button");
    expect(panel).toBeVisible();
  });

  it("toggles uncontrolled content and reports state changes", async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();

    render(
      <AccordionItem onOpenChange={handleOpenChange} title="How is security handled?">
        Environment variables keep secrets out of source code.
      </AccordionItem>,
    );

    const trigger = screen.getByRole("button", {
      name: "How is security handled?",
    });
    const panel = screen.getByText(
      "Environment variables keep secrets out of source code.",
    );

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(panel).not.toBeVisible();

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(panel).toBeVisible();
    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });
});

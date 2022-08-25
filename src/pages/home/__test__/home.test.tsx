import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("home", () => {
  test("should render the form", async () => {
    render(<Home />);
    const form = screen.getByTestId("homeForm");
    expect(form).toBeTruthy();
  });

  test("button should be disabled in the beginning", async () => {
    render(<Home />);
    const infoLabel = screen.getByTestId("submitBut");
    expect(infoLabel).toBeDisabled();
  });
});

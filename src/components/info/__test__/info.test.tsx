import { render, screen } from "@testing-library/react";
import Info from "../Info";

describe("info", () => {
  const testData = {
    label: "testLabel",
    value: "testValue",
  };

  test("info has the correct label", async () => {
    render(<Info label={testData.label} value={testData.value} />);
    const infoLabel = screen.getByTestId("infoLabel");
    expect(infoLabel.textContent).toBe(testData.label);
  });

  test("info has the correct value", async () => {
    render(<Info label={testData.label} value={testData.value} />);
    const infoVal = screen.getByTestId("infoValue");
    expect(infoVal.textContent).toBe(testData.value);
  });
});

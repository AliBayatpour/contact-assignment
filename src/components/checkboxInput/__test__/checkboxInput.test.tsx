import { render, screen } from "@testing-library/react";
import CheckboxInput from "../CheckboxInput";

describe("checkbox", () => {
  test("renders input label", () => {
    const onChangeCheckMock = jest.fn();
    const testData = {
      label: "testLabel",
    };

    render(
      <CheckboxInput
        name="newsLetter"
        label={testData.label}
        onChange={onChangeCheckMock}
        checked={true}
      />
    );
    const checkLabel = screen.getByTestId("checkLabel");
    expect(checkLabel.textContent).toBe(testData.label);
  });
  test("checkbox value is checked", async () => {
    const onChangeCheckMock = jest.fn();
    const testData = {
      label: "testLabel",
      name: "testName",
    };

    render(
      <CheckboxInput
        name="testName"
        label={testData.label}
        onChange={onChangeCheckMock}
        checked={true}
      />
    );
    const checkLabel = screen.getByRole("checkbox");

    expect(checkLabel).toBeChecked();
  });
  test("checkbox value is not checked", () => {
    const onChangeCheckMock = jest.fn();
    const testData = {
      label: "testLabel",
      name: "testName",
    };

    render(
      <CheckboxInput
        name="testName"
        label={testData.label}
        onChange={onChangeCheckMock}
        checked={false}
      />
    );
    const checkLabel = screen.getByRole("checkbox");

    expect(checkLabel).not.toBeChecked();
  });

  test("checkbox has the correct name attribute", () => {
    const onChangeCheckMock = jest.fn();
    const testData = {
      label: "testLabel",
      name: "testName",
    };

    render(
      <CheckboxInput
        name="testName"
        label={testData.label}
        onChange={onChangeCheckMock}
        checked={false}
      />
    );
    const checkLabel = screen.getByRole("checkbox");

    expect(checkLabel).toHaveAttribute("name", "testName");
  });
});

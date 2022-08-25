import { render, screen } from "@testing-library/react";
import FormInput from "../FormInput";

describe("form input", () => {
  test("form input value is correct", async () => {
    const onChangeCheckMock = jest.fn();
    const testData = {
      name: "testName",
      value: "testVal",
      placeholder: "testPlaceholder",
      type: "text",
    };

    render(
      <FormInput
        name={testData.name}
        type={testData.type}
        onChange={onChangeCheckMock}
        value={testData.value}
        placeholder={testData.placeholder}
      />
    );
    const inputField = screen.getByRole("textbox");

    expect(inputField).toHaveValue(testData.value);
  });
  test("input is required when required attribute is provided", () => {
    const onChangeCheckMock = jest.fn();
    const testData = {
      name: "testName",
      value: "testVal",
      placeholder: "testPlaceholder",
      type: "text",
    };

    render(
      <FormInput
        name={testData.name}
        type={testData.type}
        onChange={onChangeCheckMock}
        value={testData.value}
        placeholder={testData.placeholder}
        required
      />
    );
    const inputField = screen.getByRole("textbox");

    expect(inputField).toBeRequired();
  });
  test("input is not required when required attribute not provided", () => {
    const onChangeCheckMock = jest.fn();
    const testData = {
      name: "testName",
      value: "testVal",
      placeholder: "testPlaceholder",
      type: "text",
    };

    render(
      <FormInput
        name={testData.name}
        type={testData.type}
        onChange={onChangeCheckMock}
        value={testData.value}
        placeholder={testData.placeholder}
      />
    );
    const inputField = screen.getByRole("textbox");

    expect(inputField).not.toBeRequired();
  });
  test("input has correct name attribute", () => {
    const onChangeCheckMock = jest.fn();
    const testData = {
      name: "testName",
      value: "testVal",
      placeholder: "testPlaceholder",
      type: "text",
    };

    render(
      <FormInput
        name={testData.name}
        type={testData.type}
        onChange={onChangeCheckMock}
        value={testData.value}
        placeholder={testData.placeholder}
      />
    );
    const inputField = screen.getByRole("textbox");

    expect(inputField).toHaveAttribute("name", testData.name);
  });
});

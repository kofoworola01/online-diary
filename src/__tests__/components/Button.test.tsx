/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "../../utils/test-utils";
import Button from "components/Button";

describe("Button", () => {
  const buttonProp = {
    text: "click me",
    bgColor: "red",
    onClick: jest.fn(),
  };
  const renderComponent = () => render(<Button {...buttonProp} />);

  it("should render Button", () => {
    const { getByTestId } = renderComponent();
    const button = getByTestId("btn");
    expect(button).toBeInTheDocument();
  });

  it("should have text click me", () => {
    const { getByTestId } = renderComponent();
    const button = getByTestId("btn");
    expect(button).toHaveTextContent(buttonProp.text);
  });

  it("should call onClick when clicked", () => {
    const { getByTestId } = renderComponent();
    const button = getByTestId("btn");

    fireEvent.click(button);
    expect(buttonProp.onClick).toHaveBeenCalled();
  });
});

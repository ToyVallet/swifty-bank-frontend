import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CheckBox from "./index";
import { CheckBoxProp } from "@swifty/hooks";

afterAll(() => {
  jest.resetAllMocks();
});
describe("CheckBox", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("prop으로 전달한 labelContent에 따라 label이 결정된다", () => {
    const prop: CheckBoxProp = {
      isCheck: false,
      labelContent: "label",
      isDetail: false,
      detailInfoType: "service",
      optional: true,
    };
    render(<CheckBox id="1" {...prop} />);
    expect(screen.getByText("label")).toBeInTheDocument();
  });

  it("isCheck prop이 true로 전달된 경우 CheckIcon의 색상이 변경된다", async () => {
    const prop: CheckBoxProp = {
      isCheck: true,
      labelContent: "label",
      isDetail: false,
      detailInfoType: "service",
      optional: true,
    };
    render(<CheckBox id="1" {...prop} />);

    const checkIcon = screen.getByTestId("check-icon");
    // SVG 내부의 path 요소를 선택하고 그 속성을 확인
    const path = checkIcon.querySelector("path");
    expect(path).toHaveAttribute("stroke", "#6552FE");
  });

  it("isDetail prop이 true로 전달된 경우 RightIcon이 렌더링 된다", () => {
    const prop: CheckBoxProp = {
      isCheck: false,
      labelContent: "label",
      isDetail: true,
      detailInfoType: "service",
      optional: true,
    };
    render(<CheckBox id="1" {...prop} />);

    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("isDetail prop이 true로 전달된 경우 RightIcon을 클릭하면 detail 페이지가 열린다", async () => {
    const user = userEvent.setup();
    const prop: CheckBoxProp = {
      isCheck: false,
      labelContent: "label",
      isDetail: true,
      detailInfoType: "personalInfo",
      optional: true,
    };
    render(<CheckBox id="1" {...prop} />);

    await user.click(screen.getByTestId("right-icon"));
    expect(
      screen.getByText("[필수] 개인정보 처리방침 동의"),
    ).toBeInTheDocument();
  });

  it("isDetail prop이 true로 전달된 경우 RightIcon을 클릭후 detail 페이지가 열린후 x를 클릭하면 detail 페이지가 닫힌다", async () => {
    const user = userEvent.setup();
    const prop: CheckBoxProp = {
      isCheck: false,
      labelContent: "label",
      isDetail: true,
      detailInfoType: "personalInfo",
      optional: true,
    };
    render(<CheckBox id="1" {...prop} />);

    await user.click(screen.getByTestId("right-icon"));
    await user.click(screen.getByRole("button"));
    expect(
      screen.queryByText("[필수] 개인정보 처리방침 동의"),
    ).not.toBeInTheDocument();
  });
});

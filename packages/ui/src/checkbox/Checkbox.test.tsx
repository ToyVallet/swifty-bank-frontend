import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckBox from "./index";
import { CheckBoxProp } from "./type";

describe("CheckBox", () => {
  it("prop으로 전달한 labelContent에 따라 label이 결정된다.", () => {
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
});

import { act, renderHook } from "@testing-library/react";

import "@testing-library/jest-dom";
import useCheckBox from "./useCheckBox";

describe("useCheckBox test", () => {
  it("index 값에 따라 handleChange함수에 index와 해당 인덱스의 isCheck을 인자로 전달하면 isCheck 값이 변경된다", () => {
    const { result } = renderHook(() =>
      useCheckBox([
        {
          labelContent: "[필수] 서비스 이용약과 동의",
          isCheck: false,
          optional: false,
          isDetail: true,
          detailInfoType: "service",
        },
        {
          labelContent: "[필수] 개인정보 처리방침 동의",
          isCheck: false,
          optional: false,
          isDetail: true,
          detailInfoType: "personalInfo",
        },
        {
          labelContent: "[선택] 프로모션 등 안내 동의",
          isCheck: false,
          optional: true,
          isDetail: true,
          detailInfoType: "promotion",
        },
      ]),
    );
    act(() => result.current.handleChange(result.current.terms[0]!.isCheck, 0));

    expect(result.current.terms[0]?.isCheck).toBe(true);
  });
});

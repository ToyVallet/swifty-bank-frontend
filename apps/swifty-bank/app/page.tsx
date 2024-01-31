"use client";

import { container } from "./page.css";
import { Input, Heading, Button } from "@swifty/ui";

export default function Page() {
  return (
    <main className={container}>
      <Input label="성명">
        <Input.Text placeholder="이름을 입력하세요." />
      </Input>

      <Heading>회원정보를 입력해주세요.</Heading>
      <Heading type="h2">회원정보를 입력해주세요.</Heading>
      <Heading type="h3">회원정보를 입력해주세요.</Heading>

      <Button variant="active" handleClick={() => {}}>
        다음
      </Button>
      <Button variant="disabled" handleClick={() => {}}>
        다음
      </Button>
    </main>
  );
}

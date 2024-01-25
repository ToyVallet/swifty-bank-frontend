'use client';

import { container } from './page.css';
import { Input } from '@swifty/ui';

export default function Page() {
  return (
    <main className={container}>
      <Input label='테스트' bottomText='asd' required>
        <Input.Text placeholder='이름을 입력하세요.' />
      </Input>
    </main>
  );
}

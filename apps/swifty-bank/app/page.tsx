'use client';

import { container } from './page.css';
import { Input, Heading, ConfirmButton } from '@swifty/ui';

export default function Page() {
  return (
    <main className={container}>
      <Input label='테스트' bottomText='asd' required>
        <Input.Text placeholder='이름을 입력하세요.' />
      </Input>

      <Heading>회원정보를 입력해주세요.</Heading> 
      <Heading type='h2'>회원정보를 입력해주세요.</Heading> 
      <Heading type='h3'>회원정보를 입력해주세요.</Heading>

      <ConfirmButton
        isDisabled={false}
        type='button'
        handleClick={()=>{}}>
          다음
      </ConfirmButton>
      <ConfirmButton
        isDisabled={true}
        type='button'
        handleClick={()=>{}}>
          다음
      </ConfirmButton>
    </main>
  );
}

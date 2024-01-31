"use client";

import { container } from './page.css';
import { Input, Heading } from '@swifty/ui';

export default function Page() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(() => e.target.value);
  };

  const handleClick = () => {
    console.log(selectedOption);
  };

  return (
    <main className={container}>
      <Input label="성명">
        <Input.Text placeholder="이름을 입력하세요." />
      </Input>

      <Heading>회원정보를 입력해주세요.</Heading> 
      <Heading type='h2'>회원정보를 입력해주세요.</Heading> 
      <Heading type='h3'>회원정보를 입력해주세요.</Heading> 
    </main>
  );
}

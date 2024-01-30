'use client';

import { ChangeEvent, useState } from 'react';
import { container, selectTag } from './page.css';
import { Input, Heading, Select } from '@swifty/ui';

const options = [
  { value: "SKT", label: "SKT" },
  { value: "KT", label: "KT" },
  { value: "LG U+", label: "LG U+" },
  { value: "SKT 알뜰폰", label: "SKT 알뜰폰" },
  { value: "KT 알뜰폰", label: "KT 알뜰폰" },
  { value: "LG U+ 알뜰폰", label: "LG U+ 알뜰폰" },
];

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
      {/* <Input label='테스트' bottomText='asd' required>
        <Input.Text placeholder='이름을 입력하세요.' />
      </Input> */}

      <Select
        label={"통신사"} 
        options={options}
        className={selectTag}
        value={selectedOption}
        placeholder={'통신사 선택'}
        onChange={handleChange}
      />
      <button onClick={handleClick}>select 태그 test</button>

      <Heading>회원정보를 입력해주세요.</Heading> 
      <Heading type='h2'>회원정보를 입력해주세요.</Heading> 
      <Heading type='h3'>회원정보를 입력해주세요.</Heading> 

    </main>
  );
}

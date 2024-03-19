import CancelButton from "@/_component/CancelButton";
import Template from "@/_component/Template";
import SelectMultipleExchange from "@/account/[bank]/foreign-exchange/_component/SelectMultipleExchange";
import { ParamsProps } from "@/account/[bank]/page";

export default async function ForeignExchangePage({
  params: { bank },
}: ParamsProps) {
  // 외환 정보 받아오기
  console.log(bank);
  return (
    <Template>
      <CancelButton />
      <Template.Header main="1개 이상의 외환을 선택하세요" />
      <SelectMultipleExchange />
    </Template>
  );
}

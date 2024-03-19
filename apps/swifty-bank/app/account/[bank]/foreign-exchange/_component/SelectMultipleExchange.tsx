"use client";

import Button from "@/_component/Button";
import styles from "@/account/[bank]/foreign-exchange/_component/selectMultipleExchange.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormData {
  selectedItems: string[];
}

export default function SelectMultipleExchange() {
  const { control, handleSubmit, setValue, getValues } = useForm<FormData>({
    defaultValues: {
      selectedItems: ["한국 원화", "일본 엔화", "중국 위안화", "미국 달러화"],
    },
  });

  const router = useRouter();
  // 이후 get 데이터로 교체
  const allExchange = [
    "한국 원화",
    "일본 엔화",
    "중국 위안화",
    "미국 달러화",
    "유럽 유로화",
    "영국 파운드화",
    "캐나다 달러화",
    "호주 달러화",
    "태국 밧화",
    "멕시코 페소화",
  ];

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data.selectedItems);
    router.push("/user-password?to=account-password");
  };

  const handleSelectItem = (item: string) => {
    const selectedItems = getValues("selectedItems");
    if (selectedItems.includes(item)) {
      setValue(
        "selectedItems",
        selectedItems.filter((exchange) => exchange !== item),
        { shouldValidate: true },
      );
    } else {
      setValue("selectedItems", [...selectedItems, item], {
        shouldValidate: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Controller
        control={control}
        name="selectedItems"
        render={({ field: { value } }) => (
          <>
            {allExchange.map((exchange) => (
              <button
                type="button"
                key={exchange}
                onClick={() => handleSelectItem(exchange)}
                className={
                  value.includes(exchange)
                    ? styles.selectButton
                    : styles.unSelectButton
                }
              >
                {exchange}
              </button>
            ))}
          </>
        )}
      />
      <Button type="submit" position="fixed">
        다음
      </Button>
    </form>
  );
}

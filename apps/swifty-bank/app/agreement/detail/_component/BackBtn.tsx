"use client";

import Image from "next/image";
import { btn } from "./BackBtn.css";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  const handleBtn = () => {
    router.replace("/agreement");
  };
  return (
    <button className={btn} onClick={handleBtn}>
      <Image
        src={"/img/agreement/Icon_Cancellation.svg"}
        alt="Icon_Cancellation"
        width={30}
        height={30}
      />
    </button>
  );
}

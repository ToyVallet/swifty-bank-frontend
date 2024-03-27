"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { path } from "@/_constant/path";

type Props = {
  pageTransitionTime: number;
};

export default function PageSwitching({ pageTransitionTime }: Props) {
  const router = useRouter();
  useEffect(() => {
    const id = window.setTimeout(() => {
      router.push(path.main);
    }, pageTransitionTime);

    return () => {
      clearTimeout(id);
    };
  }, []);
  return <></>;
}

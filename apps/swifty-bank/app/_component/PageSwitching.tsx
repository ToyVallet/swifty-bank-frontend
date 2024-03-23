"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  path: string;
  pageTransitionTime?: number;
};

export default function PageSwitching({
  pageTransitionTime = 1000,
  path,
}: Props) {
  const router = useRouter();
  useEffect(() => {
    const id = window.setTimeout(() => {
      router.push(path);
    }, pageTransitionTime);

    return () => {
      clearTimeout(id);
    };
  }, []);
  return <></>;
}

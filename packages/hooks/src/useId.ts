"use client";

import { useId as useID, useState } from "react";

export function generateId(prefix = "swifty-id-") {
  const uniqueId = useID();

  return `${prefix}${uniqueId}`;
}

export default function useId(prefix?: string) {
  return generateId(prefix);
}

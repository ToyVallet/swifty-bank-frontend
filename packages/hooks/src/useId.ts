'use client';

import { useState, useId as useID } from 'react';

export function generateId(prefix = 'swifty-id-') {
  const uniqueId = useID();
  return `${prefix}${uniqueId}`;
}

export default function useId(prefix?: string) {
  const [id] = useState(() => generateId(prefix));

  return id;
}

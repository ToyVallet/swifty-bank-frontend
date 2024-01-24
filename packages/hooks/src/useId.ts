'use client';

import { useState } from 'react';

let idCounter = 0;

export function generateId(prefix = 'swifty-id-') {
  idCounter = idCounter + 1;
  return `${prefix}${idCounter}`;
}

export default function useId(prefix?: string) {
  const [id] = useState(() => generateId(prefix));

  return id;
}

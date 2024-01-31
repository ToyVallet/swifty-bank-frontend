import { ReactNode } from "react";

interface BottomSheetProps {
  open: boolean;
  children?: ReactNode;
}

export default function BottomSheet({ open, children }: BottomSheetProps) {
  return open ? <div>{children}</div> : null;
}

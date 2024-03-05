import { Variants } from "framer-motion";

export const toastVariants: Variants = {
  initial: { y: 10, opacity: 0, scale: 0.2 },
  animate: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { y: 10, opacity: 0, scale: 0.2 },
};

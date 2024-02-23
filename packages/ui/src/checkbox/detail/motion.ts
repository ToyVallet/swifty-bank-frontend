import { Variants } from "framer-motion";

interface VariantsObject {
  [key: string]: Variants;
  container: Variants;
  content: Variants;
}

export const variants: VariantsObject = {
  container: {
    initial: { opacity: 0, y: 1000 },
    open: { opacity: 1, y: 0 },
  },
  content: {
    initial: { opacity: 0 },
    open: { opacity: 1 },
  },
};

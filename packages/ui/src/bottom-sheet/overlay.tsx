import { motion } from "framer-motion";

import styles from "./bottom-sheet.css";

type Props = {
  onClick: () => void;
  darker?: boolean;
};

export default function Overlay({ onClick, darker }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    darker: {
      opacity: 1,
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
  };
  return (
    <motion.div
      className={styles.overlay}
      variants={variants}
      initial="hidden"
      animate={darker ? "darker" : "visible"}
      exit="hidden"
      onClick={onClick}
    />
  );
}

import clsx from "clsx";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

import styles from "./bottom-sheet.css";

function Overlay({ onClick }: { onClick: () => void }) {
  const variants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  return (
    <motion.div
      className={styles.overlay}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClick}
    />
  );
}

interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onDismiss?: () => void;
}

export default function BottomSheet({
  open,
  children,
  className,
  onDismiss,
}: BottomSheetProps) {
  const transition = {
    type: "spring",
    damping: 35,
    stiffness: 300,
  };
  const variants = {
    hidden: {
      translateY: "150%",
      transition,
    },
    visible: {
      translateY: 0,
      transition,
    },
  };

  const handlePan = (_: PointerEvent, info: PanInfo) => {
    if (info.offset.y > 5) onDismiss?.();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className={styles.wrapper}>
          <motion.div
            drag
            dragConstraints={{
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            className={clsx(styles.container, className)}
          >
            <motion.div className={styles.handleContainer} onPan={handlePan}>
              <motion.div className={styles.handle} />
            </motion.div>
            <motion.div>{children}</motion.div>
          </motion.div>
          <Overlay onClick={() => onDismiss?.()} />
        </div>
      )}
    </AnimatePresence>
  );
}

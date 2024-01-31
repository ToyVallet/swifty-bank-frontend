import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { forwardRef, HTMLAttributes, ReactNode, useState } from "react";

import styles from "./bottom-sheet.css";

interface BottomSheetProps {
  open: boolean;
  onDismiss?: () => void;
  children?: ReactNode;
}

function Overlay({
  onClick,
}: Omit<HTMLAttributes<HTMLDivElement>, "className">) {
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

export default forwardRef<HTMLDivElement, BottomSheetProps>(
  function BottomSheet({ open, children, onDismiss }, ref) {
    const [snapHeight, setSnapHeight] = useState<25 | 50 | 75 | 100>(25);
    const transition = {
      type: "spring",
      damping: 35,
      stiffness: 300,
    };
    const variants = {
      hidden: {
        y: "300%",
        transition,
      },
      visible: {
        y: 0,
        transition,
      },
    };

    const onPan = (e: PointerEvent, info: PanInfo) => {
      if (info.offset.y > 10) {
        setSnapHeight(25);
        onDismiss?.();
      } else if (info.offset.y < -10) {
        setSnapHeight(100);
      }
    };

    return (
      <AnimatePresence>
        {open && (
          <div className={styles.wrapper}>
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                bottom: 50,
                left: 0,
                right: 0,
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              // dragElastic={0.05}
              onPan={onPan}
              // dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
              className={styles.container({
                snapTo: snapHeight,
              })}
            >
              <motion.div className={styles.handleContainer}>
                <motion.div className={styles.handle} />
              </motion.div>
              <motion.div>{children}</motion.div>
            </motion.div>
            <Overlay onClick={() => onDismiss?.()} />
          </div>
        )}
      </AnimatePresence>
    );
  },
);

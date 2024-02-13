import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useDragControls,
} from "framer-motion";
import { PointerEvent, useEffect, useState } from "react";

import styles from "./bottom-sheet.css";
import { transition, variants } from "./motion";
import Overlay from "./overlay";
import { Height } from "./types";

interface BottomSheetProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  open: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
  header?: React.ReactNode | string;
  height?: Height;
  expandTo?: Height;
}

export default function BottomSheet({
  open,
  children,
  className,
  header,
  height = "auto",
  expandTo,
  onDismiss,
}: BottomSheetProps) {
  const controls = useDragControls();
  const [dragging, setDragging] = useState(false);
  const [touching, setTouching] = useState(false);
  const [currentHeight, setCurrentHeight] = useState<Height>(height);

  const startDrag = (e: PointerEvent<HTMLDivElement>) => {
    controls.start(e);
    setDragging(true);
  };

  const handleDragend = (_: Event, info: PanInfo) => {
    if (info.offset.y > 5) onDismiss();
    else if (info.offset.y < -5 && expandTo) {
      if (height !== "auto" && expandTo) setCurrentHeight(expandTo);
    }
    setDragging(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useEffect(() => {
    if (dragging) {
      document.body.addEventListener("touchmove", (e) => e.preventDefault(), {
        passive: false,
      });
    } else {
      document.body.removeEventListener("touchmove", (e) => e.preventDefault());
    }
  }, [dragging]);

  useEffect(() => {
    if (!open) setCurrentHeight(height);
  }, [open, height]);

  return (
    <AnimatePresence>
      {open && (
        <div className={styles.wrapper}>
          <motion.div
            drag
            dragConstraints={{
              top: 0,
              bottom: 99999,
              left: 0,
              right: 0,
            }}
            dragElastic={0.1}
            dragControls={controls}
            dragListener={false}
            onDragEnd={handleDragend}
            initial="hidden"
            animate={touching ? "smaller" : "visible"}
            exit="hidden"
            variants={variants.container}
            transition={transition.container}
            className={clsx(styles.container, className)}
          >
            <div
              onPointerDown={startDrag}
              onTouchStart={() => setTouching(true)}
              onTouchEnd={() => setTouching(false)}
              className={styles.draggable}
            >
              <motion.div className={styles.handle} />
              {!!header && (
                <motion.h2
                  initial="initial"
                  animate="animate"
                  variants={variants.content}
                  transition={transition.content}
                  className={styles.header}
                >
                  {header}
                </motion.h2>
              )}
            </div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={variants.content}
              transition={transition.content}
              className={styles.content({
                height: currentHeight,
                expandable: height !== "auto" && expandTo !== undefined,
              })}
            >
              {children}
            </motion.div>
          </motion.div>
          <Overlay onClick={onDismiss} darker={dragging} />
        </div>
      )}
    </AnimatePresence>
  );
}

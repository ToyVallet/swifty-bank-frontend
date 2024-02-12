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

interface BottomSheetProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  open: boolean;
  onDismiss: () => void;
  header?: React.ReactNode | string;
  children: React.ReactNode;
  snapPoints?: number[];
  snapTo?: ({ maxHeight }: { maxHeight: number }) => number;
  initialSnap?: number;
  snapThreshold?: number;
}

export default function BottomSheet({
  open,
  children,
  className,
  header,
  snapPoints,
  initialSnap,
  snapThreshold,
  onDismiss,
  snapTo,
}: BottomSheetProps) {
  const controls = useDragControls();
  const [dragging, setDragging] = useState(false);
  const [touching, setTouching] = useState(false);

  const startDrag = (e: PointerEvent<HTMLDivElement>) => {
    controls.start(e);
    setDragging(true);
  };

  const handleDragend = (_: Event, info: PanInfo) => {
    if (info.offset.y > 5) onDismiss();
    setDragging(false);
  };

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    if (!html) return;

    if (open) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
  }, [open]);

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
              className={styles.content}
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

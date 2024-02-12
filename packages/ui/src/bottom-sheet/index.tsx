import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useDragControls,
} from "framer-motion";
import { PointerEvent, useEffect, useState } from "react";

import Heading from "../heading";
import styles from "./bottom-sheet.css";

function Overlay({
  onClick,
  darker,
}: {
  onClick: () => void;
  darker?: boolean;
}) {
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

  const transition = {
    type: "spring",
    damping: 35,
    stiffness: 300,
  };
  const variants = {
    hidden: {
      scale: 0.9,
      translateY: "150%",
      transition,
    },
    visible: {
      scale: 1,
      translateY: 0,
      transition,
    },
    smaller: {
      scale: 0.98,
      translateY: 0,
      transition,
    },
  };

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
            dragConstraints={{
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
            dragElastic={{
              top: 0.1,
              bottom: 0.1,
              left: 0.1,
              right: 0.1,
            }}
            dragControls={controls}
            drag
            dragListener={false}
            onDragEnd={handleDragend}
            initial="hidden"
            animate={touching ? "smaller" : "visible"}
            exit="hidden"
            variants={variants}
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
                <Heading type="h2" className={styles.header}>
                  {header}
                </Heading>
              )}
            </div>
            <motion.div className={styles.content} drag={false}>
              {children}
            </motion.div>
          </motion.div>
          <Overlay onClick={onDismiss} darker={dragging} />
        </div>
      )}
    </AnimatePresence>
  );
}

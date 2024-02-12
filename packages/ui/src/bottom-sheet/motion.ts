export const transition = {
  container: {
    type: "tween",
    duration: 0.2,
  },
  content: {
    type: "tween",
    duration: 0.2,
    delay: 0.1,
  },
};

export const variants = {
  container: {
    hidden: {
      scale: 1,
      translateY: "100%",
      opacity: 0,
    },
    visible: {
      scale: 1,
      translateY: 0,
      opacity: 1,
    },
    smaller: {
      scale: 0.98,
      translateY: 0,
      opacity: 1,
    },
  },
  content: {
    initial: {
      y: 10,
    },
    animate: { y: 0 },
  },
};

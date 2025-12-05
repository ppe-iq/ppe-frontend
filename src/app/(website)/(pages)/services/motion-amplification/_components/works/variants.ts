// Quote
export const quote = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1] as const,
      duration: 0.5,
      delay: 0.2,
      type: "spring" as const,
      stiffness: 100,
    },
  },
  viewport: { amount: 0.3, once: true },
};

// Title
export const title = {
  hidden: { opacity: 0, y: 50, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1] as const,
      duration: 1,
      delay: 0.5,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
  viewport: { amount: 0.3, once: true },
};

// Description
export function description(idx: number) {
  return {
    hidden: { opacity: 0, y: 10, rotate: 2, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.9,
        delay: 0.7 + idx * 0.001,
        type: "spring" as const,
        stiffness: 100,
      },
    },
    viewport: { amount: 0.3, once: true },
  };
}

// Image
export function flow(delay: number) {
  return {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: delay,
      },
    },

    viewport: { amount: 0.3, once: true },
  };
}

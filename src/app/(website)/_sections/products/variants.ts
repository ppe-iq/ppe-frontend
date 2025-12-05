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
      delay: 0.3,
      type: "spring" as const,
      stiffness: 100,
    },
  },
  viewport: { amount: 0.3, once: true },
};

// Title
export const title = {
  hidden: { opacity: 0, x: -50, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1] as const,
      duration: 0.9,
      delay: 0.5,
      type: "spring" as const,
      stiffness: 100,
    },
  },
  viewport: { amount: 0.3, once: true },
};

// Description
export function description(idx: number) {
  return {
    hidden: { opacity: 0, x: 10, rotate: 2, filter: "blur(2px)" },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.9,
        delay: 0.7 + idx * 0.03,
        type: "spring" as const,
        stiffness: 100,
      },
    },
    viewport: { amount: 0.3, once: true },
  };
}

// Primary Button
export const primaryButton = {
  hidden: { opacity: 0, y: 10, scale: 0.9, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1] as const,
      duration: 0.8,
      delay: 0.9,
      type: "spring" as const,
      stiffness: 100,
    },
  },
  viewport: { amount: 0.3, once: true },
};

// Secondary Button
export const secondaryButton = {
  hidden: { opacity: 0, y: 10, scale: 0.9, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1] as const,
      duration: 0.8,
      delay: 1,
      type: "spring" as const,
      stiffness: 100,
    },
  },
  viewport: { amount: 0.3, once: true },
};

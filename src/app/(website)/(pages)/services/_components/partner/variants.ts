// Quote
export const quote = {
  hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.3,
    },
  },

  viewport: { amount: 0.1, once: true },
};

// Title
export const title = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.6,
    },
  },

  viewport: { amount: 0.3, once: true },
};

// Description
export function description(idx: number) {
  return {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.2, 0.3, 0.4] as const,
        delay: 0.9 + idx * 0.05,
      },
    },

    viewport: { amount: 0.3, once: true },
  };
}

// Primary Button
export const primaryButton = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(5px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1.2,
    },
  },

  viewport: { amount: 0.3, once: true },
};

// Secondary Button
export const secondaryButton = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(5px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1.3,
    },
  },

  viewport: { amount: 0.3, once: true },
};

// Service Card
export function serviceCard(idx: number) {
  return {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 1.2 + idx * 0.15,
      },
    },

    viewport: { amount: 0, once: true },
  };
}

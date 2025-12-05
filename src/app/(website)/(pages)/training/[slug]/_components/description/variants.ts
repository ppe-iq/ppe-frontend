// Title
export const title = {
  hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.4,
    },
  },

  viewport: { once: true },
};

// Description
export function description(idx: number) {
  return {
    hidden: { opacity: 0, y: 30, rotate: 1.5, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: idx * 0.01 + 0.8,
      },
    },

    viewport: { once: true },
  };
}

// Card
export function card(delay: number) {
  return {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: delay * 0.2 + 1.4,
      },
    },

    viewport: { once: true },
  };
}

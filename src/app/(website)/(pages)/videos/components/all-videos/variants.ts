// Title
export const title = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.8,
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },

  viewport: { once: true } as const,
};

// Filter item
export function filterItem(idx: number) {
  return {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(5px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: idx * 0.08 + 0.8,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },

    viewport: { once: true } as const,
  };
}

// Search input
export const searchInput = {
  hidden: { opacity: 0, x: 20, filter: "blur(5px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: 1,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },

  viewport: { once: true } as const,
};

// Video card
export function videoCard(idx: number) {
  return {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: idx * 0.1 + 1.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },

    viewport: { once: true } as const,
  };
}

// Button
export const btn = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.8,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },

  viewport: { once: true } as const,
};

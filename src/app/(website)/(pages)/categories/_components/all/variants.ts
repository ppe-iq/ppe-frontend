// Category Card
export function categoryCard(idx: number) {
  return {
    hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.1, 0.9] as const,
        delay: idx * 0.1,
      },
    },

    viewport: { once: true, amount: "some" as const },
  };
}

// Container
export const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
};

// Title
export const title = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.3,
    },
  },

  viewport: { once: true, amount: 0.3 },
};

// Description
export const description = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },

  viewport: { once: true, amount: 0.3 },
};

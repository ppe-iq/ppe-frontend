// Title
export const title = {
  hidden: { opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.8,
    },
  },

  viewport: { once: true },
};

// Description
export const description = {
  hidden: { opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.9,
    },
  },

  viewport: { once: true },
};

// Play button
export const playBtn = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(5px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1.2,
    },
  },

  viewport: { once: true },
};

// Image
export const image = {
  hidden: { opacity: 0, scale: 1.2, filter: "blur(2px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.5,
    },
  },

  viewport: { once: true },
};

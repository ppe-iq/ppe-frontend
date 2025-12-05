// Breadcrumb Tracker
export const breadcrumbTracker = {
  hidden: { opacity: 0, x: -50, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1,
    },
  },
};

// Title
export const title = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.8,
    },
  },

  exit: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
    transition: { duration: 0.2, ease: "linear" as const, delay: 0.6 },
  },
};

// Image
export const image = {
  hidden: { opacity: 0, scale: 1.2, filter: "blur(2px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] as const },
  },

  exit: {
    opacity: 0,
    scale: 1.2,
    filter: "blur(2px)",
    transition: { duration: 1, ease: "linear" as const },
  },
};

// Gradient Desktop
export const gradientDesktop = {
  hidden: { opacity: 0, height: "0%", scale: 0.9 },
  show: {
    opacity: 1,
    height: "80%",
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.35,
    },
  },
};

// Mobile Gradient
export const gradientMobile = {
  hidden: { opacity: 0, height: "0%", scale: 0.9 },
  show: {
    opacity: 1,
    height: "80%",
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.35,
    },
  },

  exit: {
    opacity: 0,
    width: "0%",
    scale: 0.9,
    transition: { duration: 1, delay: 0.5, ease: "easeInOut" as const },
  },
};

// Chips
export function chips(idx: number) {
  return {
    hidden: { opacity: 0, x: -20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        delay: idx * 0.2 + 1.2,
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.8,
      },
    },

    viewport: { once: true } as const,
  };
}

// Container
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
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

// Subtitle
export const subTitle = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1,
    },
  },

  exit: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
    transition: { duration: 0.3, ease: "linear" as const, delay: 0.5 },
  },
};

// Description
export const description = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1.2,
    },
  },

  exit: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
    transition: { duration: 0.5, ease: "linear" as const, delay: 0.4 },
  },
};

// Primary Button
export const primaryButton = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1.4,
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },

  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.3, ease: "linear" as const },
  },
};

// Secondary Button
export const secondaryButton = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1.6,
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },

  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.2, ease: "linear" as const, delay: 0.2 },
  },
};

// Previous Button
export const previousButton = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 2.0,
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },

  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.2, ease: "linear" as const, delay: 0.1 },
  },
};

// Next Button
export const nextButton = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 2.2,
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },

  exit: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.2, ease: "linear" as const },
  },
};

// Dots
export function dot(idx: number) {
  return {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 1.8 + idx * 0.1,
      },
    },

    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        delay: 0.3 + idx * 0.1,
        ease: "easeInOut" as const,
      },
    },
  };
}

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
  hidden: { opacity: 0, width: "0%", scale: 0.9 },
  show: {
    opacity: 1,
    width: "60%",
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
    transition: { duration: 1, delay: 0.3, ease: "easeInOut" as const },
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
      delay: 0.2,
    },
  },

  exit: {
    opacity: 0,
    height: "0%",
    scale: 0.9,
    transition: { duration: 1, delay: 0.2, ease: "easeInOut" as const },
  },
};

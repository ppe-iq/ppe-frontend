// Breadcrumb
export const breadcrumb = {
  hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },

  viewport: { once: true },
};

// Title
export const title = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.3,
    },
  },

  viewport: { once: true },
};

// Subtitle
export const subTitle = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
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

  viewport: { once: true },
};

// Description
export function description(idx: number) {
  return {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: idx * 0.01 + 1,
      },
    },

    viewport: { once: true },
  };
}

// CTA's
export function ctaButtons(delay: number) {
  return {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: delay + 1,
        type: "spring" as const,
        stiffness: 200,
        bouncing: 10,
      },
    },

    viewport: { once: true },
  };
}

// Main image
export const mainImage = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
  show: (isFirst: boolean) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: isFirst ? 2 : 0,
      duration: 0.8,
    },
  }),

  exit: {
    opacity: 0,
    filter: "blur(4px)",
    scale: 1.05,
  },

  viewport: { once: true },
};

// Thumbnail
export function thumbnail(idx: number) {
  return {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)", y: 10 },
    show: (isFirst: boolean) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: isFirst ? idx * 0.03 + 2.2 : 0,
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    }),

    viewport: { once: true },
  };
}

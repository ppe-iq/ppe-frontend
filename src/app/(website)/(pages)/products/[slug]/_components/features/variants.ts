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

// Card
export function featureCard(idx: number) {
  return {
    hidden: { opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.8,
        delay: idx * 0.1 + 0.5,
      },
    },

    viewport: { once: true },
  };
}

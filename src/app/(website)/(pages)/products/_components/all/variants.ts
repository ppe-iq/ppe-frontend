// Filter and sort container
export const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
};

// Product types
export const productTypesVariants = {
  hidde: { opacity: 0, filter: "blur(4px)", y: 10 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.39, 0.24, 0.3, 1] as const,
      delay: 3,
    },
  },
  viewport: { once: true, amount: 0.3 },
};

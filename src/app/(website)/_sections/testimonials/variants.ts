// Quote
export const quote = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1] as const,
      duration: 0.5,
      delay: 0.2,
      type: "spring" as const,
      stiffness: 100,
    },
  },
  viewport: { amount: 0.3, once: true },
};

// Title
export const title = {
  hidden: { opacity: 0, y: 50, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1] as const,
      duration: 1,
      delay: 0.5,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
  viewport: { amount: 0.3, once: true },
};

// Description
export function description(idx: number) {
  return {
    hidden: { opacity: 0, y: 10, rotate: 2, filter: "blur(2px)" },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1] as const,
        duration: 0.9,
        delay: 0.7 + idx * 0.03,
        type: "spring" as const,
        stiffness: 100,
      },
    },
    viewport: { amount: 0.3, once: true },
  };
}

// Testimonial Container
export const testimonialContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },

  viewport: { amount: 0.1, once: true },
};

// Testimonial Image
export const testimonialImage = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(5px)" },
  show: (isFirst: boolean) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: isFirst ? 0.8 : 0.2,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(5px)",
    duration: 0.5,
  },

  viewport: { amount: 0.3, once: true },
};

// Company Badge
export const companyBadge = {
  hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
  show: (isFirst: boolean) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: isFirst ? 0.9 : 0.2,
    },
  }),

  exit: { opacity: 0, y: -10, filter: "blur(2px)" },

  viewport: { amount: 0.3, once: true },
};

// Testimonial Name
export const testimonialName = {
  hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
  show: (isFirst: boolean) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: isFirst ? 1 : 0.4,
    },
  }),
  exit: { opacity: 0, y: -10, filter: "blur(2px)" },

  viewport: { amount: 0.3, once: true },
};

// Testimonial Quote
export function testimonialQuote(idx: number) {
  return {
    hidden: { opacity: 0, y: 10, rotate: 2, filter: "blur(8px)" },
    show: (isFirst: boolean) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: isFirst ? 1.2 + idx * 0.03 : 0.6 + idx * 0.03,
      },
    }),
    exit: { opacity: 0, y: -10, filter: "blur(2px)" },

    viewport: { amount: 0.3, once: true },
  };
}

// Testimonial Rating
export function testimonialRating(idx: number) {
  return {
    hidden: { opacity: 0, scale: 0.5, rotate: 100, filter: "blur(4px)" },
    show: (isFirst: boolean) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: isFirst ? 1.8 + idx * 0.1 : 1.3 + idx * 0.1,
      },
    }),
    exit: { opacity: 0, scale: 0.9, rotate: 2, filter: "blur(4px)" },

    viewport: { amount: 0.3, once: true },
  };
}

// Testimonial Prev Button
export const testimonialPrevButton = {
  hidden: { opacity: 0, x: -10, filter: "blur(2px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1.3,
    },
  },
  exit: { opacity: 0, x: -10, filter: "blur(2px)" },

  viewport: { amount: 0.3, once: true },
};

// Testimonial Next Button
export const testimonialNextButton = {
  hidden: { opacity: 0, x: -10, filter: "blur(2px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 1.2,
    },
  },
  exit: { opacity: 0, x: -10, filter: "blur(2px)", transition: { delay: 0.1 } },

  viewport: { amount: 0.3, once: true },
};

// Footer container
export function container(delay: number = 0) {
  return {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay,
        ease: [0.6, 0.01, 0.05, 0.95] as const,
        duration: 0.8,
      },
    },
    viewport: { amount: 0.1, once: true },
  };
}

//

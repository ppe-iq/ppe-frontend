// Product Card
export function productCard(idx: number) {
  return {
    hidden: { opacity: 0, y: 4, scale: 0.98, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: idx * 0.08,
      },
    },

    viewport: { amount: 0.3, once: true },
  };
}

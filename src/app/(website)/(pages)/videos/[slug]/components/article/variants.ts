export const videoPlayer = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.2,
    },
  },

  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" as const },
  },
};

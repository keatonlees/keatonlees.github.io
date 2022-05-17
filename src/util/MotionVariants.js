export const motionVariants = {
  // ----- initial states -----
  hide: {
    opacity: 0,
  },
  hideAbove: {
    opacity: 0,
    y: -25,
  },
  hideBelow: {
    opacity: 0,
    y: 25,
  },
  hideLeft: {
    opacity: 0,
    x: -25,
  },
  hideRight: {
    opacity: 0,
    x: 25,
  },

  // ----- animate states -----
  showElement: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  showElementDelayed: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
  showBannerText: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 1.4,
    },
  },
  showMegaText: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  showProjectBtns: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 1.4,
    },
  },
  showScroll: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.4,
    },
  },

  // ----- exit states -----
  exitFade: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  exitMoveUp: {
    opacity: 0,
    y: -25,
    transition: {
      duration: 0.2,
    },
  },
  exitMoveDown: {
    opacity: 0,
    y: 25,
    transition: {
      duration: 0.2,
    },
  },
  exitMoveLeft: {
    opacity: 0,
    x: -25,
    transition: {
      duration: 0.2,
    },
  },
  exitMoveRight: {
    opacity: 0,
    x: 25,
    transition: {
      duration: 0.2,
    },
  },

  // ----- hover states -----
  grow: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

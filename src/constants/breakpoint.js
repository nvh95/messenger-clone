export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
}

export const QUERIES = {
  'laptopAndDown': `(max-width: ${BREAKPOINTS.desktopMin}px)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.laptopMin}px)`,
  'phone': `(max-width: ${BREAKPOINTS.tabletMin}px)`,
}
// Same implementation as in class @deckdeckgo/utils
export const isMobile = (): boolean => {
  return window?.matchMedia('(any-pointer:coarse)').matches;
};

export const staticOpenNewWindow = (urlString: string) => {
  if (window.self !== window.top) {
    window.open(urlString, '_blank');
  } else {
    window.open(urlString, '_self');
  }
};

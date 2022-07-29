// Same implementation as in class @deckdeckgo/utils
export const isMobile = (): boolean => {
  const isTouchScreen: boolean = window.matchMedia('(any-pointer:coarse)').matches;
  const isMouseScreen: boolean = window.matchMedia('(any-pointer:fine)').matches;

  return isTouchScreen && !isMouseScreen;
};

export const staticOpenNewWindow = (urlString: string) => {
  if (window.self !== window.top) {
    window.open(urlString, '_blank');
  } else {
    window.open(urlString, '_self');
  }
};

export const shareEncodedUrl = (socialShareUrl?: string): string => {
  return encodeURIComponent(socialShareUrl || window.location.href);
};

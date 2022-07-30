// Same implementation as in class @deckdeckgo/utils
export const isMobile = (): boolean => {
  const isTouchScreen: boolean = window.matchMedia('(any-pointer:coarse)').matches;
  const isMouseScreen: boolean = window.matchMedia('(any-pointer:fine)').matches;

  return isTouchScreen && !isMouseScreen;
};

export const openNewWindow = ({
  urlString,
  target = '_blank'
}: {
  urlString: string;
  target?: string;
}) => window.open(urlString, target);

export const shareEncodedUrl = (socialShareUrl?: string): string =>
  encodeURIComponent(socialShareUrl ?? window.location.href);

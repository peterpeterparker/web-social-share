import {WebSocialShareWithTextAttributes} from '../types/attributes';

import {openNewWindow, shareEncodedUrl} from '../utils/utils';

export const openchat = async ({
  socialShareUrl,
  socialShareText,
  openWindowTarget: target
}: WebSocialShareWithTextAttributes) => {
  let urlString: string = `https://oc.app/?url=${shareEncodedUrl(socialShareUrl)}`;

  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }

  // openchat requires a suffix `#/share` to understand it is a share action
  urlString += `#/share`;

  openNewWindow({urlString, target});
};

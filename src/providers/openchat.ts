import {WebSocialShareWithTextAttributes} from '../types/web-social-share-attributes';

import {shareEncodedUrl, staticOpenNewWindow} from '../utils/utils';

export const openchat = async ({
  socialShareUrl,
  socialShareText
}: WebSocialShareWithTextAttributes) => {
  let urlString: string = `https://oc.app/?url=${shareEncodedUrl(socialShareUrl)}`;

  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }

  // openchat requires a suffix `#/share` to understand it's share action
  urlString += `#/share`;

  staticOpenNewWindow(urlString);
};

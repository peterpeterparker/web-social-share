import {WebSocialShareWithTextAttributes} from '../types/attributes';

import {openNewWindow, shareEncodedUrl} from '../utils/utils';

export const telegram = async ({
  socialShareUrl,
  socialShareText,
  openWindowTarget: target
}: WebSocialShareWithTextAttributes) => {
  let urlString: string = `https://t.me/share/url?url=${shareEncodedUrl(socialShareUrl)}`;

  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }

  openNewWindow({urlString, target});
};

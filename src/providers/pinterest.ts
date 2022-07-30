import {WebSocialSharePinterestAttributes} from '../types/attributes';

import {openNewWindow, shareEncodedUrl} from '../utils/utils';

export const pinterest = async ({
  socialShareUrl,
  socialShareMedia,
  socialShareText,
  openWindowTarget: target
}: WebSocialSharePinterestAttributes) => {
  let urlString: string = `https://www.pinterest.com/pin/create/button/?url=${shareEncodedUrl(
    socialShareUrl
  )}`;

  if (socialShareMedia) {
    urlString += `&media=${encodeURIComponent(socialShareMedia)}`;
  }

  if (socialShareText) {
    urlString += `&description=${encodeURIComponent(socialShareText)}`;
  }

  openNewWindow({urlString, target});
};

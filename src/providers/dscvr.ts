import {WebSocialShareDscvrAttributes} from '../types/attributes';

import {openNewWindow, shareEncodedUrl} from '../utils/utils';

export const dscvr = async ({
  socialShareUrl,
  socialShareText,
  socialShareTitle,
  socialSharePortal,
  openWindowTarget: target
}: WebSocialShareDscvrAttributes) => {
  let urlString: string = `https://dscvr.one/?url=${shareEncodedUrl(socialShareUrl)}`;

  if (socialShareText) {
    urlString += `&text=${encodeURIComponent(socialShareText)}`;
  }

  if (socialShareTitle) {
    urlString += '&title=' + encodeURIComponent(socialShareTitle);
  }

  if (socialSharePortal) {
    urlString += '&portal=' + encodeURIComponent(socialSharePortal);
  }

  openNewWindow({urlString, target});
};

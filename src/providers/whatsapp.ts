import {WebSocialShareWhatsappAttributes} from '../types/attributes';

import {isMobile, openNewWindow, shareEncodedUrl} from '../utils/utils';

export const whatsapp = async ({
  socialShareText,
  socialShareUrl,
  openWindowTarget: target
}: WebSocialShareWhatsappAttributes) => {
  const mobile: boolean = isMobile();

  let urlString = mobile
    ? 'https://api.whatsapp.com/send?text='
    : 'https://web.whatsapp.com/send?text=';

  if (socialShareText) {
    urlString += encodeURIComponent(socialShareText) + '%0A';
  }

  //default to the current page if a URL isn't specified
  urlString += shareEncodedUrl(socialShareUrl);

  openNewWindow({urlString, target});
};

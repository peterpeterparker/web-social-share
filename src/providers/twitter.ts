import {WebSocialShareTwitterAttributes} from '../types/attributes';

import {openNewWindow, shareEncodedUrl} from '../utils/utils';

export const shareTwitter = async ({
  socialShareText,
  socialShareVia,
  socialShareHashtags,
  socialShareUrl,
  openWindowTarget: target
}: WebSocialShareTwitterAttributes) => {
  let urlString = 'https://www.twitter.com/intent/tweet?';

  if (socialShareText) {
    urlString += 'text=' + encodeURIComponent(socialShareText);
  }

  if (socialShareVia) {
    urlString += '&via=' + encodeURIComponent(socialShareVia);
  }

  if (socialShareHashtags) {
    urlString += '&hashtags=' + encodeURIComponent(socialShareHashtags);
  }

  //default to the current page if a URL isn't specified
  urlString += '&url=' + shareEncodedUrl(socialShareUrl);

  openNewWindow({urlString, target});
};

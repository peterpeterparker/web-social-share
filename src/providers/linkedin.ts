import {WebSocialShareLinkedinAttributes} from '../types/attributes';

import {openNewWindow, shareEncodedUrl} from '../utils/utils';

export const linkedin = async ({
  socialShareUrl,
  socialShareText,
  socialShareDescription,
  socialShareSource,
  openWindowTarget: target
}: WebSocialShareLinkedinAttributes) => {
  let urlString = 'https://www.linkedin.com/shareArticle?mini=true';

  urlString += '&url=' + shareEncodedUrl(socialShareUrl);

  if (socialShareText) {
    urlString += '&title=' + encodeURIComponent(socialShareText);
  }

  if (socialShareDescription) {
    urlString += '&summary=' + encodeURIComponent(socialShareDescription);
  }

  if (socialShareSource) {
    urlString += '&source=' + encodeURIComponent(socialShareSource);
  }

  openNewWindow({urlString, target});
};

import {WebSocialShareWithTextAttributes} from '../types/attributes';

import {openNewWindow, shareEncodedUrl} from '../utils/utils';

export const hackernews = async ({
  socialShareUrl,
  socialShareText,
  openWindowTarget: target
}: WebSocialShareWithTextAttributes) => {
  let urlString = 'https://news.ycombinator.com/submitlink?u=';

  //default to the current page if a URL isn't specified
  urlString += shareEncodedUrl(socialShareUrl);

  if (socialShareText) {
    urlString += '&t=' + encodeURIComponent(socialShareText);
  }

  openNewWindow({urlString, target});
};

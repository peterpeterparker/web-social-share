import {WebSocialShareWithTextAttributes} from '../types/web-social-share-attributes';

import {shareEncodedUrl, staticOpenNewWindow} from './utils';

export const telegram = async (attrs: WebSocialShareWithTextAttributes) => {
  let urlString: string = `https://t.me/share/url?url=${shareEncodedUrl(attrs.socialShareUrl)}`;

  if (attrs.socialShareText) {
    urlString += `&text=${encodeURIComponent(attrs.socialShareText)}`;
  }

  staticOpenNewWindow(urlString);
};

import {WebSocialShareRedditAttributes} from '../types/web-social-share-attributes';

import {shareEncodedUrl} from './utils';

export const reddit = async (attrs: WebSocialShareRedditAttributes) => {
  let urlString = 'https://www.reddit.com/';

  if (attrs.socialShareSubreddit) {
    urlString += 'r/' + attrs.socialShareSubreddit + '/submit?url=';
  } else {
    urlString += 'submit?url=';
  }
  /*-
   * Reddit isn't responsive and at default width for our popups (500 x 500), everything is messed up.
   * So, overriding the width if it is less than 900 (played around to settle on this) and height if
   * it is less than 650px.
   */
  if (attrs.socialSharePopupWidth < 900) {
    attrs.socialSharePopupWidth = 900;
  }

  if (attrs.socialSharePopupHeight < 650) {
    attrs.socialSharePopupHeight = 650;
  }

  let url: string = urlString + shareEncodedUrl(attrs.socialShareUrl);

  if (attrs.socialShareText) {
    url += `&title=${encodeURIComponent(attrs.socialShareText)}`;
  }

  window.open(
    url,
    'Reddit',
    'toolbar=0,status=0,resizable=yes,width=' +
      attrs.socialSharePopupWidth +
      ',height=' +
      attrs.socialSharePopupHeight +
      ',top=' +
      (window.innerHeight - attrs.socialSharePopupHeight) / 2 +
      ',left=' +
      (window.innerWidth - attrs.socialSharePopupWidth) / 2
  );
};

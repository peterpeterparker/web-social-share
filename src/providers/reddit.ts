import {WebSocialShareRedditAttributes} from '../types/attributes';

import {openNewWindow, shareEncodedUrl} from '../utils/utils';

export const reddit = async ({
  socialShareSubreddit,
  socialShareUrl,
  socialShareText,
  openWindowTarget: target
}: WebSocialShareRedditAttributes) => {
  let urlString = 'https://www.reddit.com/';

  if (socialShareSubreddit) {
    urlString += 'r/' + socialShareSubreddit + '/submit?url=';
  } else {
    urlString += 'submit?url=';
  }

  urlString += shareEncodedUrl(socialShareUrl);

  if (socialShareText) {
    urlString += `&title=${encodeURIComponent(socialShareText)}`;
  }

  openNewWindow({urlString, target});
};

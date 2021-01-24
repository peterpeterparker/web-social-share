import {WebSocialShareWithTextAttributes} from '../types/web-social-share-attributes';
import {staticOpenNewWindow} from './utils';

export const hackernews = async (attrs: WebSocialShareWithTextAttributes) => {
  let urlString = 'https://news.ycombinator.com/submitlink?u=';

  //default to the current page if a URL isn't specified
  urlString += encodeURIComponent(attrs.socialShareUrl || window.location.href);

  if (attrs.socialShareText) {
    urlString += '&t=' + encodeURIComponent(attrs.socialShareText);
  }

  staticOpenNewWindow(urlString);
};

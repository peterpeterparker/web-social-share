import {WebSocialShareEmailAttributes} from '../types/web-social-share-attributes';
import {Utils} from './utils';

export const email = async (attrs: WebSocialShareEmailAttributes) => {
  let urlString = 'mailto:';

  if (attrs.socialShareTo) {
    urlString += encodeURIComponent(attrs.socialShareTo);
  }

  urlString += '?';

  if (attrs.socialShareBody) {
    urlString += 'body=' + encodeURIComponent(attrs.socialShareBody);
  }

  if (attrs.socialShareSubject) {
    urlString += '&subject=' + encodeURIComponent(attrs.socialShareSubject);
  }

  if (attrs.socialShareCc) {
    urlString += '&cc=' + encodeURIComponent(attrs.socialShareCc);
  }

  if (attrs.socialShareBcc) {
    urlString += '&bcc=' + encodeURIComponent(attrs.socialShareBcc);
  }

  Utils.staticOpenNewWindow(urlString);
};

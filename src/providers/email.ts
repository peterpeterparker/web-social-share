import {WebSocialShareEmailAttributes} from '../types/attributes';

export const email = async ({
  socialShareTo,
  socialShareBody,
  socialShareSubject,
  socialShareCc,
  socialShareBcc
}: WebSocialShareEmailAttributes) => {
  let urlString = 'mailto:';

  if (socialShareTo) {
    urlString += encodeURIComponent(socialShareTo);
  }

  urlString += '?';

  if (socialShareBody) {
    urlString += 'body=' + encodeURIComponent(socialShareBody);
  }

  if (socialShareSubject) {
    urlString += '&subject=' + encodeURIComponent(socialShareSubject);
  }

  if (socialShareCc) {
    urlString += '&cc=' + encodeURIComponent(socialShareCc);
  }

  if (socialShareBcc) {
    urlString += '&bcc=' + encodeURIComponent(socialShareBcc);
  }

  if (window.self !== window.top) {
    window.open(urlString, '_blank');
  } else {
    window.open(urlString, '_self');
  }
};

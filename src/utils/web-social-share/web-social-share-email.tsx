import {WebSocialShareEmailAttributes} from '../../types/web-social-share/web-social-share-attributes';

export class WebSocialShareEmail {

  static share(attrs: WebSocialShareEmailAttributes) {
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

    if (window.self !== window.top) {
      window.open(urlString, '_blank');
    } else {
      window.open(urlString, '_self');
    }
  }
}

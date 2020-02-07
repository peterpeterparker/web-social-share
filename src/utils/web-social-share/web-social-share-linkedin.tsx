import {WebSocialShareLinkedinAttributes} from '../../types/web-social-share/web-social-share-attributes';

export class WebSocialShareLinkedin {

  static async share(attrs: WebSocialShareLinkedinAttributes) {
    let urlString = 'https://www.linkedin.com/shareArticle?mini=true';

    urlString += '&url=' + encodeURIComponent(attrs.socialShareUrl || window.location.href);

    if (attrs.socialShareText) {
      urlString += '&title=' + encodeURIComponent(attrs.socialShareText);
    }

    if (attrs.socialShareDescription) {
      urlString += '&summary=' + encodeURIComponent(attrs.socialShareDescription);
    }

    if (attrs.socialShareSource) {
      urlString += '&source=' + encodeURIComponent(attrs.socialShareSource);
    }

    window.open(
      urlString,
      'Linkedin', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
      + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);

  }
}

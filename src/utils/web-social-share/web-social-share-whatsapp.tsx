import {WebSocialShareWhatsappAttributes} from '../../types/web-social-share/web-social-share-attributes';

import {WebSocialShareUtils} from './web-social-share-utils';

export class WebSocialShareWhatsapp {

  static async share(attrs: WebSocialShareWhatsappAttributes) {
    const isMobile: boolean = WebSocialShareUtils.isMobile();

    let urlString = isMobile ? 'https://api.whatsapp.com/send?text=' : 'https://web.whatsapp.com/send?text=';

    if (attrs.socialShareText) {
      urlString += encodeURIComponent(attrs.socialShareText) + '%0A';
    }

    //default to the current page if a URL isn't specified
    urlString += encodeURIComponent(attrs.socialShareUrl || window.location.href);

    if (isMobile) {
      WebSocialShareUtils.staticOpenNewWindow(urlString);
    } else {
      window.open(
        urlString,
        'WhatsApp', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
    }
  }
}

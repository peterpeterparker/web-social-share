import {WebSocialShareWhatsappAttributes} from '../../types/web-social-share/web-social-share-attributes';
import {WebSocialShareUtils} from './web-social-share-utils';

export class WebSocialShareWhatsapp {

  static share(attrs: WebSocialShareWhatsappAttributes) {
    const isMobile: boolean = WebSocialShareUtils.isMobile();

    let urlString = isMobile ? 'whatsapp://send?' : 'https://wa.me/?';

    if (attrs.socialShareText) {
      urlString += 'text=' + encodeURIComponent(attrs.socialShareText);
    }

    //default to the current page if a URL isn't specified
    urlString += '%0A' + encodeURIComponent(attrs.socialShareUrl || window.location.href);

    window.open(
      urlString,
      'WhatsApp', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
      + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
  }
}

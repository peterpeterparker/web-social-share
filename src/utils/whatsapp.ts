import {WebSocialShareWhatsappAttributes} from '../types/web-social-share-attributes';

import {staticOpenNewWindow, isMobile} from './utils';

export const whatsapp = async (attrs: WebSocialShareWhatsappAttributes) => {
  const mobile: boolean = isMobile();

  let urlString = mobile ? 'https://api.whatsapp.com/send?text=' : 'https://web.whatsapp.com/send?text=';

  if (attrs.socialShareText) {
    urlString += encodeURIComponent(attrs.socialShareText) + '%0A';
  }

  //default to the current page if a URL isn't specified
  urlString += encodeURIComponent(attrs.socialShareUrl || window.location.href);

  if (mobile) {
    staticOpenNewWindow(urlString);
  } else {
    window.open(
      urlString,
      'WhatsApp',
      'toolbar=0,status=0,resizable=yes,width=' +
        attrs.socialSharePopupWidth +
        ',height=' +
        attrs.socialSharePopupHeight +
        ',top=' +
        (window.innerHeight - attrs.socialSharePopupHeight) / 2 +
        ',left=' +
        (window.innerWidth - attrs.socialSharePopupWidth) / 2
    );
  }
};

import {WebSocialShareTwiterAttributes} from '../../types/web-social-share/web-social-share-attributes';
import {WebSocialShareUtils} from './web-social-share-utils';

export class WebSocialShareTwitter {

  static async share(attrs: WebSocialShareTwiterAttributes) {
    let urlString = 'https://www.twitter.com/intent/tweet?';

    if (attrs.socialShareText) {
      urlString += 'text=' + encodeURIComponent(attrs.socialShareText);
    }

    if (attrs.socialShareVia) {
      urlString += '&via=' + encodeURIComponent(attrs.socialShareVia);
    }

    if (attrs.socialShareHashtags) {
      urlString += '&hashtags=' + encodeURIComponent(attrs.socialShareHashtags);
    }

    //default to the current page if a URL isn't specified
    urlString += '&url=' + encodeURIComponent(attrs.socialShareUrl || window.location.href);

    if (WebSocialShareUtils.isMobile()) {
      WebSocialShareUtils.staticOpenNewWindow(urlString);
    } else {
      window.open(
        urlString,
        'Twitter', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
    }
  }
}

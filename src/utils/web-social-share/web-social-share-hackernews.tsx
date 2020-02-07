import {
  WebSocialShareWithTextAttributes
} from '../../types/web-social-share/web-social-share-attributes';
import {WebSocialShareUtils} from './web-social-share-utils';

export class WebSocialShareHackerNews {

  static async share(attrs: WebSocialShareWithTextAttributes) {
    let urlString = 'https://news.ycombinator.com/submitlink?u=';

    //default to the current page if a URL isn't specified
    urlString += encodeURIComponent(attrs.socialShareUrl || window.location.href);

    if (attrs.socialShareText) {
      urlString += '&t=' + encodeURIComponent(attrs.socialShareText);
    }

    WebSocialShareUtils.staticOpenNewWindow(urlString);
  }
}

import {WebSocialShareAttributes} from '../../types/web-social-share/web-social-share-attributes';

export class WebSocialShareCopy {

  static async share(attrs: WebSocialShareAttributes) {
    try {
      await navigator.clipboard.writeText(attrs.socialShareUrl || window.location.href);
    } catch (err) {
      // Well it seems that copy isn't supported by this browser
    }
  }
}

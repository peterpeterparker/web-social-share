import {WebSocialShareFacebookAttributes} from '../../types/web-social-share/web-social-share-attributes';

/**
 * Source: https://github.com/720kb/angular-socialshare/blob/master/dist/angular-socialshare.js
 */
export class WebSocialShareFacebook {

  static async share(attrs: WebSocialShareFacebookAttributes) {
    let urlString;

    if (attrs.socialShareType && attrs.socialShareType === 'feed') {
      // if user specifies that they want to use the Facebook feed dialog
      //(https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.4)
      urlString = 'https://www.facebook.com/dialog/feed?';

      if (attrs.socialShareVia) {
        urlString += '&app_id=' + encodeURIComponent(attrs.socialShareVia);
      }

      if (attrs.socialShareRedirectUri) {
        urlString += '&redirect_uri=' + encodeURIComponent(attrs.socialShareRedirectUri);
      }
      if (attrs.socialShareUrl) {
        urlString += '&link=' + encodeURIComponent(attrs.socialShareUrl);
      }

      if (attrs.socialShareTo) {
        urlString += '&to=' + encodeURIComponent(attrs.socialShareTo);
      }

      if (attrs.socialShareDisplay) {
        urlString += '&display=' + encodeURIComponent(attrs.socialShareDisplay);
      }

      if (attrs.socialShareRef) {
        urlString += '&ref=' + encodeURIComponent(attrs.socialShareRef);
      }

      if (attrs.socialShareFrom) {
        urlString += '&from=' + encodeURIComponent(attrs.socialShareFrom);
      }

      if (attrs.socialShareSource) {
        urlString += '&source=' + encodeURIComponent(attrs.socialShareSource);
      }

      window.open(
        urlString,
        'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);

    } else if (attrs.socialShareType && attrs.socialShareType === 'share') {
      // if user specifies that they want to use the Facebook share dialog
      //(https://developers.facebook.com/docs/sharing/reference/share-dialog)
      urlString = 'https://www.facebook.com/dialog/share?';

      if (attrs.socialShareVia) {
        urlString += '&app_id=' + encodeURIComponent(attrs.socialShareVia);
      }

      if (attrs.socialShareRedirectUri) {
        urlString += '&redirect_uri=' + encodeURIComponent(attrs.socialShareRedirectUri);
      }

      if (attrs.socialShareUrl) {
        urlString += '&href=' + encodeURIComponent(attrs.socialShareUrl);
      }

      if (attrs.socialShareQuote) {
        urlString += '&quote=' + encodeURIComponent(attrs.socialShareQuote);
      }

      if (attrs.socialShareDisplay) {
        urlString += '&display=' + encodeURIComponent(attrs.socialShareDisplay);
      }

      if (attrs.socialShareMobileiframe) {
        urlString += '&mobile_iframe=' + encodeURIComponent(attrs.socialShareMobileiframe);
      }

      if (attrs.socialShareHashtags) {
        urlString += '&hashtag=' + encodeURIComponent(attrs.socialShareHashtags);
      }


      window.open(
        urlString,
        'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);

    } else if (attrs.socialShareType && attrs.socialShareType === 'send') {
      // if user specifies that they want to use the Facebook send dialog
      //(https://developers.facebook.com/docs/sharing/reference/send-dialog)
      urlString = 'https://www.facebook.com/dialog/send?';

      if (attrs.socialShareVia) {
        urlString += '&app_id=' + encodeURIComponent(attrs.socialShareVia);
      }

      if (attrs.socialShareRedirectUri) {
        urlString += '&redirect_uri=' + encodeURIComponent(attrs.socialShareRedirectUri);
      }

      if (attrs.socialShareUrl) {
        urlString += '&link=' + encodeURIComponent(attrs.socialShareUrl);
      }

      if (attrs.socialShareTo) {
        urlString += '&to=' + encodeURIComponent(attrs.socialShareTo);
      }

      if (attrs.socialShareDisplay) {
        urlString += '&display=' + encodeURIComponent(attrs.socialShareDisplay);
      }

      window.open(
        urlString,
        'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);

    } else {
      //otherwise default to using sharer.php
      window.open(
        'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(attrs.socialShareUrl || window.location.href)
        , 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
        + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
    }
  }

}

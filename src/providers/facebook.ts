import {WebSocialShareFacebookAttributes} from '../types/attributes';

import {openNewWindow, shareEncodedUrl} from '../utils/utils';

/**
 * Source: https://github.com/720kb/angular-socialshare/blob/master/dist/angular-socialshare.js
 */
export const shareFacebook = async ({
  socialShareType,
  socialShareVia,
  socialShareRedirectUri,
  socialShareUrl,
  socialShareTo,
  socialShareDisplay,
  socialShareRef,
  socialShareFrom,
  socialShareSource,
  socialShareQuote,
  socialShareMobileiframe,
  socialShareHashtags,
  openWindowTarget: target
}: WebSocialShareFacebookAttributes) => {
  let urlString;

  if (socialShareType === 'feed') {
    // if user specifies that they want to use the Facebook feed dialog
    //(https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.4)
    urlString = 'https://www.facebook.com/dialog/feed?';

    if (socialShareVia) {
      urlString += '&app_id=' + encodeURIComponent(socialShareVia);
    }

    if (socialShareRedirectUri) {
      urlString += '&redirect_uri=' + encodeURIComponent(socialShareRedirectUri);
    }
    if (socialShareUrl) {
      urlString += '&link=' + shareEncodedUrl(socialShareUrl);
    }

    if (socialShareTo) {
      urlString += '&to=' + encodeURIComponent(socialShareTo);
    }

    if (socialShareDisplay) {
      urlString += '&display=' + encodeURIComponent(socialShareDisplay);
    }

    if (socialShareRef) {
      urlString += '&ref=' + encodeURIComponent(socialShareRef);
    }

    if (socialShareFrom) {
      urlString += '&from=' + encodeURIComponent(socialShareFrom);
    }

    if (socialShareSource) {
      urlString += '&source=' + encodeURIComponent(socialShareSource);
    }

    openNewWindow({urlString, target});
    return;
  }

  if (socialShareType === 'share') {
    // if user specifies that they want to use the Facebook share dialog
    //(https://developers.facebook.com/docs/sharing/reference/share-dialog)
    urlString = 'https://www.facebook.com/dialog/share?';

    if (socialShareVia) {
      urlString += '&app_id=' + encodeURIComponent(socialShareVia);
    }

    if (socialShareRedirectUri) {
      urlString += '&redirect_uri=' + encodeURIComponent(socialShareRedirectUri);
    }

    if (socialShareUrl) {
      urlString += '&href=' + shareEncodedUrl(socialShareUrl);
    }

    if (socialShareQuote) {
      urlString += '&quote=' + encodeURIComponent(socialShareQuote);
    }

    if (socialShareDisplay) {
      urlString += '&display=' + encodeURIComponent(socialShareDisplay);
    }

    if (socialShareMobileiframe) {
      urlString += '&mobile_iframe=' + encodeURIComponent(socialShareMobileiframe);
    }

    if (socialShareHashtags) {
      urlString += '&hashtag=' + encodeURIComponent(socialShareHashtags);
    }

    openNewWindow({urlString, target});
    return;
  }

  if (socialShareType === 'send') {
    // if user specifies that they want to use the Facebook send dialog
    //(https://developers.facebook.com/docs/sharing/reference/send-dialog)
    urlString = 'https://www.facebook.com/dialog/send?';

    if (socialShareVia) {
      urlString += '&app_id=' + encodeURIComponent(socialShareVia);
    }

    if (socialShareRedirectUri) {
      urlString += '&redirect_uri=' + encodeURIComponent(socialShareRedirectUri);
    }

    if (socialShareUrl) {
      urlString += '&link=' + shareEncodedUrl(socialShareUrl);
    }

    if (socialShareTo) {
      urlString += '&to=' + encodeURIComponent(socialShareTo);
    }

    if (socialShareDisplay) {
      urlString += '&display=' + encodeURIComponent(socialShareDisplay);
    }

    openNewWindow({urlString, target});
    return;
  }

  openNewWindow({
    urlString: `https://www.facebook.com/sharer/sharer.php?u=${shareEncodedUrl(socialShareUrl)}`,
    target
  });
};

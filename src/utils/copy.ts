import {WebSocialShareAttributes} from '../types/web-social-share-attributes';

export const copy = async (attrs: WebSocialShareAttributes) => {
  try {
    await navigator.clipboard.writeText(attrs.socialShareUrl || window.location.href);
  } catch (err) {
    console.error('Well it seems that copy is not supported by this browser');
  }
};

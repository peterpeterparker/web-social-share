import {WebSocialShareUrlAttributes} from '../types/attributes';

export const copy = async (attrs: WebSocialShareUrlAttributes) => {
  try {
    await navigator.clipboard.writeText(attrs.socialShareUrl ?? window.location.href);
  } catch (err) {
    console.error('Well it seems that copy is not supported by this browser');
  }
};

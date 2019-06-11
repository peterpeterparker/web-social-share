import {
  WebSocialShareAttributes,
  WebSocialShareEmailAttributes,
  WebSocialShareFacebookAttributes,
  WebSocialShareLinkedinAttributes,
  WebSocialSharePinterestAttributes,
  WebSocialShareRedditAttributes,
  WebSocialShareTwiterAttributes, WebSocialShareWhatsappAttributes
} from './web-social-share-attributes';

export interface WebSocialShareInputConfig {
  facebook?: WebSocialShareFacebookAttributes;
  twitter?: WebSocialShareTwiterAttributes;
  email?: WebSocialShareEmailAttributes;
  linkedin?: WebSocialShareLinkedinAttributes;
  pinterest?: WebSocialSharePinterestAttributes;
  reddit?: WebSocialShareRedditAttributes;
  whatsapp?: WebSocialShareWhatsappAttributes;
  copy?: WebSocialShareAttributes;
}

export interface WebSocialShareInput {
  displayNames?: boolean;

  config: WebSocialShareInputConfig[];
}

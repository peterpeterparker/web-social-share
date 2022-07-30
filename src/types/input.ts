import {
  WebSocialShareEmailAttributes,
  WebSocialShareFacebookAttributes,
  WebSocialShareHackerNewsAttributes,
  WebSocialShareLinkedinAttributes,
  WebSocialSharePinterestAttributes,
  WebSocialShareRedditAttributes,
  WebSocialShareTwitterAttributes,
  WebSocialShareUrlAttributes,
  WebSocialShareWhatsappAttributes,
  WebSocialShareWithTextAttributes
} from './attributes';

export interface WebSocialShareInputConfig {
  facebook?: WebSocialShareFacebookAttributes;
  twitter?: WebSocialShareTwitterAttributes;
  email?: WebSocialShareEmailAttributes;
  linkedin?: WebSocialShareLinkedinAttributes;
  pinterest?: WebSocialSharePinterestAttributes;
  reddit?: WebSocialShareRedditAttributes;
  whatsapp?: WebSocialShareWhatsappAttributes;
  copy?: WebSocialShareUrlAttributes;
  hackernews?: WebSocialShareHackerNewsAttributes;
  telegram?: WebSocialShareWithTextAttributes;
  openchat?: WebSocialShareWithTextAttributes;
}

export interface WebSocialShareInput {
  displayNames?: boolean;
  config: WebSocialShareInputConfig[];
}

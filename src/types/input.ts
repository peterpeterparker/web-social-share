import {
  WebSocialShareEmailAttributes,
  WebSocialShareFacebookAttributes,
  WebSocialShareHackerNewsAttributes,
  WebSocialShareLinkedinAttributes,
  WebSocialSharePinterestAttributes,
  WebSocialShareRedditAttributes,
  WebSocialShareTwiterAttributes,
  WebSocialShareUrlAttributes,
  WebSocialShareWhatsappAttributes,
  WebSocialShareWithTextAttributes
} from './attributes';

export interface WebSocialShareInputConfig {
  facebook?: WebSocialShareFacebookAttributes;
  twitter?: WebSocialShareTwiterAttributes;
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

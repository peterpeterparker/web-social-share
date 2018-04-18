import {
  WebSocialShareEmailAttributes,
  WebSocialShareFacebookAttributes,
  WebSocialShareLinkedinAttributes,
  WebSocialSharePinterestAttributes,
  WebSocialShareRedditAttributes,
  WebSocialShareTwiterAttributes
} from './web-social-share-attributes';

export interface WebSocialShareInputConfig {
  facebook?: WebSocialShareFacebookAttributes;
  twitter?: WebSocialShareTwiterAttributes;
  email?: WebSocialShareEmailAttributes;
  linkedin?: WebSocialShareLinkedinAttributes;
  pinterest?: WebSocialSharePinterestAttributes;
  reddit?: WebSocialShareRedditAttributes;
}

export interface WebSocialShareInput {
  displayNames?: boolean;

  config: WebSocialShareInputConfig[];
}

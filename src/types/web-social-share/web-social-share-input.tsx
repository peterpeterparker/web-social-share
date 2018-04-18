import {
  WebSocialShareEmailAttributes,
  WebSocialShareFacebookAttributes,
  WebSocialShareLinkedinAttributes,
  WebSocialSharePinterestAttributes,
  WebSocialShareRedditAttributes,
  WebSocialShareTwiterAttributes
} from './web-social-share-attributes';

export interface WebSocialShareInput {
  hideNames?: boolean;

  facebook?: WebSocialShareFacebookAttributes;
  twitter?: WebSocialShareTwiterAttributes;
  email?: WebSocialShareEmailAttributes;
  linkedin?: WebSocialShareLinkedinAttributes;
  pinterest?: WebSocialSharePinterestAttributes;
  reddit?: WebSocialShareRedditAttributes;
}

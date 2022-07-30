export interface WebSocialShareDisplayAttributes {
  brandName?: string;
}

export interface WebSocialShareUrlAttributes extends WebSocialShareDisplayAttributes {
  socialShareUrl?: string;
}

export interface WebSocialSharePlatformAttributes extends WebSocialShareUrlAttributes {
  openWindowTarget?: string;
}

export interface WebSocialShareWithTextAttributes extends WebSocialSharePlatformAttributes {
  socialShareText?: string;
}

export interface WebSocialShareFacebookAttributes extends WebSocialSharePlatformAttributes {
  socialShareType?: 'send' | 'share' | 'feed';
  socialShareVia?: string;
  socialShareRedirectUri?: string;
  socialShareTo?: string;
  socialShareDisplay?: string;
  socialShareRef?: string;
  socialShareFrom?: string;
  socialShareSource?: string;
  socialShareQuote?: string;
  socialShareMobileiframe?: string;
  socialShareHashtags?: string;
}

export interface WebSocialShareTwitterAttributes extends WebSocialShareWithTextAttributes {
  socialShareVia?: string;
  socialShareHashtags?: string;
}

export interface WebSocialShareLinkedinAttributes extends WebSocialShareWithTextAttributes {
  socialShareDescription?: string;
  socialShareSource?: string;
}

export interface WebSocialSharePinterestAttributes extends WebSocialShareWithTextAttributes {
  socialShareMedia?: string;
}

export interface WebSocialShareRedditAttributes extends WebSocialShareWithTextAttributes {
  socialShareSubreddit?: string;
}

export interface WebSocialShareEmailAttributes extends WebSocialShareDisplayAttributes {
  socialShareTo?: string;
  socialShareBody?: string;
  socialShareSubject?: string;
  socialShareCc?: string;
  socialShareBcc?: string;
}

export interface WebSocialShareWhatsappAttributes extends WebSocialShareWithTextAttributes {}

export interface WebSocialShareHackerNewsAttributes extends WebSocialShareWithTextAttributes {}

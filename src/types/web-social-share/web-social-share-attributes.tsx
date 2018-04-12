export interface WebSocialShareAttributes {
  socialSharePopupWidth?: number;
  socialSharePopupHeight?: number;
}

export interface WebSocialShareFacebookAttributes extends WebSocialShareAttributes {
  socialShareType?: string;
  socialShareVia?: string;
  socialShareRedirectUri?: string;
  socialShareUrl?: string;
  socialShareTo?: string;
  socialShareDisplay?: string;
  socialShareRef?: string;
  socialShareFrom?: string;
  socialShareSource?: string;
  socialShareQuote?: string;
  socialShareMobileiframe?: string;
  socialShareHashtags?: string;
}

export interface WebSocialShareTwiterAttributes extends WebSocialShareAttributes {
  socialShareText?: string;
  socialShareVia?: string;
  socialShareHashtags?: string;
  socialShareUrl?: string;
}

import {Component, Prop} from '@stencil/core';

import {WebSocialShareFacebook} from '../../utils/web-social-share/web-social-share-facebook';
import {WebSocialShareInput} from '../../types/web-social-share/web-social-share-input';
import {WebSocialShareTwitter} from '../../utils/web-social-share/web-social-share-twitter';
import {WebSocialShareEmail} from '../../utils/web-social-share/web-social-share-email';
import {WebSocialShareLinkedin} from '../../utils/web-social-share/web-social-share-linkedin';
import {WebSocialSharePinterest} from '../../utils/web-social-share/web-social-share-pinterest';
import {WebSocialShareReddit} from '../../utils/web-social-share/web-social-share-reddit';

@Component({
  tag: 'web-social-share-target',
  styleUrl: 'web-social-share-target.scss',
  shadow: true
})
export class WebSocialShareTarget {

  @Prop() share: WebSocialShareInput;

  private handleFacebookShare() {
    WebSocialShareFacebook.share(this.share.facebook);
  }

  private handleTwitterShare() {
    WebSocialShareTwitter.share(this.share.twitter);
  }

  private handleEmailShare() {
    WebSocialShareEmail.share(this.share.email);
  }

  private handleLinkedinShare() {
    WebSocialShareLinkedin.share(this.share.linkedin);
  }

  private handlePinterestShare() {
    WebSocialSharePinterest.share(this.share.pinterest);
  }

  private handleRedditShare() {
    WebSocialShareReddit.share(this.share.reddit);
  }

  render() {
    if (this.share.facebook) {
      return (
        <button onClick={() => this.handleFacebookShare()}>Share with Facebook</button>
      );
    } else if (this.share.twitter) {
      return (
        <button onClick={() => this.handleTwitterShare()}>Share with Twitter</button>
      );
    } else if (this.share.email) {
      return (
        <button onClick={() => this.handleEmailShare()}>Share with Email</button>
      );
    } else if (this.share.linkedin) {
      return (
        <button onClick={() => this.handleLinkedinShare()}>Share with Linkedin</button>
      );
    } else if (this.share.pinterest) {
      return (
        <button onClick={() => this.handlePinterestShare()}>Share with Pinterest</button>
      );
    } else if (this.share.reddit) {
      return (
        <button onClick={() => this.handleRedditShare()}>Share with Reddit</button>
      );
    } else {
      return (
        <div></div>
      )
    }

  }

}

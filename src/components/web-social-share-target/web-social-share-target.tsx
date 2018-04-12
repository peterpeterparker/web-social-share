import {Component, Prop} from '@stencil/core';

import {WebSocialShareFacebook} from '../../utils/web-social-share/web-social-share-facebook';
import {WebSocialShareInput} from '../../types/web-social-share/web-social-share-input';
import {WebSocialShareTwitter} from '../../utils/web-social-share/web-social-share-twitter';

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

  render() {
    if (this.share.facebook) {
      return (
        <button onClick={() => this.handleFacebookShare()}>Share with Facebook</button>
      );
    } else if (this.share.twitter) {
      return (
        <button onClick={() => this.handleTwitterShare()}>Share with Twitter</button>
      );
    } else {
      return (
        <div></div>
      )
    }

  }

}

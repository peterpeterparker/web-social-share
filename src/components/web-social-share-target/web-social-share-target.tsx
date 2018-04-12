import {Component, Prop} from '@stencil/core';
import {WebSocialShareFacebook} from '../../utils/web-social-share/web-social-share-facebook';
import {WebSocialShareInput} from '../../types/web-social-share/web-social-share-input';

@Component({
  tag: 'web-social-share-target',
  styleUrl: 'web-social-share-target.scss',
  shadow: true
})
export class WebSocialShareTarget {

  @Prop() share: WebSocialShareInput;

  handleFacebookShare() {
    WebSocialShareFacebook.share(this.share.facebook);
  }

  render() {
    if (this.share.facebook) {
      return (
        <button onClick={() => this.handleFacebookShare()}>Share with Facebook</button>
      );
    } else {
      return (
        <div></div>
      )
    }

  }

}

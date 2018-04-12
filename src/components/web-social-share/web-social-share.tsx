import {Component, Prop} from '@stencil/core';
import {WebSocialShareInput} from '../../types/web-social-share/web-social-share-input';

@Component({
  tag: 'web-social-share',
  styleUrl: 'web-social-share.scss',
  shadow: true
})
export class WebSocialShare {

  @Prop() display: boolean;
  @Prop() share: WebSocialShareInput[];

  componentWillUpdate() {
    console.log(this.share);
  }

  render() {
    return (
      <div class={this.display ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close'}>
        Hello, World! I'm {this.display}
      </div>
    );
  }
}

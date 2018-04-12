import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'web-social-share',
  styleUrl: 'web-social-share.scss',
  shadow: true
})
export class WebSocialShare {

  @Prop() display: boolean;

  render() {
    return (
      <div class={this.display ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close'}>
        Hello, World! I'm {this.display}
      </div>
    );
  }
}

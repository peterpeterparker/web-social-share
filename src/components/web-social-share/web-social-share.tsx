import {Component, Prop} from '@stencil/core';
import {WebSocialShareInput} from '../../types/web-social-share/web-social-share-input';

@Component({
  tag: 'web-social-share',
  styleUrl: 'web-social-share.scss',
  shadow: true
})
export class WebSocialShare {

  @Prop({ mutable: true }) display: boolean;
  @Prop() share: WebSocialShareInput[];

  hide() {
    this.display = false;
  }

  render() {
    return (
      <div class={this.display ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close'} onClick={() => this.hide()}>
        <div class='web-social-share-action-sheet'>
          {this.share.map((shareInput: WebSocialShareInput) =>
            <web-social-share-target share={shareInput}></web-social-share-target>
          )}
        </div>
      </div>
    );
  }
}

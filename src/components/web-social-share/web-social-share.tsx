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
      <div class={this.display ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close'}>
        <div class='web-social-share-backdrop' onClick={() => this.hide()}></div>

        <div class='web-social-share-action-sheet'>
          <div class='web-social-share-action-sheet-container'>
            <div class='web-social-share-action-sheet-group'>
              {this.share.map((shareInput: WebSocialShareInput) =>
                <web-social-share-target share={shareInput}></web-social-share-target>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

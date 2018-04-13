import {Component, Element, Listen, Prop} from '@stencil/core';
import {WebSocialShareInput} from '../../types/web-social-share/web-social-share-input';

@Component({
  tag: 'web-social-share',
  styleUrl: 'web-social-share.scss',
  shadow: true
})
export class WebSocialShare {

  @Element() el: HTMLElement;

  @Prop({ mutable: true }) show: boolean;
  @Prop() share: WebSocialShareInput[];

  @Listen('selected')
  hide() {
    let element: HTMLElement = this.el.shadowRoot.querySelector('div:first-of-type');
    if (element) {
     element.classList.add('web-social-share-transition-close');

      setTimeout(() => {
        // Reflect css animation speed 400ms, see css
        this.show = false;
        element.classList.remove('web-social-share-transition-close');
      }, 400);
    } else {
      // Well we don't find the action sheet, we could mark it as not displayed
      this.show = false;
    }
  }

  render() {
    return (
      <div class={this.show ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close'}>
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

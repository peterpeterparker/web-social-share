import {Component, Element, Event, EventEmitter, Listen, Prop, h} from '@stencil/core';
import {WebSocialShareInput, WebSocialShareInputConfig} from '../../types/web-social-share/web-social-share-input';

@Component({
  tag: 'web-social-share',
  styleUrl: 'web-social-share.scss',
  shadow: true
})
export class WebSocialShare {

  @Element() el: HTMLElement;

  @Event() closed: EventEmitter;

  @Prop({ mutable: true }) show: boolean;
  @Prop() share: WebSocialShareInput;

  @Listen('socialShareLoaded')
  async moveSlotOnLoad(event: CustomEvent) {
    if (!event || !event.detail) {
      return;
    }

    await this.moveSlot(event.detail);
  }

  private moveSlot(name: string): Promise<void> {
    return new Promise<void>((resolve) => {
      const slot: HTMLElement = this.el.querySelector('[slot=\'' + name + '\']');

      const element: HTMLWebSocialShareTargetElement = this.el.shadowRoot.querySelector('web-social-share-target.web-social-share-'  + name);

      if (element && slot) {
        element.appendChild(slot);
      }

      resolve();
    });
  }

  @Listen('selected')
  hide() {
    let element: HTMLElement = this.el.shadowRoot.querySelector('div.web-social-share');
    if (element) {
     element.classList.add('web-social-share-transition-close');

      setTimeout(() => {
        // Reflect css animation speed 400ms, see css
        this.show = false;
        element.classList.remove('web-social-share-transition-close');

        this.closed.emit(true);
      }, 200);
    } else {
      // Well we don't find the action sheet, we could mark it as not displayed
      this.show = false;
      this.closed.emit(true);
    }
  }

  render() {
    return (
      <div class={this.show ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close'}>
        <div class='web-social-share-backdrop' onClick={() => this.hide()}></div>

        <div class='web-social-share-action-sheet' onClick={() => this.hide()}>
          <div class='web-social-share-action-sheet-container'>
            <div class='web-social-share-action-sheet-group'>
              {this.renderTargets()}
            </div>
          </div>
        </div>
        <slot name="facebook"></slot>
        <slot name="twitter"></slot>
        <slot name="email"></slot>
        <slot name="linkedin"></slot>
        <slot name="pinterest"></slot>
        <slot name="reddit"></slot>
        <slot name="whatsapp"></slot>
      </div>
    );
  }

  private renderTargets() {
    if (!this.share || !this.share.config) {
      return (
        <span></span>
      );
    } else {
      return (
        this.share.config.map((config: WebSocialShareInputConfig) =>
          <web-social-share-target displayNames={this.share.displayNames} share={config}></web-social-share-target>
        )
      );
    }
  }
}

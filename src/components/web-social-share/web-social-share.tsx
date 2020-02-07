import {Component, Element, Event, EventEmitter, Prop, h} from '@stencil/core';

import {WebSocialShareInput, WebSocialShareInputConfig} from '../../types/web-social-share/web-social-share-input';
import {WebSocialShareFacebook} from '../../utils/web-social-share/web-social-share-facebook';
import {WebSocialShareTwitter} from '../../utils/web-social-share/web-social-share-twitter';
import {WebSocialShareEmail} from '../../utils/web-social-share/web-social-share-email';
import {WebSocialShareLinkedin} from '../../utils/web-social-share/web-social-share-linkedin';
import {WebSocialSharePinterest} from '../../utils/web-social-share/web-social-share-pinterest';
import {WebSocialShareReddit} from '../../utils/web-social-share/web-social-share-reddit';
import {WebSocialShareWhatsapp} from '../../utils/web-social-share/web-social-share-whatsapp';
import {WebSocialShareCopy} from '../../utils/web-social-share/web-social-share-copy';
import {
  WebSocialShareDisplayAttributes
} from '../../types/web-social-share/web-social-share-attributes';
import {WebSocialShareHackerNews} from '../../utils/web-social-share/web-social-share-hackernews';

@Component({
  tag: 'web-social-share',
  styleUrl: 'web-social-share.scss',
  shadow: true
})
export class WebSocialShare {

  @Element() el: HTMLElement;

  @Event() closed: EventEmitter;

  @Prop({mutable: true}) show: boolean;
  @Prop() share: WebSocialShareInput;

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
          <div class="web-social-share-target">
            {this.renderButtons(config)}
          </div>
        )
      );
    }
  }

  private renderButtons(share: WebSocialShareInputConfig) {
    if (share.facebook) {
      return this.renderButton(share.facebook, this.handleFacebookShare, 'Facebook');
    } else if (share.twitter) {
      return this.renderButton(share.facebook, this.handleTwitterShare, 'Twitter');
    } else if (share.email) {
      return this.renderButton(share.facebook, this.handleEmailShare, 'Email');
    } else if (share.linkedin) {
      return this.renderButton(share.facebook, this.handleLinkedinShare, 'Linkedin');
    } else if (share.pinterest) {
      return this.renderButton(share.facebook, this.handlePinterestShare, 'Pinterest');
    } else if (share.reddit) {
      return this.renderButton(share.reddit, this.handleRedditShare, 'Reddit');
    } else if (share.whatsapp) {
      return this.renderButton(share.whatsapp, this.handleWhatsappShare, 'WhatsApp');
    } else if (share.copy) {
      return this.renderButton(share.copy, this.handleCopyShare, 'Copy');
    } else if (share.hackernews) {
      return this.renderButton(share.hackernews, this.handleHackerNewsShare, 'Hacker News');
    } else {
      return undefined;
    }

  }

  private renderButton(attributes: WebSocialShareDisplayAttributes, action: ($event, attributes: WebSocialShareDisplayAttributes) => void, defaultBrandName: string) {
    return (
      <button onClick={($event) => action($event, attributes)}
              class='web-social-share-button'>
        <div class="web-social-share-button-icon">
          <slot name="facebook"></slot>
        </div>
        {this.renderName(attributes, defaultBrandName)}
      </button>
    );
  }

  private handleFacebookShare = ($event, attributes: WebSocialShareDisplayAttributes) => {
    $event.stopPropagation();

    WebSocialShareFacebook.share(attributes);
    this.hide();
  };

  private handleTwitterShare = ($event, attributes: WebSocialShareDisplayAttributes) => {
    $event.stopPropagation();

    WebSocialShareTwitter.share(attributes);
    this.hide();
  };

  private handleEmailShare = ($event, attributes: WebSocialShareDisplayAttributes) => {
    $event.stopPropagation();

    WebSocialShareEmail.share(attributes);
    this.hide();
  };

  private handleLinkedinShare = ($event, attributes: WebSocialShareDisplayAttributes) => {
    $event.stopPropagation();

    WebSocialShareLinkedin.share(attributes);
    this.hide();
  };

  private handlePinterestShare = ($event, attributes: WebSocialShareDisplayAttributes) => {
    $event.stopPropagation();

    WebSocialSharePinterest.share(attributes);
    this.hide();
  };

  private handleRedditShare = ($event, attributes: WebSocialShareDisplayAttributes) => {
    $event.stopPropagation();

    WebSocialShareReddit.share(attributes);
    this.hide();
  };

  private handleWhatsappShare = ($event, attributes: WebSocialShareDisplayAttributes) => {
    $event.stopPropagation();

    WebSocialShareWhatsapp.share(attributes);
    this.hide();
  };

  private handleCopyShare = async ($event, attributes: WebSocialShareDisplayAttributes) => {
    $event.stopPropagation();

    await WebSocialShareCopy.share(attributes);
    this.hide();
  };

  private handleHackerNewsShare = async ($event, attributes: WebSocialShareDisplayAttributes) => {
    $event.stopPropagation();

    WebSocialShareHackerNews.share(attributes);
    this.hide();
  };

  private renderName(displayAttributes: WebSocialShareDisplayAttributes, defaultBrandName: string) {
    if (this.share.displayNames) {
      return (
        <p>{displayAttributes && displayAttributes.brandName && displayAttributes.brandName !== '' ? displayAttributes.brandName : defaultBrandName}</p>
      );
    } else {
      return (
        <span></span>
      );
    }
  }
}

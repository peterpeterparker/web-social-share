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
            {this.renderButton(config)}
          </div>
        )
      );
    }
  }

  private renderButton(share: WebSocialShareInputConfig) {
    if (share.facebook) {
      return (
        <button onClick={($event) => this.handleFacebookShare($event, share)}
                class='web-social-share-button web-social-share-button-facebook'>
          <div class="web-social-share-button-icon">
            <slot name="facebook"></slot>
          </div>
          {this.renderName(share.facebook, 'Facebook')}
        </button>
      );
    } else if (share.twitter) {
      return (
        <button onClick={($event) => this.handleTwitterShare($event, share)}
                class='web-social-share-button web-social-share-button-twitter'>
          <div class="web-social-share-button-icon">
            <slot name="twitter"></slot>
          </div>
          {this.renderName(share.twitter, 'Twitter')}
        </button>
      );
    } else if (share.email) {
      return (
        <button onClick={($event) => this.handleEmailShare($event, share)}
                class='web-social-share-button web-social-share-button-email'>
          <div class="web-social-share-button-icon">
            <slot name="email"></slot>
          </div>
          {this.renderName(share.email, 'Email')}
        </button>
      );
    } else if (share.linkedin) {
      return (
        <button onClick={($event) => this.handleLinkedinShare($event, share)}
                class='web-social-share-button web-social-share-button-linkedin'>
          <div class="web-social-share-button-icon">
            <slot name="linkedin"></slot>
          </div>
          {this.renderName(share.linkedin, 'Linkedin')}
        </button>
      );
    } else if (share.pinterest) {
      return (
        <button onClick={($event) => this.handlePinterestShare($event, share)}
                class='web-social-share-button web-social-share-button-pinterest'>
          <div class="web-social-share-button-icon">
            <slot name="pinterest"></slot>
          </div>
          {this.renderName(share.pinterest, 'Pinterest')}
        </button>
      );
    } else if (share.reddit) {
      return (
        <button onClick={($event) => this.handleRedditShare($event, share)}
                class='web-social-share-button web-social-share-button-reddit'>
          <div class="web-social-share-button-icon">
            <slot name="reddit"></slot>
          </div>
          {this.renderName(share.reddit, 'Reddit')}
        </button>
      );
    } else if (share.whatsapp) {
      return (
        <button onClick={($event) => this.handleWhatsappShare($event, share)}
                class='web-social-share-button web-social-share-button-whatsapp'>
          <div class="web-social-share-button-icon">
            <slot name="whatsapp"></slot>
          </div>
          {this.renderName(share.whatsapp, 'WhatsApp')}
        </button>
      );
    } else if (share.copy) {
      return (
        <button onClick={($event) => this.handleCopyShare($event, share)}
                class='web-social-share-button web-social-share-button-copy'>
          <div class="web-social-share-button-icon">
            <slot name="copy"></slot>
          </div>
          {this.renderName(share.copy, 'Copy')}
        </button>
      );
    } else if (share.hackernews) {
      return (
        <button onClick={($event) => this.handleHackerNewsShare($event, share)}
                class='web-social-share-button web-social-share-button-hackernews'>
          <div class="web-social-share-button-icon">
            <slot name="hackernews"></slot>
          </div>
          {this.renderName(share.hackernews, 'Hacker News')}
        </button>
      );
    } else {
      return (
        <div></div>
      )
    }

  }

  private handleFacebookShare($event, share: WebSocialShareInputConfig) {
    $event.stopPropagation();

    WebSocialShareFacebook.share(share.facebook);
    this.hide();
  }

  private handleTwitterShare($event, share: WebSocialShareInputConfig) {
    $event.stopPropagation();

    WebSocialShareTwitter.share(share.twitter);
    this.hide();
  }

  private handleEmailShare($event, share: WebSocialShareInputConfig) {
    $event.stopPropagation();

    WebSocialShareEmail.share(share.email);
    this.hide();
  }

  private handleLinkedinShare($event, share: WebSocialShareInputConfig) {
    $event.stopPropagation();

    WebSocialShareLinkedin.share(share.linkedin);
    this.hide();
  }

  private handlePinterestShare($event, share: WebSocialShareInputConfig) {
    $event.stopPropagation();

    WebSocialSharePinterest.share(share.pinterest);
    this.hide();
  }

  private handleRedditShare($event, share: WebSocialShareInputConfig) {
    $event.stopPropagation();

    WebSocialShareReddit.share(share.reddit);
    this.hide();
  }

  private handleWhatsappShare($event, share: WebSocialShareInputConfig) {
    $event.stopPropagation();

    WebSocialShareWhatsapp.share(share.whatsapp);
    this.hide();
  }

  private async handleCopyShare($event, share: WebSocialShareInputConfig) {
    $event.stopPropagation();

    await WebSocialShareCopy.share(share.copy);
    this.hide();
  }

  private async handleHackerNewsShare($event, share: WebSocialShareInputConfig) {
    $event.stopPropagation();

    await WebSocialShareHackerNews.share(share.hackernews);
    this.hide();
  }

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

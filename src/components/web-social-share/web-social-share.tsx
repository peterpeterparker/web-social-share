import {Component, Element, Event, EventEmitter, h, Prop} from '@stencil/core';

import {WebSocialShareDisplayAttributes} from '../../types/attributes';
import {WebSocialShareInput, WebSocialShareInputConfig} from '../../types/input';

import {copy} from '../../providers/copy';
import {dscvr} from '../../providers/dscvr';
import {email} from '../../providers/email';
import {shareFacebook} from '../../providers/facebook';
import {hackernews} from '../../providers/hackernews';
import {linkedin} from '../../providers/linkedin';
import {openchat} from '../../providers/openchat';
import {pinterest} from '../../providers/pinterest';
import {reddit} from '../../providers/reddit';
import {telegram} from '../../providers/telegram';
import {shareTwitter} from '../../providers/twitter';
import {whatsapp} from '../../providers/whatsapp';

/**
 * @slot facebook - A slot to display an icon or text for Facebook
 * @slot twitter - A slot to display an icon or text for Twitter
 * @slot email - A slot to display an icon or text for a shate to an email
 * @slot linkedin - A slot to display an icon or text for LinkedIn
 * @slot pinterest - A slot to display an icon or text for Pinterest
 * @slot whatsapp - A slot to display an icon or text for Whatsapp
 * @slot copy - A slot to display an icon or text to copy to clipboard
 * @slot hackernews - A slot to display an icon or text for Hackernews
 * @slot telegram - A slot to display an icon or text for Telegram
 * @slot openchat - A slot to display an icon or text for Openchat
 * @slot dscvr - A slot to display an icon or text for Dscvr
 */
@Component({
  tag: 'web-social-share',
  styleUrl: 'web-social-share.scss',
  shadow: true
})
export class WebSocialShare {
  @Element() el: HTMLElement;

  /**
   * An event triggered when the modal is `closed`
   */
  @Event() closed: EventEmitter<void>;

  /**
   * Trigger the display, or close, of the action sheet which contains the social-share options
   */
  @Prop({mutable: true}) show: boolean;

  /**
   * The share options
   */
  @Prop() share: WebSocialShareInput;

  private refContainer!: HTMLDivElement;

  private hide() {
    if (this.refContainer) {
      this.refContainer.classList.add('web-social-share-transition-close');

      setTimeout(() => {
        // Reflect css animation speed 400ms, see css
        this.show = false;
        this.refContainer.classList.remove('web-social-share-transition-close');

        this.closed.emit();
      }, 200);
    } else {
      // Well we don't find the action sheet, we could mark it as not displayed
      this.show = false;
      this.closed.emit();
    }
  }

  private async handleShare(
    $event,
    attributes: WebSocialShareDisplayAttributes,
    action: (attributes: WebSocialShareDisplayAttributes) => Promise<void>
  ) {
    $event.stopPropagation();

    await action(attributes);

    setTimeout(() => this.hide(), 250);
  }

  render() {
    return (
      <div
        class={
          this.show
            ? 'web-social-share web-social-share-open'
            : 'web-social-share web-social-share-close'
        }
        ref={(el) => (this.refContainer = el as HTMLDivElement)}>
        <div class="web-social-share-backdrop" onClick={() => this.hide()}></div>

        <div class="web-social-share-action-sheet" onClick={() => this.hide()}>
          <div class="web-social-share-action-sheet-container">
            <div class="web-social-share-action-sheet-group">{this.renderTargets()}</div>
          </div>
        </div>
      </div>
    );
  }

  private renderTargets() {
    if (!this.share?.config) {
      return undefined;
    }

    return this.share.config.map((config: WebSocialShareInputConfig) => (
      <div class="web-social-share-target">{this.renderButtons(config)}</div>
    ));
  }

  private renderButtons(share: WebSocialShareInputConfig) {
    if (share.facebook) {
      return this.renderButton(share.facebook, 'facebook', shareFacebook, 'Facebook');
    } else if (share.twitter) {
      return this.renderButton(share.twitter, 'twitter', shareTwitter, 'Twitter');
    } else if (share.email) {
      return this.renderButton(share.email, 'email', email, 'Email');
    } else if (share.linkedin) {
      return this.renderButton(share.linkedin, 'linkedin', linkedin, 'Linkedin');
    } else if (share.pinterest) {
      return this.renderButton(share.pinterest, 'pinterest', pinterest, 'Pinterest');
    } else if (share.reddit) {
      return this.renderButton(share.reddit, 'reddit', reddit, 'Reddit');
    } else if (share.whatsapp) {
      return this.renderButton(share.whatsapp, 'whatsapp', whatsapp, 'WhatsApp');
    } else if (share.copy) {
      return this.renderButton(share.copy, 'copy', copy, 'Copy');
    } else if (share.hackernews) {
      return this.renderButton(share.hackernews, 'hackernews', hackernews, 'Hacker News');
    } else if (share.telegram) {
      return this.renderButton(share.telegram, 'telegram', telegram, 'Telegram');
    } else if (share.openchat) {
      return this.renderButton(share.openchat, 'openchat', openchat, 'OpenChat');
    } else if (share.dscvr) {
      return this.renderButton(share.dscvr, 'dscvr', dscvr, 'DSCVR');
    }

    return undefined;
  }

  private renderButton(
    attributes: WebSocialShareDisplayAttributes,
    slotName:
      | 'facebook'
      | 'twitter'
      | 'pinterest'
      | 'linkedin'
      | 'reddit'
      | 'email'
      | 'copy'
      | 'whatsapp'
      | 'hackernews'
      | 'telegram'
      | 'openchat'
      | 'dscvr',
    action: (attributes: WebSocialShareDisplayAttributes) => Promise<void>,
    defaultBrandName: string
  ) {
    return (
      <button
        onClick={($event) => this.handleShare($event, attributes, action)}
        class="web-social-share-button">
        <div class="web-social-share-button-icon">
          <slot name={slotName}></slot>
        </div>
        {this.renderName(attributes, defaultBrandName)}
      </button>
    );
  }

  private renderName(displayAttributes: WebSocialShareDisplayAttributes, defaultBrandName: string) {
    if (this.share.displayNames) {
      return (
        <p>
          {displayAttributes && displayAttributes.brandName && displayAttributes.brandName !== ''
            ? displayAttributes.brandName
            : defaultBrandName}
        </p>
      );
    }

    return undefined;
  }
}

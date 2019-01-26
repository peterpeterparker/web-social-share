import {Component, Event, EventEmitter, Prop} from '@stencil/core';

import {WebSocialShareFacebook} from '../../utils/web-social-share/web-social-share-facebook';
import {WebSocialShareInputConfig} from '../../types/web-social-share/web-social-share-input';
import {WebSocialShareTwitter} from '../../utils/web-social-share/web-social-share-twitter';
import {WebSocialShareEmail} from '../../utils/web-social-share/web-social-share-email';
import {WebSocialShareLinkedin} from '../../utils/web-social-share/web-social-share-linkedin';
import {WebSocialSharePinterest} from '../../utils/web-social-share/web-social-share-pinterest';
import {WebSocialShareReddit} from '../../utils/web-social-share/web-social-share-reddit';
import {WebSocialShareDisplayAttributes} from '../../types/web-social-share/web-social-share-attributes';

@Component({
  tag: 'web-social-share-target',
  styleUrl: 'web-social-share-target.scss'
})
export class WebSocialShareTarget {

  @Prop() displayNames: boolean = false;
  @Prop() share: WebSocialShareInputConfig;

  @Event() selected: EventEmitter<void>;

  @Event() socialShareLoaded: EventEmitter<string>;

  async componentDidLoad() {
    await this.emitSocialShareLoaded();
  }

  private emitSocialShareLoaded(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.share.facebook) {
        this.socialShareLoaded.emit('facebook');
      } else if (this.share.twitter) {
        this.socialShareLoaded.emit('twitter');
      } else if (this.share.email) {
        this.socialShareLoaded.emit('email');
      } else if (this.share.linkedin) {
        this.socialShareLoaded.emit('linkedin');
      } else if (this.share.pinterest) {
        this.socialShareLoaded.emit('pinterest');
      } else if (this.share.reddit) {
        this.socialShareLoaded.emit('reddit');
      }

      resolve();
    });
  }

  private handleFacebookShare($event) {
    $event.stopPropagation();

    WebSocialShareFacebook.share(this.share.facebook);
    this.selected.emit();
  }

  private handleTwitterShare($event) {
    $event.stopPropagation();

    WebSocialShareTwitter.share(this.share.twitter);
    this.selected.emit();
  }

  private handleEmailShare($event) {
    $event.stopPropagation();

    WebSocialShareEmail.share(this.share.email);
    this.selected.emit();
  }

  private handleLinkedinShare($event) {
    $event.stopPropagation();

    WebSocialShareLinkedin.share(this.share.linkedin);
    this.selected.emit();
  }

  private handlePinterestShare($event) {
    $event.stopPropagation();

    WebSocialSharePinterest.share(this.share.pinterest);
    this.selected.emit();
  }

  private handleRedditShare($event) {
    $event.stopPropagation();

    WebSocialShareReddit.share(this.share.reddit);
    this.selected.emit();
  }

  render() {
    if (this.share.facebook) {
      return (
        <button onClick={($event) => this.handleFacebookShare($event)} class='web-social-share-button web-social-share-button-facebook'>
          {this.renderIcon(this.share.facebook)}
          {this.renderName(this.share.facebook, 'Facebook')}
        </button>
      );
    } else if (this.share.twitter) {
      return (
        <button onClick={($event) => this.handleTwitterShare($event)} class='web-social-share-button web-social-share-button-twitter'>
          {this.renderIcon(this.share.twitter)}
          {this.renderName(this.share.twitter, 'Twitter')}
        </button>
      );
    } else if (this.share.email) {
      return (
        <button onClick={($event) => this.handleEmailShare($event)} class='web-social-share-button web-social-share-button-email'>
          {this.renderIcon(this.share.email)}
          {this.renderName(this.share.email, 'Email')}
        </button>
      );
    } else if (this.share.linkedin) {
      return (
        <button onClick={($event) => this.handleLinkedinShare($event)} class='web-social-share-button web-social-share-button-linkedin'>
          {this.renderIcon(this.share.linkedin)}
          {this.renderName(this.share.linkedin, 'Linkedin')}
        </button>
      );
    } else if (this.share.pinterest) {
      return (
        <button onClick={($event) => this.handlePinterestShare($event)} class='web-social-share-button web-social-share-button-pinterest'>
          {this.renderIcon(this.share.pinterest)}
          {this.renderName(this.share.pinterest, 'Pinterest')}
        </button>
      );
    } else if (this.share.reddit) {
      return (
        <button onClick={($event) => this.handleRedditShare($event)} class='web-social-share-button web-social-share-button-reddit'>
          {this.renderIcon(this.share.reddit)}
          {this.renderName(this.share.reddit, 'Reddit')}
        </button>
      );
    } else {
      return (
        <div></div>
      )
    }

  }

  private renderIcon(displayAttributes: WebSocialShareDisplayAttributes) {
    if (displayAttributes.iconStyleclass && displayAttributes.iconStyleclass !== '') {
      return (
        <i class={displayAttributes.iconStyleclass}></i>
      );
    } else {
      return (
        <span></span>
      );
    }
  }

  private renderName(displayAttributes: WebSocialShareDisplayAttributes, defaultBrandName: string) {
    if (this.displayNames) {
      return (
        <p>{displayAttributes && displayAttributes.brandName && displayAttributes.brandName !== '' ? displayAttributes.brandName : defaultBrandName}</p>
      );
    } else {
      return (
        <span></span>
      );
    }
  }

  hostData() {
    return {
      class: {
        'web-social-share-facebook': this.share.facebook,
        'web-social-share-twitter': this.share.twitter,
        'web-social-share-email': this.share.email,
        'web-social-share-linkedin': this.share.linkedin,
        'web-social-share-pinterest': this.share.pinterest,
        'web-social-share-reddit': this.share.reddit
      }
    }
  }


}

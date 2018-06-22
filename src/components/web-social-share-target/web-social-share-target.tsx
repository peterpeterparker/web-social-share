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

  @Event() selected: EventEmitter;

  private handleFacebookShare() {
    WebSocialShareFacebook.share(this.share.facebook);
    this.selected.emit();
  }

  private handleTwitterShare() {
    WebSocialShareTwitter.share(this.share.twitter);
    this.selected.emit();
  }

  private handleEmailShare() {
    WebSocialShareEmail.share(this.share.email);
    this.selected.emit();
  }

  private handleLinkedinShare() {
    WebSocialShareLinkedin.share(this.share.linkedin);
    this.selected.emit();
  }

  private handlePinterestShare() {
    WebSocialSharePinterest.share(this.share.pinterest);
    this.selected.emit();
  }

  private handleRedditShare() {
    WebSocialShareReddit.share(this.share.reddit);
    this.selected.emit();
  }

  render() {
    if (this.share.facebook) {
      return (
        <button onClick={() => this.handleFacebookShare()} class='web-social-share-button web-social-share-button-facebook'>
          {this.renderIcon(this.share.facebook)}
          {this.renderName('Facebook')}
        </button>
      );
    } else if (this.share.twitter) {
      return (
        <button onClick={() => this.handleTwitterShare()} class='web-social-share-button web-social-share-button-twitter'>
          {this.renderIcon(this.share.twitter)}
          {this.renderName('Twitter')}
        </button>
      );
    } else if (this.share.email) {
      return (
        <button onClick={() => this.handleEmailShare()} class='web-social-share-button web-social-share-button-email'>
          {this.renderIcon(this.share.email)}
          {this.renderName('Email')}
        </button>
      );
    } else if (this.share.linkedin) {
      return (
        <button onClick={() => this.handleLinkedinShare()} class='web-social-share-button web-social-share-button-linkedin'>
          {this.renderIcon(this.share.linkedin)}
          {this.renderName('Linkedin')}
        </button>
      );
    } else if (this.share.pinterest) {
      return (
        <button onClick={() => this.handlePinterestShare()} class='web-social-share-button web-social-share-button-pinterest'>
          {this.renderIcon(this.share.pinterest)}
          {this.renderName('Pinterest')}
        </button>
      );
    } else if (this.share.reddit) {
      return (
        <button onClick={() => this.handleRedditShare()} class='web-social-share-button web-social-share-button-reddit'>
          {this.renderIcon(this.share.reddit)}
          {this.renderName('Reddit')}
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

  private renderName(brandName: string) {
    if (this.displayNames) {
      return (
        <p>{brandName}</p>
      );
    } else {
      return (
        <span></span>
      );
    }
  }


}

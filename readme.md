# Web Social Share

Web Social Share is a Web Component to share urls and text.

[![version](https://img.shields.io/npm/v/web-social-share/latest.svg?color=blue)](https://github.com/peterpeterparker/web-social-share)
[![npm](https://img.shields.io/npm/dm/web-social-share.svg)]()

## Table of contents

- [Goals](#goals)
- [Features](#features)
- [Installation](#installation)
- [Integration](#integration)
- [Getting Started](#getting-started)
  - [show](#show)
  - [share](#share)
    - [Example](#example)
    - [Vanilla JS](#vanilla-js)
- [Slots](#slots)
  - [Styling your icons](#styling-your-icons)
- [Theming](#theming)
- [Events](#events)
- [Fallback and detection](#fallback-and-detection)
- [Web Share API](#web-share-api)
- [Showcase](#showcase)
- [Theming](#theming)
- [Credits](#credits)
- [License](#license)

## Goals

The idea behind this web component was to add a "social share" feature to Progressive Web Apps (pwa).

Nowadays, the [Web Share API](https://developer.mozilla.org/fr/docs/Web/API/Navigator/share) is supported by most recent mobile OS.

Even though, it may remain interesting to use such a component for the desktop version of web apps.

## Features

The component present a dialog which contains the sharing options you selected.

Following target are currently supported:

- Facebook
- Twitter
- Email
- Linkedin
- Pinterest
- Reddit
- WhatsApp
- Hacker News
- Copy (to clipboard)

## Installation

```
$ npm install web-social-share
```

## Integration

This Web Component is developed with [Stencil](https://stenciljs.com).

The [Stencil documentation](https://stenciljs.com/docs/overview) provide examples of Javascript and framework integration for [Angular](https://stenciljs.com/docs/angular), [React](https://stenciljs.com/docs/react), [Vue](https://stenciljs.com/docs/vue) and [Ember](https://stenciljs.com/docs/ember).

## Getting Started

The Web Social Share Component can be use like following:

```
<web-social-share show={true} share={options}></web-social-share>
```

Both `show` and `share` are mandatory.

### show

Trigger the display, or close, of the action sheet which contains the social-share options.

`show` is a **boolean** parameter

### share

For details about them you could have a look to the interface `WebSocialShareInput` located under folder `src/types/web-social-share/`.

`share` is a property of type **WebSocialShareInput**.

Note: `share` is an object. Therefore, it has to be parsed with JavaScript if you use the component in a vanilla Javascript application.

#### Example

For example, if you would like to allow your users to share a website through Facebook and Twitter, you could define basic options like following:

```
const share = {
    config: [{
          facebook: {
            socialShareUrl: 'https://peterpeterparker.io'
          }
        },{
          twitter: {
            socialShareUrl: 'https://peterpeterparker.io'
          }
    }]
};
```

If you would like to display the action default name, you could extend your configuration using the attribute `displayNames` like the following:

```
const share = {
    displayNames: true,
    config: [{
          facebook: {
            socialShareUrl: 'https://peterpeterparker.io'
          }
        },{
          twitter: {
            socialShareUrl: 'https://peterpeterparker.io'
          }
    }]
};
```

Worth to notice, you could also provide your own custom brand name, for example in case you would translate the word `Email`, for example:

```
const share = {
    displayNames: true,
    config: [{
          email: {
            brandName: 'E-Mail-Adresse',
            socialShareTo: 'me@outlook.com',
            socialShareBody: 'https://peterpeterparker.io'
          }
    }]
};
```

### Slots

Slots have to be used to display the icon or text for your actions.

The available slots are: `facebook`, `twitter`, `pinterest`, `linkedin`, `reddit`, `email`, `copy`, `hackernews` and `whatsapp`.

NOTE: Slot names MUST be lower case.
```
<web-social-share show="false">
    <i class="fab fa-reddit" slot="reddit" style="color: #cee3f8;"></ion-icon>
</web-social-share>

const share = [{
    reddit: {
      socialShareUrl: 'https://peterpeterparker.io',
      socialSharePopupWidth: 300,
      socialSharePopupHeight: 500
    }
  }
}];
```

> Note that you may have to add the `style="display: block"` on the slotted elements, notably if you would use `<ion-icon/>`, for them to be shown.

#### Styling your icons

The style of your icons is up to you and have to be applied on the icons provided as `slots`.

For example:

```
<web-social-share show="false">
    <i class="fab fa-twitter" slot="twitter" style="color: #00aced; width: 1.4rem;"></i>
</web-social-share>
```

## Theming

The following CSS variables are exposed by the component:

| CSS4 variable                                       | Default                     | Note                                                                                        |
| --------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------- |
| --web-social-share-backdrop-opacity                 | 0.25                        | Backdrop opacity                                                                            |
| --web-social-share-backdrop-background              | black                       | Backdrop background                                                                         |
| --web-social-share-height                           | 80px                        | Action sheet height                                                                         |
| --web-social-share-height-small-device              | 140px                       | Action sheet height on device smaller than 540px                                            |
| --web-social-share-target-width                     | 4rem                        | An action container width                                                                   |
| --web-social-share-target-height                    | 3rem                        | An action container height                                                                  |
| --web-social-share-button-width                     | 100%                        | An action inner button width                                                                |
| --web-social-share-button-height                    | 100%                        | An action inner button height                                                               |
| --web-social-share-target-icon-container-height     | 2rem                        | An action icon container height                                                             |
| --web-social-share-button-font-size                 |                             | The font-size of an action button                                                           |
| --web-social-share-brand-font-size                  | 0.6rem                      | The font-size of an action brand name                                                       |
| --web-social-share-brand-color                      | inherit                     | The color of an action brand name                                                           |
| --web-social-share-brand-margin                     | 2px 0                       | A margin for the brand name                                                                 |
| --web-social-share-zindex                           | 1000                        | The base zIndex of the component                                                            |
| --web-social-share-action-sheet-group-box-shadow    | 0 0 8px 4px rgba(0,0,0,0.1) | A shadow around the action container                                                        |
| --web-social-share-action-sheet-group-background    | #fafafa                     | The background of the action container                                                      |
| --web-social-share-action-sheet-group-border-radius | 8px 8px 0 0                 | A border radius around the action container. Applied only if the windows is more than 540px |

## Events

The component trigger an event `closed` when the modal is close. It is emitted regardless if the user shared or not aka "just" closed it.

```
@Event() closed<void>();
```

Typically, this use case can be used to post process the data you pass to the component. For example, I use a store to handle these and listen to the event to clean it afterwards.

## Fallback and detection

This component is a dumb component. It do not proceed detection or fallback to anything in case one of the share options would not be supported by the device or browser where the component is used.

For example, the share options "Copy (to clipboard)" use the Web Api [Clipboard.writeText()](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText) which might not be supported. Anyway the action will be displayed and if used by the user, nothing will happen.

## Web Share API

When I develop web apps I generally develop a mixed solution between Web Share API and this component. If the Web Share API is supported, and maybe sometimes in combination to detecting desktop or mobile, I use the browser API. If not supported, I fallback on this component.

If interested to implement such a solution, check out the [blog post](https://dev.to/daviddalbusco/how-to-implement-the-web-share-api-with-a-fallback-b3) I published about it

## Showcase

A showcase is available at [https://websocialshare.com](https://websocialshare.com)

The above showcase is the `www` folder of this project deployed in Firebase. If you clone the repository you could run it locally using `npm run start`.

## Credits

I didn't want to reinvent the wheel when it comes to the sharing actions themselves. Therefore, I forked the features of [angular-socialshare](https://github.com/720kb/angular-socialshare). Kudos to [45kb](https://github.com/45kb) :+1:

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)

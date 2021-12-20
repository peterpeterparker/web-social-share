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
- Telegram
- Hacker News
- Copy (to clipboard)

## Installation

```
$ npm install web-social-share
```

## Integration

This Web Component is developed with [Stencil](https://stenciljs.com).

The [Stencil documentation](https://stenciljs.com/docs/overview) provide examples of Javascript and framework integration for [Angular](https://stenciljs.com/docs/angular), [React](https://stenciljs.com/docs/react), [Vue](https://stenciljs.com/docs/vue) and [Ember](https://stenciljs.com/docs/ember).

### NodeJS

Due to an [open issue in Stencil regarding ESM entry points](https://github.com/ionic-team/stencil/issues/2826), ESM resolution support in NodeJS for this package has been manually fixed by overriding the `module` field in _package.json_.  As long as your dev server / bundler supports the `module` field, you should be able to `import` the component like this:
```js
import 'web-social-share';
```

> _Note: as noted in the linked issue, one caveat is that this entry file uses template literals inside dynamic imports (e.g. `import(${x})`) so make sure this syntax is also supported by your environment.  For example, Rollup has [**@rollup/plugin-dynamic-import-vars**](https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars).

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

The available slots are: `facebook`, `twitter`, `pinterest`, `linkedin`, `reddit`, `email`, `copy`, `hackernews`, `whatsapp` and `telegram`.

These are sorted according the order of your configuration.

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

Checkout the auto-generated [readme.md](https://github.com/peterpeterparker/web-social-share/blob/main/src/components/web-social-share/readme.md) for the list of customizable CSS variables.

## Events

The component trigger an event `closed` when the modal is close. It is emitted regardless if the user shared or not aka "just" closed it.

```
@Event() closed<void>();
```

Typically, this use case can be used to post process the data you pass to the component. For example, I use a store to handle these and listen to the event to clean it afterwards.

## Fallback and detection

This component is a dumb component. It does not proceed detection or fallback to anything in case one of the share options would not be supported by the device or browser where the component is used.

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

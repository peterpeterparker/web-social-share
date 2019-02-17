# Web Social Share

Web Social Share is a Web Component for your PWA to share urls and content on social networks.

The component will present a dialog which will contains the different sharing options you selected.

[![GitHub](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/fluster/web-social-share)
[![npm](https://img.shields.io/npm/dm/web-social-share.svg)]()

## Table of contents

- [Web Social Share](#web-social-share)
	- [Goals](#goals)
	- [Installation](#installation)
		- [Integration in a Ionic v4 project](#integration-in-a-ionic-v4-project)
		- [Other frameworks integration](#other-frameworks-integration)
	- [Getting Started](#getting-started)
		- [show](#show)
		- [share](#share)
			- [Example](#example)
			- [Vanilla JS](#vanilla-js)
  - [Slots](#slots)
    - [Styling your icons](#styling-your-icons)  
	- [Showcase](#showcase)
	- [Theming](#theming)
	- [Credits](#credits)
	- [License](#license)

## Goals

The idea behind this web component was to add a "social share" feature to the progressive web app (pwa) version of my project [Fluster](https://fluster.io).

Furthermore, I thought that using and building an action sheet to do so would be user friendly.

## Installation

    $ npm install web-social-share

### Integration in a Ionic v4 project

Once the library installed, proceed then with following steps to integrate the component:

1. In the module where you would like to use the component, import and add `CUSTOM_ELEMENTS_SCHEMA` to your list of schemas

        @NgModule({
            declarations: [
                MyPage
            ],
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
        export class MyPageModule {
        }
        
2. In `index.html` import the component. As far as I understood, web component built with Stencil inherit Lazy Loading, therefore, no worries about effect on your boot time

         <script async src="websocialshare.js"></script>
         
3. Finally add the following to your `assets` configuration in your `angular.json` files in oder to include the component in your bundle

       "assets": [
           {
             "glob": "websocialshare.js",
             "input": "node_modules/web-social-share/dist",
             "output": "./"
           },
           {
             "glob": "websocialshare/*",
             "input": "node_modules/web-social-share/dist",
             "output": "./"
           }
       ]

### Other frameworks integration

The [Stencil documentation](https://stenciljs.com/docs/overview) provide examples of framework integration for [Angular](https://stenciljs.com/docs/angular), [React](https://stenciljs.com/docs/react), [Vue](https://stenciljs.com/docs/vue) and [Ember](https://stenciljs.com/docs/ember).

## Getting Started

The Web Social Share Component could be use like following:

    <web-social-share [show]="true" [share]="options" (closed)="close()"></web-social-share>

Both `show` and `share` are mandatory.

### show

Trigger the display or closing of the action sheet presenting the social-share options you have selected.

`show` is a **boolean** parameter

### share

These are your share options. For details about them you could have a look to the interface `WebSocialShareInput` located under folder `src/types/web-social-share/`.

`share` is a parameter of type **WebSocialShareInput**

#### Example

For example, if you would like to allow your users to share a website thru Facebook and Twitter, you could define basic options like following:

    const share = {
        config: [{
              facebook: {
                socialShareUrl: 'https://fluster.io'
              }
            },{
              twitter: {
                socialShareUrl: 'https://fluster.io'
              }
        }]
    };

If you would like to display the action default name, you could extend your configuration using the attribute `displayNames` like the following: 

    const share = {
        displayNames: true,
        config: [{
              facebook: {
                socialShareUrl: 'https://fluster.io'
              }
            },{
              twitter: {
                socialShareUrl: 'https://fluster.io'
              }
        }]
    };
    
Worth to notice, you could also provide your own custom brand name, for example in case you would translate the word `Email`, for example:

    const share = {
        displayNames: true,
        config: [{
              email: {
                brandName: 'E-Mail-Adresse',
                socialShareTo: 'me@outlook.com',
                socialShareBody: 'https://fluster.io'
              }
        }]
    };
    
#### Vanilla JS

For an example of Vanilla JS use, you could have a look to the `index.html` demo located in this repo under folder `src`.

### Slots

Slots has to be used to inject the icons for your actions in the component.

The available slots are: `facebook`, `twitter`, `pinterest`, `linkedin`, `reddit`, `email` and `whatsapp`.

```
<web-social-share show="false">
    <ion-icon name="logo-reddit" slot="reddit"></ion-icon>
</web-social-share>

const share = [{
    reddit: {
      socialShareUrl: 'https://fluster.io',
      socialSharePopupWidth: 300,
      socialSharePopupHeight: 500
    }
  }
}];
```

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

| CSS4 variable                      | Default | Note |
| -------------------------- |-----------------|-----------------|
| --web-social-share-backdrop-opacity | 0.25 | Backdrop opacity |
| --web-social-share-backdrop-background | black | Backdrop background |
| --web-social-share-height | 80px | Action sheet height |
| --web-social-share-height-small-device | 140px | Action sheet height on device smaller than 540px |
| --web-social-share-target-width | 4rem | An action container width |
| --web-social-share-target-height | 3rem | An action container height |
| --web-social-share-button-width | 100% | An action inner button width |
| --web-social-share-button-height | 100% | An action inner button height |
| --web-social-share-target-icon-container-height | 2rem | An action icon container height |
| --web-social-share-button-font-size |  | The font-size of an action button |
| --web-social-share-brand-font-size | 0.6rem | The font-size of an action brand name |
| --web-social-share-brand-color | inherit | The color of an action brand name |

## Showcase

A showcase is available at [https://websocialshare.com](https://websocialshare.com)

The above showcase is the `www` folder of this project deployed in Firebase. If you clone the repository you could run it locally using `npm run start`.

## Credits

I didn't wanted to reinvent the wheel when it comes to the sharing actions themselves. Therefore I forked the features of [angular-socialshare](https://github.com/720kb/angular-socialshare). Kudos to [45kb](https://github.com/45kb) :+1:

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)

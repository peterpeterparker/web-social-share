# Web Social Share

Web Social Share is a web component to share urls and content on social networks.

The component will present a dialog which will contains the different sharing options you selected.

[![GitHub](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/fluster/web-social-share)
[![npm](https://img.shields.io/npm/dm/web-social-share.svg)]()

## Table of contents

- [Web Social Share](#web-social-share)
	- [Goals](#goals)
	- [Installation](#installation)
		- [Installation in a Ionic v4 project](#installation-in-a-ionic-v4-project)
		- [Installation in a Ionic v3 project](#installation-in-a-ionic-v3-project)
	- [Getting Started](#getting-started)
		- [show](#show)
		- [share](#share)
			- [Example](#example)
			- [Vanilla JS](#vanilla-js)
	- [Theming](#theming)
		- [Icons style class](#icons-style-class)
		- [Action sheet height](#action-sheet-height)
		- [Slots](#slots)
		- [Example](#example-1)
	- [Showcase](#showcase)
	- [Credits](#credits)
	- [License](#license)

## Goals

The idea behind this web component was to add a "social share" feature to the progressive web app (pwa) version of my project [Fluster](https://fluster.io).

Furthermore, I thought that using and building an action sheet to do so would be user friendly.

## Installation

    $ npm install web-social-share

### Installation in a Ionic v4 project

First of all notice that I wasn't able to integrate the library as described in the [Stencil documentation](https://stenciljs.com/docs/framework-integration).

But, I was able to integrate the library in an Ionic v4 app as described below.

After having installed the library, proceed then with following steps:

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

### Installation in a Ionic v3 project

As of version 2.0.0, the component can't be bundled in Ionic v3 projects anymore, at least as far as I know. If you wish to use it such a project, stick to version 1.1.0 of the component.

    $ npm install web-social-share@1.1.0

After having installed the version 1.1.0 of the library, proceed with following steps:

1. In the module where you would like to use the component, import and add `CUSTOM_ELEMENTS_SCHEMA` to your list of schemas

        @NgModule({
            declarations: [
                MyPage
            ],
            imports: [
                IonicPageModule.forChild(MyPage)
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
        export class MyPageModule {
        }

2. In `app.modules` (the main module of your app), import the component. As far as I understood, web component built with Stencil inherit Lazy Loading, therefore, no worries about effect on your boot time

         import 'web-social-share';
         
3. The web component installed under node_modules not gonna be automatically included in the vendor.js bundle. Therefore it need a tricks to be copied. To do so, create a local custom `copy.config.js` (which gonna be processed as another config of [ionic-app-scripts](https://github.com/ionic-team/ionic-app-scripts/blob/master/config/copy.config.js)) and add the following block

       module.exports = {
         copyWebSocialShare: {
           src: ['{{ROOT}}/node_modules/web-social-share/dist/websocialshare**/*'],
           dest: '{{BUILD}}'
         }
       } 

Don't forget to also update your `package.json` in order to use your local modified `copy.config.js` file

        "config": {
            "ionic_copy": "./scripts/copy.config.js"
          }

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

## Theming

This Web Component is roughly styled, it is up to you to theme it with your custom `CSS`. I thought it was better to do it like this in order to have a lightweight web component which doesn't force user to follow one style guideline.

### Icons style class

You could provide an `icon style class` for each sharing option which gonna be displayed above the social-network name.

Let's say I'm using `Font Awesome 5` and I would like to provide an icon for the social share options I describe above. This could be achieved easily like the following:

    
    const share = [{
          facebook: {
            iconStyleclass: 'fab fa-facebook',
            socialShareUrl: 'https://fluster.io'
          }
        },{
          twitter: {
            iconStyleclass: 'fab fa-twitter',
            socialShareUrl: 'https://fluster.io'
          }
        }
    }];

Of course, if you provide icon style class, it's up to you to load images or libraries like Font Awesome in your app.

### Action sheet height

Per default, the displayed action sheet height is set to `80px`. Even if the component isn't for the above previous reason shadowed, if you wish, you could set your own height for the action sheet using the CSS4 variables `--web-social-share-height`.

### Slots

As of version `v3.0.0` of this Web Component, is it now possible to use `<slot/>` in order to inject your elements for the display of the actions's icons. Could be useful for example in case you would like to use [Ionicons](https://ionicons.com).

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

## Showcase

A showcase is available at [https://websocialshare.com](https://websocialshare.com)

The above showcase is the `www` folder of this project deployed in Firebase. If you clone the repository you could run it locally using `npm run start`.

## Credits

I didn't wanted to reinvent the wheel when it comes to the sharing actions themselves. Therefore I forked the features of [angular-socialshare](https://github.com/720kb/angular-socialshare). Kudos to [45kb](https://github.com/45kb) :+1:

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)

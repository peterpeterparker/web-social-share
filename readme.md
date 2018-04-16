# Web Social Share

Web Social Share is a web component to share urls, content and images on social networks

The component will present a dialog which will contains the different sharing options you selected

## Installation

    $ npm install web-social-share

### Installation in a Ionic project

After having installed the library, proceed with following steps:

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

Trigger the display or closing of the action sheet presenting the social-share options you have selected

`show` is a **boolean** parameter

### share

These are your share options. For details about them you could have a look to the interface `WebSocialShareInput` located under folder `src/types/web-social-share/`

`share` is a parameter of type **WebSocialShareInput**

#### Example

For example, if you would like to allow your users to share a website thru Facebook and Twitter, you could define basic options like following:

    const share = [{
          facebook: {
            socialShareUrl: 'https://fluster.io'
          }
        },{
          twitter: {
            socialShareUrl: 'https://fluster.io'
          }
        }
    }];
    
#### Vanilla JS

For an example of Vanilla JS use, you could have a look to the `index.html` demo located in this repo under folder `src`

## Theming

This Web Component is roughly styled, it is up to you to theme it with your custom `CSS`. I thought it was better to do it like this in order to have a lightweight web component which doesn't force user to follow one style guideline.

However, you could provide an `icon style class` for each sharing option which gonna be displayed above the social-network name.

### Example

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

## Showcase

A showcase is available at [https://web-social-share.firebaseapp.com](https://web-social-share.firebaseapp.com)  

The above showcase is the `www` folder of this project deployed in Firebase. If you clone the repository you could run it locally using `npm start`

## Credits

I didn't wanted to reinvent the wheel when it comes to the sharing actions themselves. Therefore I forked the features of [angular-socialshare](https://github.com/720kb/angular-socialshare). Kudos to [45kb](https://github.com/45kb) :+1:

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)

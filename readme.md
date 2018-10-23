# Web Social Share

Web Social Share is a web component to share urls and content on social networks

The component will present a dialog which will contains the different sharing options you selected

[![GitHub](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/fluster/web-social-share)
[![npm](https://img.shields.io/npm/dm/web-social-share.svg)]()

## Goals

The idea behind this web component was to add a "social share" feature to the progressive web app (pwa) version of my project [Fluster](https://fluster.io).

Furthermore, I thought that using and building an action sheet to do so would be user friendly.

## Installation

    $ npm install web-social-share

### Installation in a Ionic v4 project

First of all notice that I wasn't able to integrate the library as described in the [Stencil documentation](https://stenciljs.com/docs/framework-integration)

But, I was able to integrate the library in an Ionic v4 app as described below

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

    const share = {
        config: [{
              facebook: {
                socialShareUrl: 'https://fluster.io'
              }
            },{
              twitter: {
                socialShareUrl: 'https://fluster.io'
              }
            }
        }]
    };

If you would like to display the action default name, you could extend your configuration like the following: 

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
            }
        }]
    };
    
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

A showcase is available at [https://websocialshare.com](https://websocialshare.com)  

The above showcase is the `www` folder of this project deployed in Firebase. If you clone the repository you could run it locally using `npm start`

## Credits

I didn't wanted to reinvent the wheel when it comes to the sharing actions themselves. Therefore I forked the features of [angular-socialshare](https://github.com/720kb/angular-socialshare). Kudos to [45kb](https://github.com/45kb) :+1:

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)

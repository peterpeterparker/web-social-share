# web-social-share

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                | Type                  | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------ | --------------------- | ----------- |
| `share`  | --        | The share options                                                                          | `WebSocialShareInput` | `undefined` |
| `show`   | `show`    | Trigger the display, or close, of the action sheet which contains the social-share options | `boolean`             | `undefined` |


## Events

| Event    | Description                                   | Type                |
| -------- | --------------------------------------------- | ------------------- |
| `closed` | An event triggered when the modal is `closed` | `CustomEvent<void>` |


## Slots

| Slot           | Description                                               |
| -------------- | --------------------------------------------------------- |
| `"copy"`       | A slot to display an icon or text to copy to clipboard    |
| `"email"`      | A slot to display an icon or text for a shate to an email |
| `"facebook"`   | A slot to display an icon or text for Facebook            |
| `"hackernews"` | A slot to display an icon or text for Hackernews          |
| `"linkedin"`   | A slot to display an icon or text for LinkedIn            |
| `"openchat"`   | A slot to display an icon or text for Openchat            |
| `"pinterest"`  | A slot to display an icon or text for Pinterest           |
| `"telegram"`   | A slot to display an icon or text for Telegram            |
| `"twitter"`    | A slot to display an icon or text for Twitter             |
| `"whatsapp"`   | A slot to display an icon or text for Whatsapp            |


## CSS Custom Properties

| Name                                                  | Description                                                                                                       |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `--web-social-share-action-sheet-group-background`    | Action sheet group background @default #fafafa                                                                    |
| `--web-social-share-action-sheet-group-border-radius` | Action sheet border radius on bigger screen (min-width 540px) @default 8px 8px 0 0                                |
| `--web-social-share-action-sheet-group-box-shadow`    | Action sheet box-shadow @default 0 0 8px 4px rgba(0,0,0,0.1)                                                      |
| `--web-social-share-backdrop-background`              | Backdrop background color @default black                                                                          |
| `--web-social-share-backdrop-opacity`                 | Backdrop opacity @default 0.25                                                                                    |
| `--web-social-share-brand-color`                      | Brand text color default inherit                                                                                  |
| `--web-social-share-brand-font-size`                  | Brand text font-size default 0.6rem                                                                               |
| `--web-social-share-brand-margin`                     | Brand text margin default 2px 0                                                                                   |
| `--web-social-share-button-border-radius`             | Button border-radius @default 8px                                                                                 |
| `--web-social-share-button-font-size`                 | Button font size                                                                                                  |
| `--web-social-share-button-height`                    | Button height @default 100%                                                                                       |
| `--web-social-share-button-ripple-effect-color`       | User click feedback (ripple effect) color @default #cecece                                                        |
| `--web-social-share-button-width`                     | Button width @default 100%                                                                                        |
| `--web-social-share-height`                           | Action sheet height @default 80px                                                                                 |
| `--web-social-share-height-small-device`              | Action sheet height on smaller device (max-width 540px) @default 140px                                            |
| `--web-social-share-target-height`                    | Button height @default 3rem                                                                                       |
| `--web-social-share-target-width`                     | Button width @default 4rem                                                                                        |
| `--web-social-share-zindex`                           | Action sheet z-index. Backdrop gets this value, container gets the value + 1 and content value + 10 @default 1000 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

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

| Slot           | Description                                                          |
| -------------- | -------------------------------------------------------------------- |
| `"copy"`       | A slot to display an icon or text in the related social share button |
| `"email"`      | A slot to display an icon or text in the related social share button |
| `"facebook"`   | A slot to display an icon or text in the related social share button |
| `"hackernews"` | A slot to display an icon or text in the related social share button |
| `"linkedin"`   | A slot to display an icon or text in the related social share button |
| `"pinterest"`  | A slot to display an icon or text in the related social share button |
| `"twitter"`    | A slot to display an icon or text in the related social share button |
| `"whatsapp"`   | A slot to display an icon or text in the related social share button |

## CSS Custom Properties

| Name                                                  | Description                                                                                                       |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `--web-social-share-action-sheet-group-border-radius` | Action sheet border radius on bigger screen (min-width 540px) @default 8px 8px 0 0                                |
| `--web-social-share-action-sheet-group-box-shadow`    | Action sheet box-shadow @default 0 0 8px 4px rgba(0,0,0,0.1)                                                      |
| `--web-social-share-backdrop-background`              | Backdrop background color @default black                                                                          |
| `--web-social-share-brand-color`                      | Brand text color default inherit                                                                                  |
| `--web-social-share-brand-margin`                     | Brand text margin default 2px 0                                                                                   |
| `--web-social-share-button-font-size`                 | Button font size                                                                                                  |
| `--web-social-share-height`                           | Action sheet height @default 80px                                                                                 |
| `--web-social-share-height-small-device`              | Action sheet height on smaller device (max-width 540px) @default 140px                                            |
| `--web-social-share-target-height`                    | Button height @default 3rem                                                                                       |
| `--web-social-share-target-width`                     | Button width @default 4rem                                                                                        |
| `--web-social-share-zindex`                           | Action sheet z-index. Backdrop gets this value, container gets the value + 1 and content value + 10 @default 1000 |

---

_Built with [StencilJS](https://stenciljs.com/)_

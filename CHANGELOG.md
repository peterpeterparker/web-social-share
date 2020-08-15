<a name="6.4.1"></a>
# [6.4.1](https://github.com/peterpeterparker/web-social-share/compare/v6.4.0...v6.4.1) (2020-08-15)

### Chore

- update Stencil v1.17.x

<a name="6.4.0"></a>
# [6.4.0](https://github.com/peterpeterparker/web-social-share/compare/v6.3.0...v6.4.0) (2020-03-20)

### Features

* update dependencies

<a name="6.3.0"></a>
# [6.3.0](https://github.com/peterpeterparker/web-social-share/compare/v6.2.0...v6.3.0) (2020-02-07)

### Features

* add "Hacker News"
* exposes interfaces in bundle
* improve UI (max. width 540px instead of 500px, box-shadow and border-radius for the container)
* refactor duplicate actions functions code
* GitHub action to deploy demo website to Firebase
* transfer GitHub repo to my self ([peterpeterparker](https://github.com/peterpeterparker/web-social-share)) 

<a name="6.2.0"></a>
# [6.2.0](https://github.com/peterpeterparker/web-social-share/compare/v6.1.0...v6.2.0) (2019-07-30)

### Fix

* refactor component to avoid the need to move slots in order to be compatible with Font Awesome (CSS import) ([#18](https://github.com/peterpeterparker/web-social-share/issues/18))

### Special note

There isn't any "breaking changes" but according the type and how you style your icons, you might need to change some CSS variables to keep styles in terms of size the same way.

For example I had to change `width` to `font-size` in the [index.html](https://github.com/peterpeterparker/web-social-share/blob/208362a6eb53e30d191f0b095223f2cd0b8a637d/src/index.html#L77) of the component.

From:

```
<i class="fab fa-twitter" slot="twitter" style="color: #00aced; width: 1.4rem;"></i>
```

To:

```
<i class="fab fa-twitter" slot="twitter" style="color: #00aced; font-size: 1.6rem;"></i>
```

<a name="6.1.0"></a>
# [6.1.0](https://github.com/peterpeterparker/web-social-share/compare/v6.0.0...v6.1.0) (2019-07-12)

### Features

* CSS variable to set the base zIndex of the component

<a name="6.0.0"></a>
# [6.0.0](https://github.com/peterpeterparker/web-social-share/compare/v5.1.0...v6.0.0) (2019-06-11)

### Features

* add "Copy (to clipboard)" support ([#17](https://github.com/peterpeterparker/web-social-share/issues/17))

<a name="5.1.0"></a>
# [5.1.0](https://github.com/peterpeterparker/web-social-share/compare/v5.0.0...v5.1.0) (2019-06-05)

### Libs

* Stencil One

<a name="5.0.0"></a>
# [5.0.0](https://github.com/peterpeterparker/web-social-share/compare/v4.0.2...v5.0.0) (2019-02-17)

### Breaking changes

* transform component to a shadowed Web Component ([#14](https://github.com/peterpeterparker/web-social-share/issues/14))

Notes:

As of version v5.0.0 this Web Component will be shadowed. Therefore, you will have to use `slots` to inject the icons for the sharing actions and will have to style these in order to apply for example the proper colors. The README of the component has been updated to reflect these changes.

If you would miss variables to style the component, ping me, I would be happy to add more options. 

<a name="4.0.2"></a>
# [4.0.2](https://github.com/peterpeterparker/web-social-share/compare/v4.0.1...v4.0.2) (2019-02-02)

### Fix

* incorrect URL when WhatsApp socialShareText is empty ([#13](https://github.com/peterpeterparker/web-social-share/pull/13), thx @fmendoza for the PR 👍)

<a name="4.0.1"></a>
# [4.0.1](https://github.com/peterpeterparker/web-social-share/compare/v4.0.0...v4.0.1) (2019-01-29)

### Fix

* freaking iphone might cut action text ([a6bd031](https://github.com/peterpeterparker/web-social-share/commit/a6bd031aeb4e7b7a9f32870613eb68002d40db82) and [1856787](https://github.com/peterpeterparker/web-social-share/commit/18567873b8244e625e874ee6941043edc1acafc5))

<a name="4.0.0"></a>
# [4.0.0](https://github.com/peterpeterparker/web-social-share/compare/v3.0.1...v4.0.0) (2019-01-29)

### Features

* add WhatsApp support ([#11](https://github.com/peterpeterparker/web-social-share/issues/11))
* add a CSS4 variable to customize the height of the action sheet on small devices ([#12](https://github.com/peterpeterparker/web-social-share/issues/12))

<a name="3.0.1"></a>
# [3.0.1](https://github.com/peterpeterparker/web-social-share/compare/v3.0.0...v3.0.1) (2019-01-26)

### Fix

* the move slot method might be executed before the sub-component is loaded ([#9](https://github.com/peterpeterparker/web-social-share/issues/9))

<a name="3.0.0"></a>
# [3.0.0](https://github.com/peterpeterparker/web-social-share/compare/v2.1.4...v3.0.0) (2019-01-26)

### Features

* add pseudo slots to the social share actions ([#8](https://github.com/peterpeterparker/web-social-share/issues/8))
* ability to customize / override rendered names ([#7](https://github.com/peterpeterparker/web-social-share/issues/7))

### Website

* a bit of styling and text editing on the `index.html` file for the website

### Libs

* update libs

<a name="2.1.4"></a>
# [2.1.4](https://github.com/peterpeterparker/web-social-share/compare/v2.1.3...v2.1.4) (2018-08-24)

### Fix

* fix Safari z-index ([92dc154](https://github.com/peterpeterparker/web-social-share/commit/92dc154d8246bd822fd324051b68ca935645c5c9)

<a name="2.1.3"></a>
# [2.1.3](https://github.com/peterpeterparker/web-social-share/compare/v2.1.2...v2.1.3) (2018-08-23)

### Fix

* fix action sheet not closed on middle click ([#5](https://github.com/peterpeterparker/web-social-share/issues/5))

<a name="2.1.2"></a>
# [2.1.2](https://github.com/peterpeterparker/web-social-share/compare/v2.1.1...v2.1.2) (2018-08-23)

### Fix

* use full page height ([#4](https://github.com/peterpeterparker/web-social-share/issues/4))

<a name="2.1.1"></a>
# [2.1.1](https://github.com/peterpeterparker/web-social-share/compare/v2.1.0...v2.1.1) (2018-08-23)

### Fix

* resolve build warning ([99a118428c3915379e5bf38b3301e3594174fb9f](https://github.com/peterpeterparker/web-social-share/commit/99a118428c3915379e5bf38b3301e3594174fb9f))

<a name="2.1.0"></a>
# [2.1.0](https://github.com/peterpeterparker/web-social-share/compare/v2.0.0...v2.1.0) (2018-08-19)

### Libs

* update Stencil ([#2](https://github.com/peterpeterparker/web-social-share/issues/2))
* target ES2017 ([#3](https://github.com/peterpeterparker/web-social-share/issues/3))

<a name="2.0.0"></a>
# [2.0.0](https://github.com/peterpeterparker/web-social-share/compare/v1.1.0...v2.0.0) (2018-08-12)

## Features

* **breaking changes**: Update the component in order to be compatible with **Ionic v4** and **Angular v6**

### Important note

I did not gave a try but this version might no be suitable anymore for Ionic v3 and Angular v5. If you are using the web-social-share component in such apps, you might better not upgrade and stick to the component version v1.1.0
 
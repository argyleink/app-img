#### Features

- Waits to start loading until the image is in view
- Neat custom properties api for modifying presentation layer 
- Fade in animation
- No dependencies
- Ready for avatars to galleries



**note**: this custom element doesn't provide any polyfills





#### Get Started

- `npm i app-img`
- load the web component in your HTML, perhaps via JS like this `import 'app-img.element'`






## Intended Usage / API
```html
<app-img src='...'></app-img>
<app-img src='...' viewport='#scrollcontainer'></app-img>
<app-img src='...' no-shadow></app-img>
<app-img src='...' style='--fade-speed:0'></app-img>
<app-img src='...' style='--fit:none'></app-img>
<app-img src='...' style='--loading-bg:black;--loading-text_color:white;'></app-img>
```

```js
$('app-img').addEventListener('loaded', ({target}) => 
  console.log(target))
```



#### Changing Presentation
Change the custom property values on the `<app-img>` node. 

```css
--loading-bg: any|css|color|type; 
/* default: hsl(0,0%,85%) */

--loading-text_color: hex|hsl|rgb|etc;
/* default: hsl(0,0%,70%) */

--fit: fill|contain|cover|none|scale-down;
/* default: cover */

--position: left|top|50%|20px|etc; 
/* default: initial */

--fade-speed: s|ms; 
/* default: 0.5s */
```


#### Changing Behavior

```html
<!-- opt out of shadowDOM -->
<app-img no-shadow></app-img>

<!-- opt out of animation -->
<app-img style='--fade-speed:0;'></app-img>

<!-- 
  when you need to specify the observed scroll container 
  pass a querySelector string into the attribute
-->
<app-img viewport='#scrollview'></app-img>
```



# app-img (WIP)

## Target API
```html
<app-img src='...'></app-img>
<app-img src='...' viewport='#scrollcontainer'></app-img>
<app-img src='...' no-shadow></app-img>
<app-img src='...' style='--animation:none'></app-img>
<app-img src='...' style='--fit:fill|contain|cover|none|scale-down'></app-img>
<app-img src='...' style='--loading-bg:black;--loading-text_color:red;'></app-img>
```

```js
$('app-img').addEventListener('loaded', ({target}) => 
  console.log(target))
```

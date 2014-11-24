Slide and Push Menus
==============

AngularJS Directive to make Slide and Push menus. 

Based in http://tympanus.net/codrops/2013/04/17/slide-and-push-menus/

Supports latest Angular i.e. Angular 1.2.26 and Angular 1.3.4

###Dependecies: jQuery

## Basic Usage

```
<ng-slide-push-menu position="right" button="push" button-icon-class="glyphicon glyphicon-cog">
  <h3>Menu</h3>
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
  <a href="#">Item 4</a>
  <a href="#">Item 5</a>
  <a href="#">Item 6</a>
</ng-slide-push-menu>

```

## Calling from external button

```
<button ng-slide-menu="menu">Slide menu</button>
<button ng-push-menu="menu">Push menu</button>

<ng-slide-push-menu id="menu" position="right">
  <h3>Menu</h3>
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
  <a href="#">Item 4</a>
  <a href="#">Item 5</a>
  <a href="#">Item 6</a>
</ng-slide-push-menu>
```

## Atributes

```
  id: Useful when use external buttons
  position: Position of the menu // [ 'top', 'right', 'bottom', 'left' ]
  fix-top: To fix the top position // In px
  fix-left: To fix the left position // In px
  spm-class: To customize the Menu
  button: If is set the button appear // ['push', 'slide']
  button-icon-class: Class to set the button // I used Bootstrap glyphicon or font-awesome
```

### TODO

- Multi tab
- Customize colors

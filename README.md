# Vue Dinner Calculator
> Calculate the cost of a dinner using price of dinner per person, the number of people, and tips

![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/vue-dinner-calculator)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/vue-dinner-calculator)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/vue-dinner-calculator)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/vue-dinner-calculator)
![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/vue-dinner-calculator)

[![vue - 2](https://img.shields.io/badge/vue-2-2ea44f?logo=vue.js)](vuejs.org/)

## Preview

[![Vue Dinner Calculator app screenshot](/docs/images/vue-dinner-calculator.png "Vue Dinner Calculator app screenshot")](https://beatrizsmerino.github.io/vue-dinner-calculator/)

## Development interface

[![Vue logo](/docs/images/vue-js-2.jpg)](https://vuejs.org/)

Is developed with [Vue.js](https://vuejs.org/), a Javascript framework. This project has no need to run NPM CLI.

From the [Vue 2 guide](https://vuejs.org/v2/guide/):

> At the core of Vue.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax. Render a string template so the data and the DOM are linked, and everything is reactive.

## Content

This project has 3 files:

- [index.html](/index.html) - see [HTML-based template syntax](https://vuejs.org/v2/guide/syntax.html). Structure html with interpolations, bind attributes... This file include below the framework Vue and a file with the application development.
- [vue.js](/js/vue.js) - see [Download Framework Vue.js v2.6.10](https://github.com/vuejs/vue/archive/v2.6.10.zip). Development version, includes helpful console warnings.
- [app.js](/js/app.js) - see [The Vue instance](https://vuejs.org/v2/guide/instance.html). Development of the code with data and methods to create your desired behavior.

The scripts are loaded in the HTML like this:

```html
<script src="js/vue.js"></script>
<script src="js/app.js"></script>  
```

## How it works

### Vue data

- `priceOfDinner`
- `numOfPersons`
- `tips`
- `taxes`  
  
### Vue methods

- `increment()`
- `decrement()`
- `totalTaxes()`
- `totalTip()`
- `totalPerson()` 
  
### Formula

- Total with taxes (21%)
    ```javascript
    totalTaxes = priceOfDinner + (priceOfDinner * taxes) / 100
    ```
- Total with tip
    ```javascript
    tip = priceOfDinner + (priceOfDinner * tip) / 100
    totalWithTip = totalTaxes + tip
    ```
- Total per person
    ```javascript
    totalPerson = (totalTaxes + totalWithTip) * numOfPersons;
    ```

## What to do next

Don't stop learning. This is a basic example to start learning Vue. :wink:

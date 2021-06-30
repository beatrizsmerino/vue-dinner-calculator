![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/vue-dinner-calculator)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/vue-dinner-calculator)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/vue-dinner-calculator)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/vue-dinner-calculator)
![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/vue-dinner-calculator)

# Vue Dinner Calculator

### Vue Dinner Calculator is an application that calculates the cost of a dinner according to _the price of dinner per person_, _the number of people_ and _tips_.

![Image of App Vue Dinner Calculator](README/images/vue-dinner-calculator.png)

## Development interface

![Vue logo](README/images/vue-js-2.jpg)

Is developed with **[vue.js](https://vuejs.org/)** a Javascript framework. This project has no npm dependencies.

> At the core of Vue.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax. Render a string template so the data and the DOM are linked, and everything is reactive.  
> -[Vue](https://vuejs.org/v2/guide/)

## Content

**It is composed of 3 files:**

1. _vue.js_  
   [Download Framework Vue.js v2.6.10](https://github.com/vuejs/vue/archive/v2.6.10.zip). Development version, includes helpful console warnings.
2. _index.html_  
   [HTML-based template syntax](https://vuejs.org/v2/guide/syntax.html). Structure html with interpolations, bind attributes... This file include below the framework Vue and a file with the application development.
3. _app.js_  
   [The Vue instance](https://vuejs.org/v2/guide/instance.html). Development of the code with data and methods to create your desired behavior.

```html
<script src="js/vue.js"></script>
<script src="js/app.js"></script>
```

## How work

### Requirements and functionalities

#### Vue data

- priceOfDinner
- numOfPersons
- tips
- taxes (21%)

#### Vue methods

- increment()
- decrement()
- totalTaxes()
- totalAllPerson()
- totalTip()

#### Formules

- Total of the dinner per person with taxes

```javascript
result = (priceOfDinner * (taxes% / 100)) + priceOfDinner
```

- Total of the dinner the all persons with taxes

```javascript
result = totalTaxes * numOfPersons
```

- Total of the dinner the all persons with taxes and tips

```javascript
result = (totalAllPerson * (tip% / 100)) + totalAllPerson;
```

## Continue...

> Don't stop learn. It is a basic example to start learning vue. :wink:

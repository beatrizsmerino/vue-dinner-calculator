![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/vue-dinner-calculator)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/vue-dinner-calculator)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/vue-dinner-calculator)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/vue-dinner-calculator)
![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/vue-dinner-calculator)

# Vue Dinner Calculator
### Vue Dinner Calculator is an application that calculates the cost of a dinner according to *the price of dinner per person*, *the number of people* and *tips*.

![Image of App Vue Dinner Calculator](https://github.com/beatrizsmerino/vue-dinner-calculator/blob/master/README/images/vue-dinner-calculator.png)

## Development interface
![Vue logo](https://github.com/beatrizsmerino/vue-dinner-calculator/blob/master/README/images/vue-js-2.jpg)

Is developed with **[vue.js](https://vuejs.org/)** a Javascript framework. This project has no npm dependencies.

> At the core of Vue.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax. Render a string template so the data and the DOM are linked, and everything is reactive.  
-[Vue](https://vuejs.org/v2/guide/)

## Content
**It is composed of 3 files:**
1. *vue.js*  
[Download Framework Vue.js v2.6.10](https://github.com/vuejs/vue/archive/v2.6.10.zip). Development version, includes helpful console warnings.
2. *index.html*  
[HTML-based template syntax](https://vuejs.org/v2/guide/syntax.html). Structure html with interpolations, bind attributes... This file include below the framework Vue and a file with the application development.
3. *app.js*  
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
- taxes  
  
#### Vue methods
- increment()
- decrement()
- totalTaxes()
- totalTip()
- totalPerson()  
  
#### Formules
- Total with taxes (21%)
```javascript
totalTaxes = ((taxes * priceOfDinner) / 100) + priceOfDinner
```
- Total with tip
```javascript
totalTip = totalTaxes + (((tip * priceOfDinner) / 100) + priceOfDinner)
```
- Total per person
```javascript
totalPerson = (totalTaxes + totalTip) * numOfPersons;
```

## Continue...
> Don't stop learn. It is a basic example to start learning vue. :wink:
# Awesome Bookmarklets

## Domain

### Find Whois
```js
javascript:(function(){window.location.href=`https://www.whois.com/whois/${window.location.hostname}`})();
```
## Misc

### Google Fonts Select All Styles
```js
javascript:(function(){document.querySelectorAll('.selection-toggle-button').forEach(e => e.click())})();
```

## Web Dev

### Scroll 100Vh
```js
javascript:(function(){window.scrollTo(0, window.innerHeight + document.documentElement.scrollTop)})();
```
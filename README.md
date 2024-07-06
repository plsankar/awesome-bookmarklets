# Awesome Bookmarklets

Awesome Bookmarklets, a curated collection of powerful and handy bookmarklets to enhance your browsing experience. Bookmarklets are small JavaScript programs that can be stored as bookmarks in your web browser, providing quick and easy access to useful functionality without the need for extensions or add-ons.

## Usability

### Remove All Videos

Remove all video elements from the page.

```js
javascript:(document.querySelectorAll('video').forEach(v => v.remove()))();
```

### Pause All Videos

Pause all video elements from the page.

```js
javascript:(document.querySelectorAll('video').forEach(v => v.pause()))();
```

### Stop All Videos

Stop all video elements from the page.

```js
javascript:(document.querySelectorAll('video').forEach(v => {v.pause();v.currentTime = 0}))();
```

### Remove All Audios

Remove all audio elements from the page.

```js
javascript:(document.querySelectorAll('audio').forEach(v => v.remove()))();
```

### Pause All Audios

Pause all audio elements from the page.

```js
javascript:(document.querySelectorAll('audio').forEach(v => v.pause()))();
```

### Stop All Audios

Stop all audio elements from the page.

```js
javascript:(document.querySelectorAll('audio').forEach(v => {v.pause();v.currentTime = 0}))();
```

## Domain

### Find Whois

Easily find the WHOIS information of the current website you're visiting with a single click.

```js
javascript:(function(){window.location.href=`https://www.whois.com/whois/${window.location.hostname}`})();
```

### SimilarWeb

Quickly access SimilarWeb statistics for the current website to analyze its traffic and performance.

```js
javascript:(function(){window.location.href=`https://www.similarweb.com/website/${window.location.hostname}/`})();
```

## Web Development

### Google Fonts Select All Styles

Quickly select all font styles on Google Fonts for easy downloading or comparison.

```js
javascript:(function(){document.querySelectorAll('.selection-toggle-button').forEach(e => e.click())})();
```

### Scroll 100Vh

Scroll down by 100% of the viewport height, making it easier to navigate through long pages.

```js
javascript:(function(){window.scrollTo(0, window.innerHeight + document.documentElement.scrollTop)})();
```

### View Formatted JSON In Browser

Automatically format JSON content in the browser for better readability and debugging.

```js
javascript:(function(){var element=document.querySelector("pre"); var obj=JSON.parse(element.innerText); element.innerHTML=JSON.stringify(obj,undefined,2);})();
```

neustar_wpm_int_selenium
===============

*Work in progress*

This is a remaking of the deprecated Selenium Interface using [Neustar WPM's JavaScript API](http://docs.wpm.neustar.biz/testscript-api/biz/neustar/wpm/api/Selenium.html). The purpose is to provide some minimal support for users in need of supporting Selenese style scripting in the wake of Selenium 3 adoption. To me, more of an interesting project as opposed to something practical or advisable. More than anything, it's an interesting<sup>*</sup> look into how methods in the old Selenium RC Interface can be reproduced with WebDriver.

<sup>* The definition of interesting may vary by individual</sup>

This code is fully open source (GPL). If you actually want to use it, knock yourself out.

How to use
===============

There are a few different ways to get the code into your WPM script, I'll list in order of what's most ideal:

1. Download selenium.js or the minified version, selenium.min.js, and upload it as a data file in Neustar's UI. Load the file contents in your script and evaluate the JavaScript.

```javascript
var s = datafile('selenium.min.js').readContents();
eval(s + "");
var driver = openBrowser();
var selenium = new Selenium(driver);
```

2. Use Neustar's HttpClient to get it off GitHub.

```javascript
var c = openHttpClient();
var s = c.get('https://cdn.rawgit.com/sbarbett/neustar_wpm_int_selenium/ea6c23c4/selenium.min.js');
eval(s.getBody() + "");
var driver = openBrowser();
var selenium = new Selenium(driver);
```

3. Copy and paste all the code into your test script.

Methods (currently supported)
===============

assertAlertPresent
---------------

```
void assertAlertPresent()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checks for an alert. Throws an exception if no alert is present

assertAlertNotPresent
---------------

```
void assertAlertNotPresent()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checks for an alert. Throws an exception if an alert is present

check
---------------

```
void check(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check a toggle-button (checkbox/radio)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

check
---------------

```
void checkAndWait(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check a toggle-button (checkbox/radio)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes that it causes a page to load and, in turn, waits for it to complete loading before returning.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator
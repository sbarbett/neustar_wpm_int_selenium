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

checkAndWait
---------------

```
void checkAndWait(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check a toggle-button (checkbox/radio)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

click
---------------

```
void click(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clicks on a link, button, checkbox or radio button

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

clickAndWait
---------------

```
void clickAndWait(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clicks on a link, button, checkbox or radio button

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

clickAt
---------------

```
void clickAt(String locator,
             String coordString)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clicks on a link, button, checkbox or radio button with an offset of x,y

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

clickAtAndWait
---------------

```
void clickAtAndWait(String locator,
                    String coordString)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clicks on a link, button, checkbox or radio button with an offset of x,y

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

close
---------------

```
void close()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close the window that currently has focus

closeAndWait
---------------

```
void closeAndWait()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close the window that currently has focus

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

contextMenu
---------------

```
void contextMenu(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates opening the context menu for the specified element (e.g. right-click)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

contextMenuAndWait
---------------

```
void contextMenuAndWait(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates opening the context menu for the specified element (e.g. right-click)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

contextMenuAt
---------------

```
void contextMenuAt(String locator,
                   String coordString)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates opening the context menu for the specified element (e.g. right-click) at the specified coordinate

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

contextMenuAtAndWait
---------------

```
void contextMenuAtAndWait(String locator,
                          String coordString)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates opening the context menu for the specified element (e.g. right-click) at the specified coordinate

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

open
---------------

```
void open(String url)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opens a url in the browser. Accepts both relative and absolute urls

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Open" waits for the page to load, e.g. the "AndWait" is implicit

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url - the url to open; relative or absolute

pause
---------------

```
void pause(Int waitTime)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wait for the specified amount of time in ms

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;waitTime - the amount of time to sleep in ms

setSpeed
---------------

```
void setSpeed(Int value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set execution speed (e.g. the millisecond(s) delay after each operation)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By default, the delay is 0ms

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value - the number of milliseconds to pause after operation

setTimeout
---------------

```
void setTimeout(Int timeout)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifies the amount of time that Selenium will wait for actions to complete. Default timeout is 30 seconds

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeout - a timeout in milliseconds, after which the action will return with an error

type
---------------

```
void type(String locator,
          String value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sets the value of an input field, as though it was typed in

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value - the value to type

waitForPageToLoad
---------------

```
void waitForPageToLoad(Int timeout)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wait for a new page to load

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeout - a timeout in milliseconds, after which the action will return with an error
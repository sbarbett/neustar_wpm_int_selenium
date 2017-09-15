neustar_wpm_int_selenium
===============

*Work in progress*

This is a remaking of the deprecated Selenium Interface using [Neustar WPM's JavaScript API](http://docs.wpm.neustar.biz/testscript-api/biz/neustar/wpm/api/Selenium.html). The purpose is to provide some minimal support for users in need of supporting Selenese style scripting in the wake of Selenium 3 adoption. To me, more of a curiosity project as opposed to something practical or advisable. More than anything, it's an interesting look into how methods in the old Selenium RC Interface can be reproduced with WebDriver.

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

void [assertAlert](#assertAlert) (String pattern)<br />
void [assertAlertNotPresent](#assertAlertNotPresent) ()<br />
void [assertAlertPresent](#assertAlertPresent) ()<br />
void [assertAttribute](#assertAttribute) (String attributeLocator, String pattern)<br />
void [assignId](#assignId) (String locator, String identifier)<br />
void [assignIdAndWait](#assignIdAndWait) (String locator, String identifier)<br />
void [check](#check) (String locator)<br />
void [checkAndWait](#checkAndWait) (String locator)<br />
void [click](#click) (String locator)<br />
void [clickAndWait](#clickAndWait) (String locator)<br />
void [clickAt](#clickAt) (String locator, String coordString)<br />
void [clickAtAndWait](#clickAtAndWait) (String locator, String coordString)<br />
void [close](#close) ()<br />
void [closeAndWait](#closeAndWait) ()<br />
void [contextMenu](#contextMenu) (String locator)<br />
void [contextMenuAndWait](#contextMenuAndWait) (String locator)<br />
void [contextMenuAt](#contextMenuAt) (String locator, String coordString)<br />
void [contextMenuAtAndWait](#contextMenuAtAndWait) (String locator, String coordString)<br />
void [doubleClick](#doubleClick) (String locator)<br />
void [doubleClickAndWait](#doubleClickAndWait) (String locator)<br />
void [doubleClickAt](#doubleClickAt) (String locator, String offset)<br />
void [doubleClickAtAndWait](#doubleClickAtAndWait) (String locator, String offset)<br />
boolean [isAlertPresent](#isAlertPresent) () <br />
boolean [isChecked](#isChecked) (String locator)<br />
boolean [isConfirmationPresent](#isConfirmationPresent) ()<br />
boolean [isEditable](#isEditable) (String locator)<br />
boolean [isElementPresent](#isElementPresent) (String locator)<br />
boolean [isPromptPresent](#isPromptPresent) ()<br />
boolean [isTextPresent](#isTextPresent) (String pattern)<br />
boolean [isVisible](#isVisible) (String locator)<br />
void [open](#open) (String url)<br />
void [pause](#pause) (Int waitTime)<br />
void [setSpeed](#setSpeed) (Int value)<br />
void [setTimeout](#setTimeout) (Int timeout)<br />
void [type](#type) (String locator, String value)<br />
void [typeAndWait](#typeAndWait) (String locator, String value)<br />
void [typeKeys](#typeKeys) (String locator, String value)<br />
void [typeKeysAndWait](#typeKeysAndWait) (String locator, String value)<br />
void [uncheck](#uncheck) (String locator)<br />
void [uncheckAndWait](#uncheckAndWait) (String locator)<br />
void [waitForPageToLoad](#waitForPageToLoad) (Int timeout)

<a name="assertAlert">assertAlert</a>
---------------

```
void assertAlert(String pattern)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checks for a specified pattern in an alert. Throws an exception if not found.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pattern - the pattern to check

<a name="assertAlertNotPresent">assertAlertNotPresent</a>
---------------

```
void assertAlertNotPresent()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checks for an alert. Throws an exception if an alert is present

<a name="assertAlertPresent">assertAlertPresent</a>
---------------

```
void assertAlertPresent()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checks for an alert. Throws an exception if no alert is present

<a name="assertAttribute">assertAttribute</a>
---------------

```
void assertAttribute(String attributeLocator,
                     String pattern)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assert that the value of an attribute of a selected element matches a pattern

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attributeLocator - an element locator followed by an @ and then the name of the attribute<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pattern - the pattern to check

<a name="assignId">assignId</a>
---------------

```
void assignId(String locator,
              String identifier)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Temporarily sets the "id" attribute of a specified element so you can locate it in the future

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;identifier - a string used to set the id of the element

<a name="assignIdAndWait">assignIdAndWait</a>
---------------

```
void assignIdAndWait(String locator,
                     String identifier)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Temporarily sets the "id" attribute of a specified element so you can locate it in the future

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;identifier - a string used to set the id of the element

<a name="check">check</a>
---------------

```
void check(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check a toggle-button (checkbox/radio)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="checkAndWait">checkAndWait</a>
---------------

```
void checkAndWait(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check a toggle-button (checkbox/radio)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="click">click</a>
---------------

```
void click(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clicks on a link, button, checkbox or radio button

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="clickAndWait">clickAndWait</a>
---------------

```
void clickAndWait(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clicks on a link, button, checkbox or radio button

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="clickAt">clickAt</a>
---------------

```
void clickAt(String locator,
             String coordString)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clicks on a link, button, checkbox or radio button with an offset of x,y

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

<a name="clickAtAndWait">clickAtAndWait</a>
---------------

```
void clickAtAndWait(String locator,
                    String coordString)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clicks on a link, button, checkbox or radio button with an offset of x,y

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

<a name="close">close</a>
---------------

```
void close()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close the window that currently has focus

<a name="closeAndWait">closeAndWait</a>
---------------

```
void closeAndWait()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close the window that currently has focus

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

<a name="contextMenu">contextMenu</a>
---------------

```
void contextMenu(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates opening the context menu for the specified element (e.g. right-click)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="contextMenuAndWait">contextMenuAndWait</a>
---------------

```
void contextMenuAndWait(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates opening the context menu for the specified element (e.g. right-click)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="contextMenuAt">contextMenuAt</a>
---------------

```
void contextMenuAt(String locator,
                   String coordString)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates opening the context menu for the specified element (e.g. right-click) at the specified coordinate

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

<a name="contextMenuAtAndWait">contextMenuAtAndWait</a>
---------------

```
void contextMenuAtAndWait(String locator,
                          String coordString)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates opening the context menu for the specified element (e.g. right-click) at the specified coordinate

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

<a name="doubleClick">doubleClick</a>
---------------

```
void doubleClick(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Double-clicks on a link, button, checkbox or radio button

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="doubleClickAndWait">doubleClickAndWait</a>
---------------

```
void doubleClickAndWait(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Double-clicks on a link, button, checkbox or radio button

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="doubleClickAt">doubleClickAt</a>
---------------

```
void doubleClickAt(String locator,
                   String offset)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Double-clicks on a link, button, checkbox or radio button with an offset of x,y

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

<a name="doubleClickAtAndWait">doubleClickAtAndWait</a>
---------------

```
void doubleClickAtAndWait(String locator,
                          String offset)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Double-clicks on a link, button, checkbox or radio button with an offset of x,y

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordString - the x,y position(e.g. "10,20") of the mouse relative to the top left corner of the element

<a name="isAlertPresent">isAlertPresent</a>
---------------

```
boolean isAlertPresent()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check whether an alert has occurred.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This never throws an exception.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Returns:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true if alert is present, false otherwise

<a name="isChecked">isChecked</a>
---------------

```
boolean isChecked(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get whether a toggle-button is checked

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Returns:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true if the button is checked, false otherwise

<a name="isConfirmationPresent">isConfirmationPresent</a>
---------------

```
boolean isConfirmationPresent()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checks for a confirmation box

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Returns:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true if confirmation has been called, false otherwise

<a name="isEditable">isEditable</a>
---------------

```
boolean isEditable(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check tosee if an element is readonly or disabled

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Returns:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true if the element is editable, false otherwise

<a name="isElementPresent">isElementPresent</a>
---------------

```
boolean isElementPresent(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check that a specified element is attached to the DOM

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Returns:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true if the element is present, false otherwise

<a name="isPromptPresent">isPromptPresent</a>
---------------

```
boolean isPromptPresent()
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check for a JavaScript prompt

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Returns:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true if prompt is present, false otherwise

<a name="isTextPresent">isTextPresent</a>
---------------

```
boolean isTextPresent(String pattern)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check that the specified text appears somewhere on the rendered page

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pattern - the pattern to check<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Returns:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true if the text pattern is present, false otherwise

<a name="isVisible">isVisible</a>
---------------

```
boolean isVisible(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checks that the specified element is visible

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Returns:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true if the element is visible, false otherwise


<a name="open">open</a>
---------------

```
void open(String url)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opens a url in the browser. Accepts both relative and absolute urls

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Open" waits for the page to load, e.g. the "AndWait" is implicit

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url - the url to open; relative or absolute

<a name="pause">pause</a>
---------------

```
void pause(Int waitTime)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wait for the specified amount of time in ms

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;waitTime - the amount of time to sleep in ms

<a name="setSpeed">setSpeed</a>
---------------

```
void setSpeed(Int value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set execution speed (e.g. the millisecond(s) delay after each operation)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By default, the delay is 0ms

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value - the number of milliseconds to pause after operation

<a name="setTimeout">setTimeout</a>
---------------

```
void setTimeout(Int timeout)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifies the amount of time that Selenium will wait for actions to complete. Default timeout is 30 seconds

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeout - a timeout in milliseconds, after which the action will return with an error

<a name="type">type</a>
---------------

```
void type(String locator,
          String value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sets the value of an input field, as though it was typed in

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value - the value to type

<a name="typeAndWait">typeAndWait</a>
---------------

```
void typeAndWait(String locator,
                 String value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sets the value of an input field, as though it was typed in

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value - the value to type

<a name="typeKeys">typeKeys</a>
---------------

```
void typeKeys(String locator,
              String value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates keystroke events on the specified element, as though you typed the value key-by-key

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value - the value to type

<a name="typeKeysAndWait">typeKeysAndWait</a>
---------------

```
void typeKeysAndWait(String locator,
                     String value)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simulates keystroke events on the specified element, as though you typed the value key-by-key

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value - the value to type

<a name="uncheck">uncheck</a>
---------------

```
void uncheck(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uncheck a toggle-button (checkbox/radio)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="uncheckAndWait">uncheckAndWait</a>
---------------

```
void uncheckAndWait(String locator)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uncheck a toggle-button (checkbox/radio)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Note:* This command assumes it causes a page to load and waits for it to complete loading

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;locator - an element locator

<a name="waitForPageToLoad">waitForPageToLoad</a>
---------------

```
void waitForPageToLoad(Int timeout)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wait for a new page to load

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Parameters:**<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeout - a timeout in milliseconds, after which the action will return with an error
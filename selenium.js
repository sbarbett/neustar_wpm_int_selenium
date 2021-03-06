/*
  Create an object containing "Selenese" similar to the deprecated Selenium Interface. 

  https://seleniumhq.github.io/selenium/docs/api/java/com/thoughtworks/selenium/Selenium.html

  You must supply a WebDriver object invoked by the WPM API, see:

  http://docs.wpm.neustar.biz/testscript-api/biz/neustar/wpm/api/Test.html#openBrowser()
*/
function Selenium(browser) {
  if (typeof browser === 'undefined') { 
    throw '[null] Selenium Exception: driver not supplied';
  }
  // Neustar doesn't have ExpectedConditions exposed in their API docs, you have to reference
  // the entire package name. Doing this for brevity.
  this._expectedConditions = org.openqa.selenium.support.ui.ExpectedConditions;
  this._timeout = 30000;
  this._speed = 0;
  this._driver = browser;
}

/*
  Parser for the old Selenium-style Element Locators. I don't think I'm going to support 
  "dom" or "ui" since I don't see much practical use for them. 
*/
Selenium.prototype._locatorParser = function(locator) {
  var by;
  if (locator.includes('=')) {
    var lType = locator.split(/=(.+)/)[0];
    var lValue = locator.split(/=(.+)/)[1];
    if (lType !== 'name' 
      || lType !== 'css' 
      || lType !== 'id' 
      || lType !== 'identifier' 
      || lType !== 'link' 
      || lType !== 'xpath') {
      by = By.id(locator);
    }
    if (lType === 'name') {
      by = By.name(lValue);
    } else if (lType === 'css') {
      by = By.cssSelector(lValue);
    } else if (lType === 'id' 
      || lType === 'identifier') {
      by = By.id(lValue);
    } else if (lType === 'link') {
      by = By.linkText(lValue);
    } else if (lType === 'xpath') {
      by = By.xpath(lValue);
    }
  } else if (locator.startsWith('//')) {
    by = By.xpath(locator);
  } else {
    by = By.id(locator);
  }
  return by;
}

/*
  Check for undefined arguments and throw an error.
*/
Selenium.prototype._checkArg = function(argument, error) {
  if (typeof argument === 'undefined') {
    throw error;
  }
}

/*
  Amount of time to wait after every Selenium action. By default it is 0ms. Use setSpeed to 
  increase this value.
*/
Selenium.prototype._speedWait = function() {
  this.pause(this._speed);
}

/*
  Private wait method for methods containing "AndWait."
*/
Selenium.prototype._waitForLoad = function() {
  var driver = this._driver;
  waitFor(function(){
    return driver.executeScript('return document.readyState;').equals('complete');
  }, this._timeout);
}

/*

*/
Selenium.prototype.assertAlert = function(pattern) {
  this._checkArg(pattern, '[assertAlert] Selenium Exeption: a matching pattern is required')
  if (!this.isAlertPresent()) {
    throw '[assertAlert] Selenium Exception: no alert found';
  }
  assertTrue(driver.switchTo().alert().getText().contains(pattern), '[asserAlert] Assertion Failure: pattern not found');
  this._speedWait();
}

/*
  Assert that an alert is not present.
*/
Selenium.prototype.assertAlertNotPresent = function() {
  assertFalse(this.isAlertPresent(), '[assertAlertNotPresent] Assertion Failure: alert found');
  this._speedWait();
}

/*
  Assert that an alert is present.
*/
Selenium.prototype.assertAlertPresent = function() {
  assertTrue(this.isAlertPresent(), '[assertAlertPresent] Assertion Failure: alert not found');
  this._speedWait();
}

/*
  Assert that the value of an attribute of a selected element matches a pattern.
*/
Selenium.prototype.assertAttribute = function(attributeLocator, pattern) {
  this._checkArg(attributeLocator, '[assertAttribute] Selenium Exception: an attribute locator is required, syntax locator@attribute');
  if (!attributeLocator.includes('@')) {
    throw '[assertAttribute] Selenium Exception: an attribute locator is required, syntax locator@attribute';
  }
  var locator = locator.split(/@(.+)/)[0];
  var attribute = locator.split(/@(.+)/)[1];
  var value = driver.findElement(this._locatorParser(locator)).getAttribute(attribute);
  assertTrue(value === pattern, '[assertAttribute] Assertion Failure: pattern and value do not match');
  this._speedWait();
}

/*
  Assert that a toggle-button is not checked.
*/
Selenium.prototype.assertNotChecked = function(locator) {
  this._checkArg(locator, '[assertNotChecked] Selenium Exception: an element locator is required');
  return assertFalse(this.isChecked(locator), '[assertNotChecked] Assertion Failure: element checked');
}

/*
  Assert that a toggle-button is checked.
*/
Selenium.prototype.assertChecked = function(locator) {
  this._checkArg(locator, '[assertChecked] Selenium Exception: an element locator is required');
  return assertTrue(this.isChecked(locator), '[assertChecked] Assertion Failure: element not checked');
}

/*
  Assert that a confirmation is not present.
*/
Selenium.prototype.assertConfirmationNotPresent = function() {
  return assertFalse(this.isConfirmationPresent(), '[assertConfirmationNotPresent] Assertion Failure: confirmation found');
}

/*
  Assert that a confirmation is present.
*/
Selenium.prototype.assertConfirmationPresent = function() {
  return assertTrue(this.isConfirmationPresent(), '[assertConfirmationPresent] Assertion Failure: confirmation not found');
}

/*
    Assert that an element is not editable.
*/
Selenium.prototype.assertNotEditable = function(locator) {
  this._checkArg(locator, '[assertNotEditable] Selenium Exception: an element locator is required');
  return assertFalse(this.isEditable(locator), '[assertNotEditable] Assertion Failure: element editable');
}

/*
  Assert that an element is editable.
*/
Selenium.prototype.assertEditable = function(locator) {
  this._checkArg(locator, '[assertEditable] Selenium Exception: an element locator is required');
  return assertTrue(this.isEditable(locator), '[assertEditable] Assertion Failure: element not editable');
}

/*
  Assert that an element is not present.
*/
Selenium.prototype.assertElementNotPresent = function(locator) {
  this._checkArg(locator, '[assertElementNotPresent] Selenium Exception: an element locator is required');
  return assertFalse(this.isElementPresent(locator), '[assertElementNotPresent] Assertion Failure: element present');
}

/*
  Assert that an element is present.
*/
Selenium.prototype.assertElementPresent = function(locator) {
  this._checkArg(locator, '[assertElementPresent] Selenium Exception: an element locator is required');
  return assertTrue(this.isElementPresent(locator), '[assertElementPresent] Assertion Failure: element not present');
}

/*
  Assert that a prompt is not present.
*/
Selenium.prototype.assertPromptNotPresent = function() {
  return assertFalse(this.isPromptPresent(), '[assertPromptNotPresent] Assertion Failure: prompt found');
}

/*
  Assert that a prompt is present.
*/
Selenium.prototype.assertPromptPresent = function() {
  return assertTrue(this.isPromptPresent(), '[assertPromptPresent] Assertion Failure: prompt not found');
}

/*
  Assert that a pattern of text is not found on the page.
*/
Selenium.prototype.assertTextNotPresent = function(pattern) {
  this._checkArg(pattern, '[assertTextNotPresent] Selenium Exception: you must supply a pattern to match');
  assertFalse(this.isTextPresent(pattern), '[assertTextNotPresent] Assertion Failure: pattern found');
}

/*
  Assert that a pattern of text is found on the page.
*/
Selenium.prototype.assertTextPresent = function(pattern) {
  this._checkArg(pattern, '[assertTextPresent] Selenium Exception: you must supply a pattern to match');
  assertTrue(this.isTextPresent(pattern), '[assertTextPresent] Assertion Failure: pattern not found');
}

/*
  Assert that an element is not visible.
*/
Selenium.prototype.assertNotVisible = function(locator) {
  this._checkArg(locator, '[assertNotVisible] Selenium Exception: an element locator is required');
  return assertFalse(this.isVisible(locator), '[assertNotVisible] Assertion Failure: element visible');
}

/*
  Assert that an element is visible.
*/
Selenium.prototype.assertVisible = function(locator) {
  this._checkArg(locator, '[assertVisible] Selenium Exception: an element locator is required');
  return assertTrue(this.isVisible(locator), '[assertVisible] Assertion Failure: element not visible');
}

/*
Temporarily sets the "id" attribute of a specified element so you can locate it in the future.
*/
Selenium.prototype.assignId = function(locator, identifier) {
  this._checkArg(locator, '[assignId] Selenium Exception: an element locator is required');
  this._checkArg(identifier, '[assignId] Selenium Exception: an identifier value is required');
  var element = this._driver.findElement(this._locatorParser(locator));
  this._driver.executeScript('arguments[0].setAttribute("id", "' + identifier + '");', element);
  this._speedWait();
}

/*
Temporarily sets the "id" attribute of a specified element so you can locate it in the future.
then waits for the page to load.
*/
Selenium.prototype.assignIdAndWait = function(locator, identifier) {
  this._checkArg(locator, '[assignIdAndWait] Selenium Exception: an element locator is required');
  this._checkArg(identifier, '[assignIdAndWait] Selenium Exception: an identifier value is required');
  var element = this._driver.findElement(this._locatorParser(locator));
  this._driver.executeScript('arguments[0].setAttribute("id", "' + identifier + '");', element);
  this._waitForLoad();
  this._speedWait();
}

/*
  Check a toggle-button (checkbox/radio) using a Selenium Element Locator.
*/
Selenium.prototype.check = function(locator) {
  this._checkArg(locator, '[check] Selenium Exception: an element locator is required');
  var element = this._driver.findElement(this._locatorParser(locator));
  this._driver.executeScript('arguments[0].checked = true;', element);
  this._speedWait();
}

/*
  Check a toggle-button (checkbox/radio) using a Selenium Element Locator then wait for the 
  page to load.
*/
Selenium.prototype.checkAndWait = function(locator) {
  this._checkArg(locator, '[checkAndWait] Selenium Exception: an element locator is required');
  var element = this._driver.findElement(this._locatorParser(locator));
  this._driver.executeScript('arguments[0].checked = true;', element);
  this._waitForLoad();
  this._speedWait();
}

/*
  Click on an element using a Selenium Element Locator.
*/
Selenium.prototype.click = function(locator) {
  this._checkArg(locator, '[click] Selenium Exception: an element locator is required');
  this._driver.findElement(this._locatorParser(locator)).click();
  this._speedWait();
}

/*
  Click on an element using a Selenium Element Locator then wait for the page to load.
*/
Selenium.prototype.clickAndWait = function(locator) {
  this._checkArg(locator, '[clickAndWait] Selenium Exception: an element locator is required');
  this._driver.findElement(this._locatorParser(locator)).click();
  this._waitForLoad();
  this._speedWait();
}

/*
  Perform a click at an offset relative to the top left corner of an element.
*/
Selenium.prototype.clickAt = function(locator, offset) {
  this._checkArg(locator, '[clickAt] Selenium Exception: an element locator is required');
  this._checkArg(offset, '[clickAt] Selenium Exception: you must provide an offset in "x,y" format');
  if (!offset.includes(',')) {
    throw '[clickAt] Selenium Exception: you must provide an offset in "x,y" format';
  }
  var x = offset.split(',')[0].replace(/ /g, '');
  var y = offset.split(',')[1].replace(/ /g, '');
  Actions(this._driver).moveToElement(driver.findElement(this._locatorParser(locator)))
                       .moveByOffset(parseInt(x), parseInt(y))
                       .click()
                       .perform();
  this._speedWait();
}

/*
  Perform a click at an offset relative to the top left corner of an element then wait for 
  the page to load.
*/
Selenium.prototype.clickAtAndWait = function(locator, offset) {
  this._checkArg(locator, '[clickAtAndWait] Selenium Exception: an element locator is required');
  this._checkArg(offset, '[clickAtAndWait] Selenium Exception: you must provide an offset in "x,y" format');
  if (!offset.includes(',')) {
    throw '[clickAtAndWait] Selenium Exception: you must provide an offset in "x,y" format';
  }
  var x = offset.split(',')[0].replace(/ /g, '');
  var y = offset.split(',')[1].replace(/ /g, '');
  Actions(this._driver).moveToElement(driver.findElement(this._locatorParser(locator)))
                       .moveByOffset(parseInt(x), parseInt(y))
                       .click()
                       .perform();
  this._waitForLoad();
  this._speedWait();
}

/*
  Close the window that currently has focus.
*/
Selenium.prototype.close = function() {
  this._driver.close();
  this._speedWait();
}

/*
  Close the window that currently has focus then wait for the page to load.
*/
Selenium.prototype.closeAndWait = function() {
  this._driver.close();
  this._waitForLoad();
  this._speedWait();
}

/*
  Simulate right-clicking an element and opening a context menu.
*/
Selenium.prototype.contextMenu = function(locator) {
  this._checkArg(locator, '[contextMenu] Selenium Exception: an element locator is required');
  Actions(this._driver).contextClick(driver.findElement(this._locatorParser(locator)));
  this._speedWait();
}

/*
  Simulate right-clicking an element and opening a context menu then wait for the page to 
  load.
*/
Selenium.prototype.contextMenuAndWait = function(locator) {
  this._checkArg(locator, '[contextMenuAndWait] Selenium Exception: an element locator is required');
  Actions(this._driver).contextClick(driver.findElement(this._locatorParser(locator)));
  this._waitForLoad();
  this._speedWait();
}

/*
  Simulate right-clicking an element and opening a context menu at an offset relative to the
  top right corner.
*/
Selenium.prototype.contextMenuAt = function(locator, offset) {
  this._checkArg(locator, '[contextMenuAt] Selenium Exception: an element locator is required');
  this._checkArg(offset, '[contextMenuAt] Selenium Exception: you must provide an offset in "x,y" format');
  if (!offset.includes(',')) {
    throw '[contextMenuAt] Selenium Exception: you must provide an offset in "x,y" format';
  }
  var x = offset.split(',')[0].replace(/ /g, '');
  var y = offset.split(',')[1].replace(/ /g, '');
  Actions(this._driver).moveToElement(driver.findElement(this._locatorParser(locator)))
                       .moveByOffset(parseInt(x), parseInt(y))
                       .contextClick()
                       .perform();
  this._speedWait();
}

/*
  Simulate right-clicking an element and opening a context menu at an offset relative to the 
  top right corner then wait for the page to load.
*/
Selenium.prototype.contextMenuAtAndWait = function(locator, offset) {
  this._checkArg(locator, '[contextMenuAtAndWait] Selenium Exception: an element locator is required');
  this._checkArg(offset, '[contextMenuAtAndWait] Selenium Exception: you must provide an offset in "x,y" format');
  if (!offset.includes(',')) {
    throw '[contextMenuAtAndWait] Selenium Exception: you must provide an offset in "x,y" format';
  }
  var x = offset.split(',')[0].replace(/ /g, '');
  var y = offset.split(',')[1].replace(/ /g, '');
  Actions(this._driver).moveToElement(driver.findElement(this._locatorParser(locator)))
                       .moveByOffset(parseInt(x), parseInt(y))
                       .contextClick()
                       .perform();
  this._waitForLoad();
  this._speedWait();
}

/*
  Double-lick on an element using a Selenium Element Locator.
*/
Selenium.prototype.doubleClick = function(locator) {
  this._checkArg(locator, '[doubleClick] Selenium Exception: an element locator is required');
  Actions(this._driver).doubleClick(driver.findElement(this._locatorParser(locator)));
  this._speedWait();
}

/*
  Double-lick on an element using a Selenium Element Locator then wait for the page to load.
*/
Selenium.prototype.doubleClickAndWait = function(locator) {
  this._checkArg(locator, '[doubleClickAndWait] Selenium Exception: an element locator is required');
  Actions(this._driver).doubleClick(driver.findElement(this._locatorParser(locator)));
  this._waitForLoad();
  this._speedWait();
}

/*
  Perform a double-click at an offset relative to the top left corner of an element.
*/
Selenium.prototype.doubleClickAt = function(locator, offset) {
  this._checkArg(locator, '[doubleClickAt] Selenium Exception: an element locator is required');
  this._checkArg(offset, '[doubleClickAt] Selenium Exception: you must provide an offset in "x,y" format');
  if (!offset.includes(',')) {
    throw '[doubleClickAt] Selenium Exception: you must provide an offset in "x,y" format';
  }
  var x = offset.split(',')[0].replace(/ /g, '');
  var y = offset.split(',')[1].replace(/ /g, '');
  Actions(this._driver).moveToElement(driver.findElement(this._locatorParser(locator)))
                       .moveByOffset(parseInt(x), parseInt(y))
                       .doubleClick()
                       .perform();
  this._speedWait();
}

/*
  Perform a double-click at an offset relative to the top left corner of an element then wait 
  for the page to load.
*/
Selenium.prototype.doubleClickAtAndWait = function(locator, offset) {
  this._checkArg(locator, '[doubleClickAtAndWait] Selenium Exception: an element locator is required');
  this._checkArg(offset, '[doubleClickAtAndWait] Selenium Exception: you must provide an offset in "x,y" format');
  if (!offset.includes(',')) {
    throw '[doubleClickAtAndWait] Selenium Exception: you must provide an offset in "x,y" format';
  }
  var x = offset.split(',')[0].replace(/ /g, '');
  var y = offset.split(',')[1].replace(/ /g, '');
  Actions(this._driver).moveToElement(driver.findElement(this._locatorParser(locator)))
                       .moveByOffset(parseInt(x), parseInt(y))
                       .doubleClick()
                       .perform();
  this._waitForLoad();
  this._speedWait();
}

/*
  Checks to see if an alert has occurred without throwing an exception.
*/
Selenium.prototype.isAlertPresent = function() {
  try {
    driver.switchTo().alert();
    return true;
  } catch(e) {
    return false;
  }
}

/*
  Get whether a toggle-button is checked.
*/
Selenium.prototype.isChecked = function(locator) {
  this._checkArg(locator, '[isChecked] Selenium Exception: an element locator is required');
  return this._driver.findElement(this._locatorParser(locator)).isSelected();
}

/*
  Checks for a confirmation box (same as isAlertPresent).
*/
Selenium.prototype.isConfirmationPresent = function() {
  return this.isAlertPresent();
}

/*
  Check tosee if an element is readonly or disabled.
*/
Selenium.prototype.isEditable = function(locator) {
  this._checkArg(locator, '[isEditable] Selenium Exception: an element locator is required');
  var disabled = this._driver.findElement(this._locatorParser(locator)).getAttribute("disabled");
  var readonly = this._driver.findElement(this._locatorParser(locator)).getAttribute("readOnly");
  if (disabled == "true" || readonly == "true") {
    return false;
  }
  return true;
}

/*
  Check that a specified element is attached to the DOM.
*/
Selenium.prototype.isElementPresent = function(locator) {
  this._checkArg(locator, '[isElementPresent] Selenium Exception: an element locator is required');
  return this._driver.findElement(this._locatorParser(locator)).size() !=0;
}

/*
  Check for a JavaScript prompt (also the same as isAlertPresent).
*/
Selenium.prototype.isPromptPresent = function() {
  return this.isAlertPresent();
}

/*
  Check that the specified text appears somewhere on the rendered page.
*/
Selenium.prototype.isTextPresent = function(pattern) {
  this._checkArg(pattern, '[isTextPresent] Selenium Exception: you must supply a pattern to match');
  return this._driver.findElement(By.tagName('body')).getText().contains(pattern);
}

/*
  Checks that the specified element is visible.
*/
Selenium.prototype.isVisible = function(locator) {
  this._checkArg(locator, '[isVisible] Selenium Exception: an element locator is required');
  return this._driver.findElement(this._locatorParser(locator)).isDisplayed();
}

/*
  Open a specified url. "AndWait" is implied with this method, it will always wait for the 
  page to reach a ready state.
*/
Selenium.prototype.open = function(url) {
  this._checkArg(url, '[open] Selenium Exception: a url is required');
  this._driver.get(url);
  this._speedWait();
}

/*
  Wait for a specified amount of time in ms.
*/
Selenium.prototype.pause = function(time) {
  this._checkArg(time, '[pause] Selenium Exception: you must specify the amount of time to pause');
  pause(time);
}

/*
  Set the speed to wait after a Selenium action in ms. The default is 0ms.
*/
Selenium.prototype.setSpeed = function(time) {
  this._checkArg(time, '[setSpeed] Selenium Exception: you must specify the amount of time to pause');
  this._speed = time;
}

/*
  Select the timeout value for Selenium actions with waits in ms. The default is 30000ms.
*/
Selenium.prototype.setTimeout = function(time) {
  this._checkArg(time, '[setTimeout] Selenium Exception: you must specify the amount of time to pause');
  this._timeout = time;
}

/*
  Find an input using an Element Locator and set the value.
*/
Selenium.prototype.type = function(locator, text) {
  this._checkArg(locator, '[type] Selenium Exception: an element locator is required');
  this._checkArg(text, '[type] Selenium Exception: you must specify what is to be typed');
  var element = this._driver.findElement(this._locatorParser(locator));
  this._driver.executeScript('arguments[0].setAttribute("value", "' + text + '");', element);
  this._speedWait();
}

/*
  Find an input using an Element Locator and set the value then wait for the page to load.
*/
Selenium.prototype.typeAndWait = function(locator, text) {
  this._checkArg(locator, '[typeAndWait] Selenium Exception: an element locator is required');
  this._checkArg(text, '[typeAndWait] Selenium Exception: you must specify what is to be typed');
  var element = this._driver.findElement(this._locatorParser(locator));
  this._driver.executeScript('arguments[0].setAttribute("value", "' + text + '");', element);
  this._waitForLoad();
  this._speedWait();
}

/*
  Simulates keystroke events on the specified element, as though you typed the value 
  key-by-key.
*/
Selenium.prototype.typeKeys = function(locator, text) {
  this._checkArg(locator, '[typeKeys] Selenium Exception: an element locator is required');
  this._checkArg(text, '[typeKeys] Selenium Exception: you must specify what is to be typed');
  this._driver.findElement(this._locatorParser(locator)).sendKeys(text);
  this._speedWait();
}

/*
  Simulates keystroke events on the specified element, as though you typed the value 
  key-by-key, then wait for the page to load.
*/
Selenium.prototype.typeKeysAndWait = function(locator, text) {
  this._checkArg(locator, '[typeKeysAndWait] Selenium Exception: an element locator is required');
  this._checkArg(text, '[typeKeysAndWait] Selenium Exception: you must specify what is to be typed');
  this._driver.findElement(this._locatorParser(locator)).sendKeys(text);
  this._waitForLoad();
  this._speedWait();
}

/*
  Uncheck a toggle-button (checkbox/radio) using a Selenium Element Locator.
*/
Selenium.prototype.uncheck = function(locator) {
  this._checkArg(locator, '[uncheck] Selenium Exception: an element locator is required');
  var element = this._driver.findElement(this._locatorParser(locator));
  this._driver.executeScript('arguments[0].checked = false;', element);
  this._speedWait();
}

/*
  Uncheck a toggle-button (checkbox/radio) using a Selenium Element Locator then wait for the 
  page to load.
*/
Selenium.prototype.uncheckAndWait = function(locator) {
  this._checkArg(locator, '[uncheckAndWait] Selenium Exception: an element locator is required');
  var element = this._driver.findElement(this._locatorParser(locator));
  this._driver.executeScript('arguments[0].checked = false;', element);
  this._waitForLoad();
  this._speedWait();
}

/*
  Wait a specified amount of time for the page to finish loading.
*/
Selenium.prototype.waitForPageToLoad = function(timeout) {
  var driver = this._driver;
  waitFor(function(){
    return driver.executeScript('return document.readyState;').equals('complete');
  }, timeout);
}
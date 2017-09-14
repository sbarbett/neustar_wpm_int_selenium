/*
  Create an object containing "Selenese" similar to the deprecated Selenium
  Interface. 

  https://seleniumhq.github.io/selenium/docs/api/java/com/thoughtworks/selenium/Selenium.html

  You must supply a WebDriver object invoked by the WPM API, see:

  http://docs.wpm.neustar.biz/testscript-api/biz/neustar/wpm/api/Test.html#openBrowser()
*/
function Selenium(browser) {
  if (typeof browser === 'undefined') { 
    throw '[null] Selenium Exception: driver not supplied';
  }
  this._expectConditions = org.openqa.selenium.support.ui.ExpectedConditions;
  this._timeout = 30000;
  this._speed = 0;
  this._driver = browser;
}

/*
  Parser for the old Selenium-style Element Locators. I don't think I'm going
  to support "dom" or "ui" since I don't see much practical use for them. 
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
  Amount of time to wait after every Selenium action. By default it is 0ms.
  Use setSpeed to increase this value.
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
  Click on an element using a Selenium Element Locator.
*/
Selenium.prototype.click = function(locator) {
  this._checkArg(locator, '[click] Selenium Exception: an element locator is required');
  this._driver.findElement(this._locatorParser(locator)).click();
  this._speedWait();
}

/*
  Click on an element using a Selenium Element Locator then wait for the page
  to load.
*/
Selenium.prototype.clickAndWait = function(locator) {
  this._checkArg(locator, '[clickAndWait] Selenium Exception: an element locator is required');
  this._driver.findElement(this._locatorParser(locator)).click();
  this._waitForLoad();
  this._speedWait();
}

/*
  Open a specified url. "AndWait" is implied with this method, it will always
  wait for the page to reach a ready state.
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
  Select the timeout value for Selenium actions with waits in ms. The 
  default is 30000ms.
*/
Selenium.prototype.setTimeout = function(time) {
  this._checkArg(time, '[setTimeout] Selenium Exception: you must specify the amount of time to pause');
  this._timeout = time;
}

/*
  Find an input using an Element Locator and enter some text.
*/
Selenium.prototype.type = function(locator, text) {
  this._checkArg(locator, '[type] Selenium Exception: an element locator is required');
  this._checkArg(text, '[type] Selenium Exception: you must specify what is to be typed');
  driver.findElement(this._locatorParser(locator)).sendKeys(text);
  this._speedWait();
}

/*
  Wait a specified amount of time for the page to finish loading.
*/
Selenium.prototype.waitForPageToLoad = function(timeout) {
  var driver = this._driver;
  waitFor(function(){
    return this._driver.executeScript('return document.readyState;').equals('complete');
  }, timeout);
}
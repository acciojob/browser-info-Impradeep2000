//your JS code here. If required.
function displayBrowserInfo() {
      const browserInfoElement = document.getElementById('browser-info');
      const userAgent = navigator.userAgent;
      const browserName = navigator.appName;
      const browserVersion = navigator.appVersion;

      const message = "You are using " + browserName + " version " + browserVersion;
      browserInfoElement.textContent = message;
}
    displayBrowserInfo();
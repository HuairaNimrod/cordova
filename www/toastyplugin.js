// Empty constructor
function cordova() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
cordova.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'cordova', 'show', [options]);
}

// Installation constructor that binds ToastyPlugin to window
cordova.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.cordova = new cordova();
  return window.plugins.cordova;
};
cordova.addConstructor(cordova.install);
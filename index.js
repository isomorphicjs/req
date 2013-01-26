/*
 * Module dependencies
 */
var EventEmitter = require("emitter");

var req = exports = module.exports = function Request(options) {
  EventEmitter(this);
  if(!options) options = {};
  this.method = options.method || "GET";
  this.url = options.url || window.location.pathname+window.location.search;
  this.headers = options.headers || {
    host: window.location.host,
    'user-agent': 'isomorphic/0.0.1'
  };
  this.httpVersion = "1.1";
  this.connection = {
    encrypted: (window.location.protocol.indexOf("https") != -1)
  };
}

req.prototype.setEncoding = function setEncoding(encoding) {
  this.encoding = encoding;
};

req.prototype.pause = function pause() {
  // Do nothing
};

req.prototype.resume = function resume() {
  // Do nothing
};

req.prototype.destroy = function destroy() {
  // Do nothing
};

req.__defineGetter__('readable', function() {
  return true;
});
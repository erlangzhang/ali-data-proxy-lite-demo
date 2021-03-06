// Generated by CoffeeScript 1.8.0
(function() {
  var app, debug, server;

  Array.prototype.contains = function(obj) {
    var i;
    i = this.length;
    while (i--) {
      if (this[i] === obj) {
        return true;
      }
    }
    return false;
  };

  app = require('../app');
  debug = require('debug')('Crawler4js')
  app.set('port', process.env.PORT || 3000);

  server = app.listen(app.get('port'), function() {
    return debug('Express server listening on port ' + server.address().port);
  });




}).call(this);

//# sourceMappingURL=www.js.map

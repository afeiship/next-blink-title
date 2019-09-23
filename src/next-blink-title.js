(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_OPTIONS = { value: false, title: '', interval: 1000 };

  nx.blinkTitle = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var titles = [document.title, options.title];
    var timer = setInterval(function() {
      options.value = !options.value;
      document.title = titles[Number(options.value)];
    }, options.interval);
    return {
      destroy: function() {
        clearInterval(timer);
      }
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.blinkTitle;
  }
})();

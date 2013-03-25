var $ = require('jquery');

$.fn.firstChild = function () {
  var ret = [];
  // use a for loop
  for (var i = 0, len = this.length; i < len; i++) {
    var this_el = this[i],
      el = this_el.firstElementChild; // try firstElementChild first
    if (!el) {
      el = this_el.firstChild;
      while (el && el.nodeType != 1)
        el = el.nextSibling;
    }
    if (el) ret.push(el);
  }
  //maintain jQuery chaining and end() functionality
  return this.pushStack(ret);
};

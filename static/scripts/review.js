// Generated by CoffeeScript 1.6.3
(function() {
  var root,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.get_random_blanks = function(question) {
    var blank_chosen, i, index, num_blanks, output_string, phrases, to_2digit, _i, _ref;
    to_2digit = function(i) {
      if (i >= 10) {
        return i.toString();
      } else {
        return "0" + i.toString();
      }
    };
    phrases = question.split("/");
    blank_chosen = [];
    num_blanks = Math.floor(phrases.length * 0.6);
    while (true) {
      index = Math.floor(Math.random() * phrases.length);
      if (__indexOf.call(blank_chosen, index) < 0) {
        blank_chosen.push(index);
      }
      if (blank_chosen.length === num_blanks) {
        break;
      }
    }
    output_string = "";
    for (i = _i = 0, _ref = phrases.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      output_string += (__indexOf.call(blank_chosen, i) < 0 ? phrases[i] : "<div class=\"form-group\"><input type=\"text\" class=\"form-control\" name=\"input" + (to_2digit(i)) + "\" maxlength=\"" + (phrases[i].length - 1) + "\"></div>" + (phrases[i].slice(-1)));
    }
    return output_string;
  };

  root.check_answer = function(question) {
    var i, inputs, phrases, _i, _ref;
    phrases = question.split("/");
    inputs = document.getElementsByTagName("input");
    for (i = _i = 0, _ref = inputs.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      inputs[0].parentNode.innerHTML = (inputs[0].value === phrases[parseInt(inputs[0].getAttribute("name").slice(-2))].slice(0, -1) ? "<font color='green'>" + (phrases[parseInt(inputs[0].getAttribute("name").slice(-2))].slice(0, -1)) + "</font>" : "<font color='red'>" + (phrases[parseInt(inputs[0].getAttribute("name").slice(-2))].slice(0, -1)) + "</font>");
    }
    document.getElementById("submit").innerHTML = "下一题";
    if ($.cookie("gseq") && $.cookie("qseq")) {
      $.cookie("qseq", parseInt($.cookie("qseq")) + 1);
    }
    return document.getElementById("submit").onclick = function() {
      return location.reload();
    };
  };

}).call(this);

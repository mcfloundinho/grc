// Generated by CoffeeScript 1.6.3
(function() {
  var root, to_2digit;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  to_2digit = function(i) {
    if (i >= 10) {
      return i.toString();
    } else {
      return "0" + i.toString();
    }
  };

  root.get_blanks_random = function(question) {
    var i, is_blank, num_blanks, output_string, phrase, phrases, _i, _ref;
    phrases = question.split("/");
    output_string = "";
    num_blanks = 0;
    for (i = _i = 0, _ref = phrases.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      phrase = phrases[i];
      is_blank = (i === phrases.length - 1 && num_blanks === 0 ? true : i === phrases.length - 1 && num_blanks === phrases.length - 1 ? false : Math.random() < 0.4);
      output_string += (is_blank ? "<div class='form-group'><input type='text' class='form-control' name='input" + (to_2digit(i)) + "' maxlength='" + (phrase.length - 1) + "'></div>" + (phrase.slice(-1)) : phrase);
      num_blanks += (is_blank ? 1 : 0);
    }
    return output_string;
  };

  root.check_answer_random = function(question) {
    var correct, i, index, input, inputs, phrases, _i, _ref;
    phrases = question.split("/");
    inputs = document.getElementsByTagName("input");
    for (i = _i = 0, _ref = inputs.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      input = inputs[0];
      index = parseInt(input.getAttribute("name").slice(-2));
      correct = phrases[index].slice(0, -1);
      input.parentNode.innerHTML = (input.value === correct ? "<font color='green'>" + correct + "</font>" : "<font color='red'>" + correct + "</font>");
    }
    document.getElementById("submit").innerHTML = "下一题";
    if ($.cookie("gseq") && $.cookie("qseq")) {
      $.cookie("qseq", parseInt($.cookie("qseq")) + 1);
    }
    return document.getElementById("submit").onclick = function() {
      return location.reload();
    };
  };

  root.get_blanks_strict = function(question, answer) {
    var i, output_string, question_split, _i, _ref;
    question_split = question.split("###");
    output_string = "";
    for (i = _i = 0, _ref = question_split.length - 2; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      output_string += question_split[i];
      output_string += "<div class='form-group'><input type='text' class='form-control' name='input" + i + "' maxlength='" + answer[i].length + "'></div>";
    }
    return output_string += question_split[question_split.length - 1];
  };

  root.check_answer_strict = function(answer) {
    var correct, i, input, inputs, _i, _ref;
    inputs = document.getElementsByTagName("input");
    for (i = _i = 0, _ref = answer.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      input = inputs[0];
      correct = answer[i];
      input.parentNode.innerHTML = (input.value === correct ? "<font color='green'>" + correct + "</font>" : "<font color='red'>" + correct + "</font>");
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

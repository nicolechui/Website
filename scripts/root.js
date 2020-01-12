var visible;
var currLetter;
var underscore_func;
var text_func;
var next_sequence_flag = true;

var colors = ["purple", "red"];

function switch_underscore(target) {
  if (visible === true) {
    target.className = "text-underscore hidden";
    visible = false;
  }
  else {
    target.className = "text-underscore";
    visible = true;
  }
}

function write_next(target, text, underscore_target) {
  target.innerHTML = text.substring(0, currLetter);
  currLetter += 1;
  if (currLetter > text.length) {
    window.clearInterval(text_func);
    window.setTimeout(next_sequence, 1000, underscore_target);
  }
}

function next_sequence(underscore_target) {
  window.clearInterval(underscore_func);
  underscore_target.parentNode.removeChild(underscore_target);

  if (next_sequence_flag) {
    typewrite("text_two", "underscore_two", colors[1]);
    next_sequence_flag = false;
  }
}

function typewrite(text_tag, underscore_tag, color){
  currLetter = 1;
  colorIndex = 0;
  visible = true;

  var text_target = document.getElementById(text_tag);
  var underscore_target = document.getElementById(underscore_tag);
  var text = text_target.innerHTML;

  text_target.setAttribute("style", "color:" + color);
  underscore_target.setAttribute("style", "color:" + color);
  underscore_func = window.setInterval(switch_underscore, 300, underscore_target);
  text_func = window.setInterval(write_next, 120, text_target, text, underscore_target);
}

typewrite("text", "underscore", colors[0]);

function move_to_loc(tag) {
    var target = document.getElementById(tag);

}



// function([string1, string2],target id,[color1,color2])    
// consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

/*
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
*/
    /*
    var underscore = document.getElementById("underscore");
    var visible = true;
    window.setInterval(function() {
        if (visible === true) {
            underscore.className = "text-underscore hidden";
            visible = false;
        }
        else {
            underscore.className = "text-underscore";
            visible = true;
        }
    }, 300);
    */
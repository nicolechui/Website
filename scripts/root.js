var visible;
var currLetter;
var colorIndex;
var underscore_func;
var text_func;

var colors = ["purple", "red"];

function switch_underscore() {
    var underscore = document.getElementById("underscore");

    if (visible === true) {
        underscore.className = "text-underscore hidden";
        visible = false;
    }
    else {
        underscore.className = "text-underscore";
        visible = true;
    }
}

function write_next(target, text) {
    target.innerHTML = text.substring(0, currLetter);
    if (text[currLetter] == " ") {
        colorIndex = (colorIndex + 1) % colors.length;
        target.setAttribute("style", "color:" + colors[colorIndex]);
    }
    currLetter += 1;
    if (currLetter > text.length) {
        window.clearInterval(text_func);
        window.clearInterval(underscore_func);

        // Turn off underscore
        visible = true;
        // var underscore = document.getElementById("underscore")    Destroy underscore rather than changing opacity to 0.
        // underscore.parentNode.removeChild(underscore);
        switch_underscore();
    }
}

function typewrite(tag){
    currLetter = 1;
    colorIndex = 0;
    visible = true;

    var target = document.getElementById(tag);
    var text = target.innerHTML;

    target.setAttribute("style", "color:" + colors[colorIndex]);
    underscore_func = window.setInterval(switch_underscore, 250);
    text_func = window.setInterval(write_next, 120, target, text);

    document.write(text);
}

typewrite("text");
//typewrite("text_two"); modify typewrite function to take parameters text_tag and underscore_tag so we can typewrite these sequentially.


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
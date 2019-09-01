var progress = document.getElementById('progress');

//math calculation //random from 1 t0 100
var a1 = Math.floor(Math.random() * 10) + 1;
var a2 = Math.floor(Math.random() * 100) + 1;
var a3 = a1 + a2;

var b1 = Math.floor(Math.random() * 10) + 1;
var b2 = Math.floor(Math.random() * 100) + 1;
var b3 = b1 + b2;

var c1 = Math.floor(Math.random() * 10) + 1;
var c2 = Math.floor(Math.random() * 100) + 1;
var c3 = c1 + c2;

var d1 = Math.floor(Math.random() * 10) + 1;
var d2 = Math.floor(Math.random() * 100) + 1;
var d3 = d1 + d2;

var e1 = Math.floor(Math.random() * 10) + 1;
var e2 = Math.floor(Math.random() * 100) + 1;
var e3 = e1 + e2;

var f1 = Math.floor(Math.random() * 10) + 1;
var f2 = Math.floor(Math.random() * 100) + 1;
var f3 = f1 + f2;

var g1 = Math.floor(Math.random() * 10) + 1;
var g2 = Math.floor(Math.random() * 100) + 1;
var g3 = g1 + g2;

var h1 = Math.floor(Math.random() * 10) + 1;
var h2 = Math.floor(Math.random() * 100) + 1;
var h3 = h1 + h2;

var i1 = Math.floor(Math.random() * 10) + 1;
var i2 = Math.floor(Math.random() * 100) + 1;
var i3 = i1 + i2;

var j1 = Math.floor(Math.random() * 10) + 1;
var j2 = Math.floor(Math.random() * 100) + 1;
var j3 = j1 + j2;

var trueCount = 0;
trueCount++;
var questionCount = 0;
questionCount++;

function begin1() {
  number1.innerHTML = questionCount++;
  disappear1.innerHTML = '';
  message1.innerHTML = a1 + '<br />' + '+' + '<br />' + a2 + '<br />' + '________';
  message2.innerHTML = '<input type=text id=input1 /> <button onclick=submit1()>Submit</button>';
}

function submit1() {
  var answer1 = input1.value;
  show1.innerHTML = answer1;
  if (answer1 === a3) {
    trueCount++;
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question2()>Next</button>';
  } else {
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question2()>Next</button>';
  }
}

function question2() {
  number1.innerHTML = questionCount++;
  //update the progress bar
  progress.style.width = `${(questionCount / 10) * 100}%`;
  message1.innerHTML = b1 + '<br />' + '+' + '<br />' + b2 + '<br />' + '__________';
  message2.innerHTML = '<input type=text id=input2 /> <button onclick=submit2()>Submit</button>';
  message3.innerHTML = '';
  show1.innerHTML = '';
  message4.innerHTML = '';
}

function submit2() {
  var answer1 = input2.value;
  show1.innerHTML = answer1;
  if (answer1 == b3) {
    trueCount++;
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question3()>Next</button>';
  } else {
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question3()>Next</button>';
  }
}

function question3() {
  number1.innerHTML = questionCount++;
  //update the progress bar
  progress.style.width = `${(questionCount / 10) * 100}%`;
  message1.innerHTML = c1 + '<br />' + '+' + '<br />' + c2 + '<br />' + '__________';
  message2.innerHTML = '<input type=text id=input3 /> <button onclick=submit3()>Submit</button>';
  message3.innerHTML = '';
  show1.innerHTML = '';
  message4.innerHTML = '';
}

function submit3() {
  var answer1 = input3.value;
  show1.innerHTML = answer1;
  if (answer1 == c3) {
    trueCount++;
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question4()>Next</button>';
  } else {
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question4()>Next</button>';
  }
}

function question4() {
  number1.innerHTML = questionCount++;
  //update the progress bar
  progress.style.width = `${(questionCount / 10) * 100}%`;
  message1.innerHTML = d1 + '<br />' + '+' + '<br />' + d2 + '<br />' + '__________';
  message2.innerHTML = '<input type=text id=input4 /> <button onclick=submit4()>Submit</button>';
  message3.innerHTML = '';
  show1.innerHTML = '';
  message4.innerHTML = '';
}

function submit4() {
  var answer1 = input4.value;
  show1.innerHTML = answer1;
  if (answer1 == d3) {
    trueCount++;
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question5()>Next</button>';
  } else {
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question5()>Next</button>';
  }
}

function question5() {
  number1.innerHTML = questionCount++;
  //update the progress bar
  progress.style.width = `${(questionCount / 10) * 100}%`;
  message1.innerHTML = e1 + '<br />' + '+' + '<br />' + e2 + '<br />' + '__________';
  message2.innerHTML = '<input type=text id=input5 /> <button onclick=submit5()>Submit</button>';
  message3.innerHTML = '';
  show1.innerHTML = '';
  message4.innerHTML = '';
}

function submit5() {
  var answer1 = input5.value;
  show1.innerHTML = answer1;
  if (answer1 == e3) {
    trueCount++;
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question6()>Next</button>';
  } else {
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question6()>Next</button>';
  }
}

function question6() {
  number1.innerHTML = questionCount++;
  //update the progress bar
  progress.style.width = `${(questionCount / 10) * 100}%`;
  message1.innerHTML = f1 + '<br />' + '+' + '<br />' + f2 + '<br />' + '__________';
  message2.innerHTML = '<input type=text id=input6 /> <button onclick=submit6()>Submit</button>';
  message3.innerHTML = '';
  show1.innerHTML = '';
  message4.innerHTML = '';
}

function submit6() {
  var answer1 = input6.value;
  show1.innerHTML = answer1;
  if (answer1 == f3) {
    trueCount++;
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question7()>Next</button>';
  } else {
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question7()>Next</button>';
  }
}

function question7() {
  number1.innerHTML = questionCount++;
  //update the progress bar
  progress.style.width = `${(questionCount / 10) * 100}%`;
  message1.innerHTML = g1 + '<br />' + '+' + '<br />' + g2 + '<br />' + '__________';
  message2.innerHTML = '<input type=text id=input7 /> <button onclick=submit7()>Submit</button>';
  message3.innerHTML = '';
  show1.innerHTML = '';
  message4.innerHTML = '';
}

function submit7() {
  var answer1 = input7.value;
  show1.innerHTML = answer1;
  if (answer1 == g3) {
    trueCount++;
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question8()>Next</button>';
  } else {
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question8()>Next</button>';
  }
}

function question8() {
  number1.innerHTML = questionCount++;
  //update the progress bar
  progress.style.width = `${(questionCount / 10) * 100}%`;
  message1.innerHTML = h1 + '<br />' + '+' + '<br />' + h2 + '<br />' + '__________';
  message2.innerHTML = '<input type=text id=input8 /> <button onclick=submit8()>Submit</button>';
  message3.innerHTML = '';
  show1.innerHTML = '';
  message4.innerHTML = '';
}

function submit8() {
  var answer1 = input8.value;
  show1.innerHTML = answer1;
  if (answer1 == h3) {
    trueCount++;
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question9()>Next</button>';
  } else {
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question9()>Next</button>';
  }
}

function question9() {
  number1.innerHTML = questionCount++;
  //update the progress bar
  progress.style.width = `${(questionCount / 10) * 100}%`;
  message1.innerHTML = i1 + '<br />' + '+' + '<br />' + i2 + '<br />' + '__________';
  message2.innerHTML = '<input type=text id=input9 /> <button onclick=submit9()>Submit</button>';
  message3.innerHTML = '';
  show1.innerHTML = '';
  message4.innerHTML = '';
}

function submit9() {
  var answer1 = input9.value;
  show1.innerHTML = answer1;
  if (answer1 == i3) {
    trueCount++;
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question10()>Next</button>';
  } else {
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=question10()>Next</button>';
  }
}

function question10() {
  number1.innerHTML = questionCount++;
  //update the progress bar
  progress.style.width = `${(questionCount / 10) * 100}%`;
  message1.innerHTML = j1 + '<br />' + '+' + '<br />' + j2 + '<br />' + '__________';
  message2.innerHTML = '<input type=text id=input10 /> <button onclick=submit10()>Submit</button>';
  message3.innerHTML = '';
  show1.innerHTML = '';
  message4.innerHTML = '';
}

function submit10() {
  var answer1 = input10.value;
  show1.innerHTML = answer1;
  if (answer1 == j3) {
    trueCount++;
    message3.innerHTML = 'Correct';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=end1()>End of Quiz</button>';
  } else {
    message3.innerHTML = 'Incorrect';
    message2.innerHTML = '';
    message4.innerHTML = '<button onclick=end1()>End of Quiz</button>';
  }
}

function end1() {
  message1.innerHTML = 'End of Quiz';
  message2.innerHTML = 'You scored ' + (trueCount - 1) + ' out of 10';
  message3.innerHTML = 'Thanks for taking this quiz.';
  show1.innerHTML = '';
  message4.innerHTML = '<button onclick=repeat1()>Re-Math!</button>';
}

function repeat1() {
  location.reload();
}

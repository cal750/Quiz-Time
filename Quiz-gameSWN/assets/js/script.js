var timeleft = 15;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Out of time!";
    pos = 6, renderQuestion();
    get("test_status").innerHTML = "You ran out of time!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
  {
      question: "What is the capitol city in the Hunger games series",
      a: "Warron",
      b: "Panem",
      c: "Licel",
      answer: "B"
    },
  {
      question: "How many sides on a Dodecahedron",
      a: "120",
      b: "4",
      c: "12",
      answer: "C"
    },
  {
      question: "How many pixels is 1920 x 1080",
      a: "2073600",
      b: "1920900",
      c: "4021080",
      answer: "A"
    },
  {
      question: "What is 8 x 12?",
      a: "88",
      b: "112",
      c: "96",
      answer: "C"
    },
   {
        question: "What game was made by RareWare",
        a: "Banjo Kazooie",
        b: "Crash Bandicoot",
        c: "DOOM",
        answer: "A"
      },
      {
        question: "What is the least used search engine",
        a: "Google Chrome",
        b: "Microsoft Edge",
        c: "Internet Explorer",
        answer: "C"
      },
  ];

function get(x){
    return document.getElementById(x);
  }
  function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      pos = 0;
      correct = 0;
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    if(choice == questions[pos].answer){
      correct++;
    }
    pos++;
    renderQuestion();
  }
  window.addEventListener("load", renderQuestion);
